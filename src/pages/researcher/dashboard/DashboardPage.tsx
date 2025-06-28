"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import ResearchRegistrationPage from "../registration/RegistrationPage";
import UserAvatar from "../../../components/UserAvatar";

export default function ResearchDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [hasNewResearch, setHasNewResearch] = useState(false);

  const handleStartRecruitment = () => {
    setHasNewResearch(true);
    setCurrentPage("dashboard");
  };

  if (currentPage === "register") {
    return (
      <ResearchRegistrationPage
        onBack={() => setCurrentPage("dashboard")}
        onStartRecruitment={handleStartRecruitment}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F6F7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 pt-8 pb-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-1">
            <h1 className="text-xl font-semibold text-gray-800">MediBase</h1>
            <h2 className="text-base text-gray-700">연구 현황</h2>
          </div>
          <div className="flex items-center space-x-4">
            <UserAvatar name="박콜라" />
            <span className="text-sm text-gray-800">박콜라 님</span>
            <button
              onClick={() => setCurrentPage("register")}
              className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
            >
              연구 등록하기
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-8 py-10">
        <div className="grid grid-cols-4 gap-6 mb-10">
          {[
            "전체 연구",
            "진행 중 연구",
            "모집 중 연구",
            "연구 참여 희망자",
          ].map((label, idx) => {
            const count = ["65", "1", hasNewResearch ? "1" : "0", "123"][idx];
            const unit = ["개", "개", "개", "명"][idx];
            return (
              <div key={label} className="bg-white rounded-lg shadow p-6">
                <div className="text-3xl font-bold text-gray-800">
                  {count}
                  <span className="text-base font-medium text-gray-500 ml-1">
                    {unit}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-2">{label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="border-b px-6 py-4">
            <h3 className="text-base font-semibold text-gray-800">
              현재 진행 중인 연구
            </h3>
          </div>

          <div className="divide-y">
            {/* 기존 연구 */}
            <div className="px-6 py-5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-gray-800">
                      처방 약물 수 및 약물군 다양성과 삶의 질 간의 상관관계 분석
                    </h4>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                      진행 중
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    처방받은 약물의 종류 수 및 동시 복용 수가 증가할수록, 개인의
                    삶의 질 점수가 낮아지는지를 실증적으로 확인한다.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>등록일 | 2024-06-28</span>
                    </div>
                    <span>설문항목 10개</span>
                  </div>
                </div>
                <div className="ml-6 text-right">
                  <div className="font-semibold text-blue-600">
                    156<span className="text-gray-400"> /200명</span>
                  </div>
                  <div className="w-24 h-2 mt-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-300"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 새 연구 */}
            {hasNewResearch && (
              <div className="px-6 py-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-semibold text-gray-800">
                        특정 항암 치료를 받은 암 환자에서 항암제군별 가려움
                        중증도 비교
                      </h4>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                        진행 중
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      EGFR 억제제, 면역관문억제제, 표적치료제, 기존 화학요법 등
                      주요 항암제 클래스별 가려움 중증도(Pruritus Severity) 평균
                      차이를 비교
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>등록일 | 2025-06-29</span>
                      </div>
                      <span>설문항목 8개</span>
                    </div>
                  </div>
                  <div className="ml-6 text-right">
                    <div className="font-semibold text-blue-600">
                      0<span className="text-gray-400"> /200명</span>
                    </div>
                    <div className="w-24 h-2 mt-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-300"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
