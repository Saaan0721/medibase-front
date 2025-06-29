import { useState } from "react";
import Logo from "../../../components/Logo";
import UserAvatar from "../../../components/UserAvatar";
import DataFilterPanel from "../../../components/DataFilterPanel"; // ✅ 추가
import NavTabs from "../../../components/NavTab";
import axios from "axios";
import { saveAs } from "file-saver";

const categories = [
  "환자 정보",
  "의료기관 정보",
  "진료 정보",
  "진단 내역",
  "약물 처방 내역",
  "진단 검사",
  "영상 검사",
  "병리 검사",
  "기타 검사",
  "수술 내역",
  "알레르기 및 부작용",
  "진료 기록",
];

const tabs = [{ key: "data", label: "데이터 수집" }];

// 나이 텍스트 → 숫자 범위 변환 유틸
const ageOptionToRange = (label: string): [number, number] | null => {
  if (label === "10대 이하") return [0, 19];
  const match = label.match(/^(\d{2})대$/);
  if (match) {
    const age = parseInt(match[1], 10);
    return [age, age + 9];
  }
  return null;
};

export default function ResearchExportPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("data");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleSelect = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const handleDownload = async () => {
    // 나이 조건만 전송
    const ageRanges = selectedOptions.map(ageOptionToRange).filter(Boolean) as [
      number,
      number
    ][];

    let minAge = 0;
    let maxAge = 120;
    if (ageRanges.length > 0) {
      minAge = Math.min(...ageRanges.map(([min]) => min));
      maxAge = Math.max(...ageRanges.map(([_, max]) => max));
    }

    try {
      const params = new URLSearchParams();
      params.append("min_age", minAge.toString());
      params.append("max_age", maxAge.toString());
      params.append("med_codes[]", "ABC123");
      params.append("med_codes[]", "DEF456");

      const res = await axios.get("http://13.125.199.72:8000/export-data", {
        params,
        responseType: "blob", // Blob 형식으로 응답 받기
      });

      // 파일 저장
      const blob = new Blob([res.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "result.xlsx"); // result.xlsx라는 파일명으로 다운로드
    } catch (err) {
      console.error("다운로드 실패", err);
      alert("다운로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-28 flex justify-center">
      <div className="w-[1231px]">
        {/* 헤더 */}
        <header className="flex justify-between items-center pb-4 mb-6">
          <Logo />
          <div className="flex items-center space-x-4">
            <UserAvatar name="김연구" />
          </div>
        </header>

        {/* 타이틀 */}
        <div className="mb-8">
          <div className="flex flex-row justify-between items-center">
            <NavTabs active={activeTab} onChange={setActiveTab} tabs={tabs} />
            <button
              className="bg-black text-white px-4 py-2 rounded font-semibold mb-10"
              onClick={handleDownload}
            >
              데이터 다운로드 하기
            </button>
          </div>
          <p className="text-h3 font-bold text-gray-900">
            다운로드 받을 데이터를 선택하세요
          </p>
        </div>

        {/* 선택 리스트 */}
        <div
          className={`text-body1 px-4 py-3 border font-bold
    bg-white text-gray-900 border-gray-200 hover:bg-gray-100 mb-4 h-16 rounded-xl
    flex items-center`}
        >
          FHIR 항목 전체
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-6 w-[1231px]">
          {categories.map((category) => (
            <div key={category} className="relative">
              <button
                onClick={() => toggleSelect(category)}
                className={`w-full h-16 px-4 py-3 text-left text-body1 rounded-xl border font-bold ${
                  selected.includes(category)
                    ? "bg-white border-primary border-2"
                    : "bg-white text-gray-900 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>

              {/* 버튼 바로 하단에 패널 표시 */}
              {category === "환자 정보" && selected.includes("환자 정보") && (
                <div className="absolute left-0 mt-2 z-10 w-full">
                  <DataFilterPanel
                    onChange={(options) => setSelectedOptions(options)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className={`text-body1 px-4 py-3 border font-bold
    bg-white text-gray-900 border-gray-200 hover:bg-gray-100 mb-4 h-16 rounded-xl
    flex items-center`}
        >
          PRO Data
        </div>
      </div>
    </div>
  );
}
