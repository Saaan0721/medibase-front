import { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";
import { sha256 } from "../utils/sha256";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

function extractFullName(resource: any): string | null {
  try {
    // publicData[0].resource.subject.resource.name[0].text
    const name =
      resource.publicData?.[0]?.resource?.subject?.resource?.name?.[0]?.text;

    if (typeof name === "string") {
      return name;
    }
  } catch (_) {
    // 예외 무시
  }

  return null;
}

export default function FhrUploadPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setName } = useUserStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setFileName(selected.name);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("파일을 선택해주세요");
      return;
    }

    try {
      setLoading(true);
      const text = await file.text();
      const json = JSON.parse(text);

      const name = extractFullName(json); // 기존 이름 추출 함수
      const nameHash = await sha256(name || ""); // 이름이 없을 경우 빈 문자열 해시
      const baseUrl = process.env.REACT_APP_API_BASE_URL;

      setName(name || ""); // 이름 설정 (없으면 빈 문자열)

      // 1단계: FHIR 업로드
      await axios.post(`${baseUrl}/ingest-fhir`, {
        name_hash: nameHash,
        full_name: name,
        resource: json,
      });

      // 2단계: 리포트 생성 요청
      const formData = new FormData();
      if (!file) return;

      formData.append(
        "files",
        new Blob([await file.arrayBuffer()], { type: file.type }),
        file.name
      );

      const reportRes = await axios.post(`${baseUrl}/health-report`, formData, {
        headers: {
          // Content-Type 생략! axios가 자동으로 설정하게 둬야 함
        },
      });

      // 리포트 페이지로 이동
      navigate("/patient/reward", { state: reportRes.data });
    } catch (err) {
      console.error("업로드 실패", err);
      alert("오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-8">
      <h2 className="text-h3 font-bold text-gray-900 mb-2">파일 업로드</h2>
      <p className="text-subtitle2 font-medium text-gray-900 mb-4">
        FHIR 형태의 전자 의무기록을 업로드해주세요
      </p>

      <label className="border-2 border-dashed border-gray-300 bg-gray-100 rounded p-10 w-full h-64 flex flex-col items-center justify-center cursor-pointer">
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
        />

        {fileName ? (
          <p className="text-gray-700 font-medium mb-2">📎 {fileName}</p>
        ) : (
          <>
            <FileUploadIcon
              sx={{ width: 60, height: 60 }}
              className="text-gray-500 mb-2"
            />
            <p className="text-gray-700 text-subtitle2 font-bold mb-2">
              파일을 드래그하거나 클릭하여 선택하세요
            </p>
          </>
        )}

        <p className="text-body2 text-gray-700 mb-4">
          FHIR(JSON) 파일만 지원합니다
        </p>
      </label>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded font-bold disabled:opacity-50"
        >
          {loading ? "전송 중..." : "제출하기"}
        </button>
      </div>
    </section>
  );
}
