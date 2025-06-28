import { useState } from "react";
import { ConsentForms } from "../data/agreements";
import { ChevronLeft } from "lucide-react";

type ConsentKey = (typeof ConsentForms)[number]["key"];
type ViewType = "main" | ConsentKey;

type ConsentModalProps = {
  onConfirm: () => void;
};

export default function ConsentModal({ onConfirm }: ConsentModalProps) {
  const formMap = ConsentForms.reduce((acc, form) => {
    acc[form.key] = form;
    return acc;
  }, {} as Record<ConsentKey, (typeof ConsentForms)[number]>);

  const [view, setView] = useState<ViewType>("main");

  const renderDetail = (key: ConsentKey) => {
    const form = formMap[key];
    return (
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative overflow-y-auto max-h-[90vh]">
        {/* 상단 헤더 */}
        <div className="relative mb-4">
          <button
            onClick={() => setView("main")}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-700"
            aria-label="뒤로가기"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-bold text-gray-900 text-center">
            {form.title}
          </h2>
        </div>

        {/* 본문 내용 */}
        <div className="space-y-4 text-sm text-gray-800 whitespace-pre-wrap">
          {form.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-semibold mb-1">{section.heading}</h3>
              {section.body.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* 확인 문구 */}
        <div className="mt-6 mb-4 text-xs text-gray-500">
          {form.confirmText}
        </div>

        <p className="text-xs text-gray-400 text-center">
          위 내용을 모두 확인하셨으면, 아래에서 전체 동의해 주세요.
        </p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      {view === "main" ? (
        <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
          <h2 className="text-h3 font-bold text-gray-1000 mb-8 mt-4">
            개인정보 수집 동의서를 <br />
            확인해주세요.
          </h2>

          <div className="space-y-2 mb-6">
            {ConsentForms.map((form) => (
              <div
                key={form.key}
                onClick={() => setView(form.key)}
                className="flex justify-between items-center border rounded px-4 py-3 cursor-pointer hover:bg-gray-50 bg-gray-100"
              >
                <span className="text-body1 font-medium text-gray-900">
                  {form.title}
                </span>
                <span className="text-lg text-gray-900">{">"}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onConfirm}
            className="w-full py-3 rounded text-white font-semibold bg-black"
          >
            전부 확인하고 동의합니다
          </button>
        </div>
      ) : (
        renderDetail(view)
      )}
    </div>
  );
}
