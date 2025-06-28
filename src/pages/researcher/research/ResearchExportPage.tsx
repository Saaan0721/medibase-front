// src/pages/researcher/research/[researchId]/ResearchDetailPage.tsx
import { useState } from "react";
import Logo from "../../../components/Logo";
import UserAvatar from "../../../components/UserAvatar";
import DataFilterPanel from "../../../components/DataFilterPanel"; // ✅ 추가
import NavTabs from "../../../components/NavTab";
import axios from "axios";

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
    // 예시: 나이 조건만 전송
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
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const res = await axios.get(`${baseUrl}/export-data`, {
        params: { min_age: minAge, max_age: maxAge },
        responseType: "blob",
      });

      const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "exported_data.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("다운로드 실패", err);
      alert("다운로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
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
        <p className="text-subtitle1 text-gray-800">
          다운로드 받을 데이터를 선택하세요
        </p>
      </div>

      {/* 선택 리스트 */}
      <div
        className={`w-full text-sm px-4 py-3 rounded-lg border font-semibold
             bg-white text-gray-900 border-gray-200 hover:bg-gray-100 mb-4
        `}
      >
        FHIR 항목 전체
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {categories.map((category) => (
          <div key={category} className="relative">
            <button
              onClick={() => toggleSelect(category)}
              className={`w-full text-sm px-4 py-3 rounded-lg border font-semibold ${
                selected.includes(category)
                  ? "bg-black text-white"
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
        className={`w-full text-sm px-4 py-3 rounded-lg border font-semibold
             bg-white text-gray-900 border-gray-200 hover:bg-gray-100 mb-4
        `}
      >
        PRO Data
      </div>
    </div>
  );
}
