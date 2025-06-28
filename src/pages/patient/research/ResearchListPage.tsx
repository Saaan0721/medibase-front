import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import { researchData } from "../../../data/researchData";

export default function ResearchListPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      {/* 헤더 */}
      <header className="flex justify-between items-center pb-4 mb-6">
        <Logo />
        <div className="flex items-center gap-4">
          <span className="text-gray-600">김커피 님</span>
        </div>
      </header>

      {/* 본문 */}
      <h2 className="text-h2 font-bold text-gray-900 mb-6">연구 설문 목록</h2>

      <div className="space-y-4">
        {researchData.map((survey) => (
          <div
            key={survey.key}
            className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition cursor-pointer"
            onClick={() => navigate(`/patient/research/${survey.key}`)}
          >
            <h3 className="text-h3 font-semibold text-gray-900 mb-2">
              {survey.title}
            </h3>
            <p className="text-subtitle2 text-gray-700">
              {survey.meta[0]?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
