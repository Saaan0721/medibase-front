import { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { researchData } from "../data/researchData";

type OverviewPanelProps = {
  researchId: string;
};

export default function OverviewPanel({ researchId }: OverviewPanelProps) {
  console.log("OverviewPanel rendered with researchId:", researchId);
  const [fileName, setFileName] = useState<string | null>(null);
  const survey = researchData.find((item) => item.key === researchId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  if (!survey) return <p>존재하지 않는 연구입니다.</p>;

  return (
    <>
      {/* 연구 개요 제목 및 설명 */}
      <section className="bg-white p-8">
        <h2 className="text-h3 font-bold text-gray-900 mb-2">{survey.title}</h2>
        <p className="text-subtitle2 font-medium text-gray-900 mb-6">
          {survey.meta?.[0]?.description}
        </p>
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
