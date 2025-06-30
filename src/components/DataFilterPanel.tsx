import { useState } from "react";

type DataStructure = {
  [key: string]: {
    [key: string]: string[];
  };
};

const dataStructure: DataStructure = {
  환자정보: {
    나이: ["10대 이하", "20대", "30대", "40대", "50대"],
    키: [],
    몸무게: [],
    BMI: [],
  },
  의료기관정보: {},
  PRO: {},
};

type DataFilterPanelProps = {
  onChange?: (options: string[]) => void;
};

export default function DataFilterPanel({ onChange }: DataFilterPanelProps) {
  // '환자정보'만 보여주기
  const subFields = dataStructure["환자정보"];
  const subKeys = Object.keys(subFields);
  const [selectedSub, setSelectedSub] = useState<string | null>(
    subKeys.length > 0 ? subKeys[0] : null
  );
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleToggleOption = (option: string) => {
    const updated = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updated);
    onChange?.(updated); // 변경 알림
  };

  return (
    <div className="flex bg-white rounded border w-[500px] shadow-sm">
      {/* Sub Category (ex. 나이, 키...) */}
      <div className="flex flex-col border-r">
        {subKeys.map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSub(sub)}
            className={`px-4 py-2 text-left text-sm w-[301px] ${
              selectedSub === sub
                ? "bg-blue-50 font-semibold"
                : "hover:bg-gray-50"
            }`}
          >
            {selectedOptions.length > 0 && selectedSub === sub && "✓ "}
            {sub}
          </button>
        ))}
      </div>

      {/* 옵션 리스트 */}
      {selectedSub && subFields[selectedSub]?.length > 0 && (
        <div className="flex flex-col">
          {subFields[selectedSub].map((option) => (
            <button
              key={option}
              onClick={() => handleToggleOption(option)}
              className={`px-4 py-2 text-left text-sm ${
                selectedOptions.includes(option)
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-gray-50"
              }`}
            >
              {selectedOptions.includes(option) ? "✓ " : ""}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
