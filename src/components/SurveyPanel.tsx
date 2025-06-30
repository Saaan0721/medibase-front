import { useState } from "react";
import axios from "axios";
import { sha256 } from "../utils/sha256";
import { useUserStore } from "../store/useUserStore"; // zustand 예시
import { useNavigate } from "react-router-dom";
import { researchData } from "../data/researchData";

type Question = {
  id: number;
  text: string;
  options: string[];
};

type SurveyPanelProps = {
  researchId: string;
};

export default function SurveyPanel({ researchId }: SurveyPanelProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(false);
  const currentSurvey = researchData.find(
    (survey) => survey.key === "itchInterference"
  ) ?? { title: "설문이 없습니다", questions: [], meta: [] }; // 기본값 추가

  const navigate = useNavigate();
  const userName = useUserStore((state) => state.name); // zustand 사용 시

  const handleSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < currentSurvey.questions.length) {
      alert("모든 문항에 답변해주세요.");
      return;
    }

    setLoading(true);

    try {
      const nameHash = await sha256(userName);

      const payload = {
        user_id: nameHash,
        response: {
          ...currentSurvey,
          questions: currentSurvey.questions.map((q) => ({
            ...q,
            answer: answers[q.id],
          })),
        },
      };

      console.log("제출할 데이터:", payload);

      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      await axios.post(`${baseUrl}/pro-responses`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("제출되었습니다!");
      navigate("/patient/research");
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 설명 블록 */}
      <section className="p-8">
        <h3 className="text-h3 font-bold mb-4">{currentSurvey.title}</h3>
        <div className="grid grid-cols-1 md:grid-rows-2 gap-4 text-sm border p-8 border-gray-300 rounded-xl overflow-hidden items-center">
          {currentSurvey.meta.map((item, idx: number) => (
            <div key={idx} className="bg-white p-4">
              <div className="flex items-start gap-2">
                <div className="flex items-center justify-center w-4 h-6 mt-[2px]">
                  <span className="w-3 h-3 bg-secondary rounded-full" />
                </div>
                <div>
                  <p className="text-subtitle2 text-gray-900 font-bold mb-1">
                    {item.title}
                  </p>
                  <p className="text-gray-700 text-subtitle2 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 설문 문항 */}
      <div className="px-16">
        {currentSurvey.questions.map((q) => (
          <div key={q.id} className="space-y-3 mb-8">
            <p className="font-bold text-h3 text-gray-900">
              {q.id}. {q.text}
            </p>
            <div className="flex flex-wrap gap-2 px-8 py-2">
              {q.options.map((opt, idx) => {
                const isSelected = answers[q.id] === opt;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, opt)}
                    className={`px-3 py-1 text-body2 transition-colors duration-150 h-8 rounded-md font-medium ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 페이지/제출 버튼 영역 */}
      <div className="flex justify-end gap-4 items-center px-16 mt-12">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? "제출 중..." : "제출하기"}
        </button>
      </div>
    </>
  );
}
