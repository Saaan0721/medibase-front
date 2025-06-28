import { useLocation, useNavigate } from "react-router-dom";

export default function RewardPage() {
  const { state } = useLocation();
  const rawText = state?.report || "";
  const navigate = useNavigate();

  const lines = rawText.split("\n").filter(Boolean);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* 페이지 제목 */}
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        📋 건강 분석 리포트
      </h1>

      {/* 리포트 본문 */}
      <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-4 text-gray-800 leading-relaxed">
        {lines.map((line: string, idx: number) => {
          if (line.startsWith("===")) {
            return <hr key={idx} className="border-t-4 border-blue-500 my-6" />;
          }

          if (line.startsWith("---")) {
            return <hr key={idx} className="border-t border-gray-300 my-2" />;
          }

          if (
            line.startsWith("📊") ||
            line.startsWith("🏥") ||
            line.startsWith("💊") ||
            line.startsWith("📈") ||
            line.startsWith("🎯") ||
            line.startsWith("💉") ||
            line.startsWith("✅")
          ) {
            return (
              <h2 key={idx} className="text-xl font-semibold text-black mt-6">
                {line}
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
              <li key={idx} className="ml-6 list-disc text-sm text-gray-700">
                {line.replace(/^· /, "")}
              </li>
            );
          }

          if (line.startsWith("- ")) {
            return (
              <p key={idx} className="ml-2 text-sm text-gray-600">
                <span className="text-black font-medium">•</span>{" "}
                {line.replace(/^- /, "")}
              </p>
            );
          }

          return (
            <p key={idx} className="text-base text-gray-700">
              {line}
            </p>
          );
        })}
      </div>

      {/* 버튼 */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          이전으로 돌아가기
        </button>
      </div>
    </div>
  );
}
