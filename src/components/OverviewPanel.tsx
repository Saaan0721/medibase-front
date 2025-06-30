import { useState } from "react";
import { researchData } from "../data/researchData";

type OverviewPanelProps = {
  researchId: string;
};

export default function OverviewPanel({ researchId }: OverviewPanelProps) {
  const survey = researchData.find((item) => item.key === researchId);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  if (!survey) return <p>존재하지 않는 연구입니다.</p>;

  return (
    <section className="bg-[#F6F7F9] min-h-screen px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* 좌측 이미지 및 타이틀 */}
        <div className=" flex flex-col items-start">
          <img
            src="/assets/virus.png"
            alt="연구 이미지"
            className="rounded-lg w-[600px] object-cover mb-4"
          />
          <h2 className="text-subtitle2 font-bold text-gray-900 mb-1 ml-3">
            특정 항암 치료를 받은 암 환자에서<br></br> 항암제군별 가려움 중증도
            비교
          </h2>
          <p className="text-body2 text-gray-700 ml-3">대상자</p>
        </div>

        {/* 우측 연구 정보 */}
        <div className="w-full h-fit bg-white rounded-xl p-6">
          <h3 className="text-subtitle1 font-bold text-gray-900 mb-4">
            연구 정보
          </h3>

          <div className="space-y-6 text-gray-800">
            <div>
              <h4 className="font-bold text-body1 mb-1">개요</h4>
              <ul className="list-disc ml-4 space-y-1 font-medium text-gray-500 text-body2">
                <li>
                  신항암제 사용이 증가하면서 피부 독성 – 특히 가려움(pruritus)
                  발생 빈도 및 중증도가 문제로 대두
                </li>
                <li>
                  기존 임상시험 보다는 주로 의사가 평가한 등급에 의존했으나,
                  환자 스스로 느끼는 가려움 중증도는 실제 삶의 질과 깊게 연관
                </li>
                <li>
                  약제별로 가려움 발생 양상과 강도를 비교해, 환자관리 및 부작용
                  대응 지침을 개선할 필요
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-body1 mb-1">연구 목적</h4>
              <ul className="list-disc ml-4 space-y-1 font-medium text-gray-500 text-body2">
                <li>
                  EGFR 억제제, 면역관문억제제, 표적치료제, 기존 화학요법 등 주요
                  항암제 클래스별 가려움 중증도 평균 차이 비교
                </li>
                <li>
                  가려움 발생 위험인자(나이·생활·기저피부질환·동시 복용 약제 수
                  등)가 약제별 중증도에 미치는 영향 평가
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-body1 mb-1">보유 및 이용기간</h4>
              <ul className="list-disc ml-4 space-y-1 font-medium text-gray-500 text-body2">
                <li className=" font-medium text-gray-500 text-body2">
                  연구 종료 후 최대 3년 보관 후 파기
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
