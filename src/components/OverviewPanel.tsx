// src/pages/patient/FhrUploadPanel.tsx

import { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function FhrUploadPanel() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <>
      {/* 파일 업로드 영역 */}
      <section className="bg-white p-8">
        <h2 className="text-h3 font-bold text-gray-900 mb-2">파일 업로드</h2>
        <p className="text-subtitle2 font-medium text-gray-900 mb-4">
          FHIR 형태의 전자 의무기록을 업로드해주세요
        </p>

        <label className="border-2 border-dashed border-gray-300 bg-gray-100 rounded p-10 w-full h-64 flex flex-col items-center justify-center cursor-pointer">
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
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />
          <button className="bg-black text-white px-4 py-2 rounded-md text-body1 font-bold">
            제출하기
          </button>
        </label>
      </section>

      {/* 보안 설명 */}
      <section className="p-8">
        <h3 className="text-h3 font-bold mb-4">데이터 보안 및 개인정보 보호</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm h-40 border border-gray-300 rounded-xl overflow-hidden items-center">
          {[
            {
              title: "암호화 전송",
              description: "모든 데이터는 암호화되어 전송됩니다",
            },
            {
              title: "가명 처리",
              description: "개인 식별 정보는 자동으로 가명 처리됩니다",
            },
            {
              title: "접근 제어",
              description: "승인된 연구자만이 데이터에 접근할 수 있습니다",
            },
          ].map(({ title, description }, idx) => (
            <div key={idx} className="bg-white p-4">
              <div className="flex items-start gap-2">
                <div className="flex items-center justify-center w-4 h-6 mt-[2px]">
                  <span className="w-3 h-3 bg-secondary rounded-full" />
                </div>
                <div>
                  <p className="text-subtitle2 text-gray-900 font-bold mb-1">
                    {title}
                  </p>
                  <p className="text-gray-700 text-subtitle2 font-medium">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
