import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartResearch = () => {
    navigate("/patient/research");
  };

  return (
    <div className="p-8">
      <h1 className="text-h2 font-bold mb-4">환영합니다</h1>
      <p className="text-subtitle2 text-gray-700 mb-6">
        여기에서 연구를 시작하세요.
      </p>
      <button
        onClick={handleStartResearch}
        className="bg-black text-white px-6 py-2 rounded"
      >
        시작하기
      </button>
    </div>
  );
}
