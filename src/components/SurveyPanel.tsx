import { useState } from "react";
import { globalHealthQuestions } from "../data/globalHealthQuestions";
import { itchInterferenceQuestions } from "../data/itchInterferenceQuestions";

type Question = {
  id: number;
  text: string;
  options: string[];
};

export default function SurveyPanel() {
  const [page, setPage] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentSurvey =
    page === 1 ? globalHealthQuestions : itchInterferenceQuestions;

  const handleSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  return (
    <>
      {/* 설명 블록 */}
      <section className="p-8">
        <h3 className="text-h3 font-bold mb-4">{currentSurvey.title}</h3>
        <div className="grid grid-cols-1 md:grid-rows-2 gap-4 text-sm border p-8 border-gray-300 rounded-xl overflow-hidden items-center">
          {currentSurvey.meta.map(
            (item: { title: string; description: string }, idx: number) => (
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
            )
          )}
        </div>
      </section>

      {/* 설문 문항 */}
      <div className="px-16">
        {currentSurvey.questions.map((q: Question) => (
          <div key={q.id} className="space-y-3 mb-8">
            <p className="font-bold text-h3 text-gray-900">
              {q.id}. {q.text}
            </p>
            <div className="flex flex-wrap gap-2 px-8 py-2">
              {q.options.map((opt: string, idx: number) => {
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
        {/* 왼쪽: 이전 / 다음 버튼 */}
        <div className="flex gap-2">
          {page > 1 && (
            <button
              onClick={() => setPage((page - 1) as 1 | 2)}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded"
            >
              이전
            </button>
          )}
          {page < 2 && (
            <button
              onClick={() => setPage((page + 1) as 1 | 2)}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              다음
            </button>
          )}
        </div>

        {/* 오른쪽: 제출하기 버튼 */}
        <button
          onClick={() => alert("설문 완료!")}
          className="bg-black text-white px-6 py-2 rounded"
        >
          제출하기
        </button>
      </div>
    </>
  );
}
