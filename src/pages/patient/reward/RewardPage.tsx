import { useLocation, useNavigate } from "react-router-dom";

export default function RewardPage() {
  const { state } = useLocation();
  const rawText = state?.report || "";
  const navigate = useNavigate();

  console.log("리포트 내용:", rawText);

  const lines = rawText.split("\n").filter(Boolean);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-h2 font-bold mb-6 text-gray-900">
        📋 건강 분석 리포트
      </h1>

      <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-4 text-gray-800 text-sm leading-relaxed">
        {lines.map((line: string, idx: number) => {
          if (line.startsWith("===")) {
            return <hr key={idx} className="border-t-2 border-gray-400 my-6" />;
          }

          if (line.startsWith("---")) {
            return <hr key={idx} className="border-t border-gray-300" />;
          }

          if (line.startsWith("#")) {
            return (
              <h2 key={idx} className="text-lg font-bold text-black mt-6">
                {line.replace(/#*/g, "").trim()}
              </h2>
            );
          }

          if (/^\d+\./.test(line)) {
            return (
              <h3 key={idx} className="text-base font-bold mt-4 text-gray-900">
                {line}
              </h3>
            );
          }

          if (line.startsWith("· ")) {
            return (
              <li key={idx} className="ml-6 list-disc">
                {line.replace(/^· /, "")}
              </li>
            );
          }

          if (line.startsWith("- ")) {
            return (
              <p key={idx} className="ml-2">
                <span className="text-black font-medium">•</span>{" "}
                {line.replace(/^- /, "")}
              </p>
            );
          }

          return <p key={idx}>{line}</p>;
        })}
      </div>

      {/* 하단 이동 버튼 */}
      <div className="flex justify-end mt-8">
        <button
          onClick={() => navigate("/patient/research")}
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
        >
          연구 참여하러 가기
        </button>
      </div>
    </div>
  );
}
