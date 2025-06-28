"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import ResearchRegistrationPage from "../registration/RegistrationPage";
import UserAvatar from "../../../components/UserAvatar";
import { useNavigate } from "react-router-dom";

export default function ResearchDashboard() {
  const navigate = useNavigate(); // 추가
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [hasNewResearch, setHasNewResearch] = useState(false);

  const handleStartRecruitment = () => {
    setHasNewResearch(true);
    setCurrentPage("dashboard");
  };

  const handleCardClick = (researchId: string) => {
    navigate(`/researcher/research/${researchId}`);
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-8 pt-10 pb-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-3">
            <h1 className="text-h2 font-bold text-gray-800">MediBase</h1>
            <h2 className="text-h3 font-bold text-gray-700">연구 현황</h2>
          </div>
          <div className="flex flex-col items-end space-y-5">
            <UserAvatar name="박콜라" />
            <button
              onClick={() => setCurrentPage("register")}
              className="px-4 py-3 rounded bg-gray-900 text-white hover:bg-gray-800"
            >
              연구 등록하기
            </button>
          </div>
        </div>
      </header>

      {/* Middle summary area */}
      <section className="bg-gray-200 px-8 py-8">
        <div className="grid grid-cols-4 gap-6">
          {[
            "전체 연구",
            "진행 중 연구",
            "모집 중 연구",
            "연구 참여 희망자",
          ].map((label, idx) => {
            const count = ["65", "2", hasNewResearch ? "1" : "1", "123"][idx];
            const unit = ["개", "개", "개", "명"][idx];
            return (
              <div key={label} className="bg-white rounded-lg shadow p-6">
                <div className="text-h3 font-bold text-gray-900">
                  {count}
                  <span className="text-subtitle1 font-bold text-gray-900 ml-1">
                    {unit}
                  </span>
                </div>
                <div className="text-b1 text-gray-900 mt-2">{label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main content area */}
      <main className="bg-[#F5F6F7] px-8 py-10">
        <div className="mb-6">
          <h3 className="text-h3 font-bold text-gray-900 mb-4">
            현재 진행 중인 연구
          </h3>

          {/* 연구 카드 1 */}
          <div
            className="bg-white rounded-lg shadow p-5 mb-4 cursor-pointer hover:ring-2 hover:ring-blue-400"
            onClick={() => handleCardClick("sleep-disorder")}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <h4 className="text-subtitle1 font-bold text-gray-900">
                    수면장애 환자에서 맞춤형 행동치료의 효과 비교
                  </h4>
                  <span className="text-b2 font-bold bg-green-100 text-green-700 px-2 py-1 rounded">
                    진행 중
                  </span>
                </div>
                <p className="text-subtitle1 text-gray-700 mb-3">
                  연구 설명 한 줄
                </p>
                <div className="flex items-center space-x-4 text-subtitle2 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>등록일 | 2024-06-28</span>
                  </div>
                  <span>설문항목 12개</span>
                </div>
              </div>
              <div className="ml-6 text-right min-w-[88px]">
                <div className="font-semibold text-blue-600">
                  312<span className="text-gray-400"> /400명</span>
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

          {/* 연구 카드 2 */}
          <div
            className="bg-white rounded-lg shadow p-5 mb-4 cursor-pointer hover:ring-2 hover:ring-blue-400"
            onClick={() => handleCardClick("quality-cost")}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <h4 className="text-subtitle1 font-bold text-gray-900">
                    삶의 질 지표와 의료비 지출 상관관계 분석
                  </h4>
                  <span className="text-b2 font-bold bg-green-100 text-green-700 px-2 py-1 rounded">
                    진행 중
                  </span>
                </div>
                <p className="text-subtitle1 text-gray-700 mb-3">
                  연구 설명 한 줄
                </p>
                <div className="flex items-center space-x-4 text-subtitle2 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>등록일 | 2024-06-28</span>
                  </div>
                  <span>설문항목 12개</span>
                </div>
              </div>
              <div className="ml-6 text-right min-w-[88px]">
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

          {/* 새 등록된 연구 카드 */}
          {hasNewResearch && (
            <div
              className="bg-white rounded-lg shadow p-5 mb-4 cursor-pointer hover:ring-2 hover:ring-blue-400"
              onClick={() => handleCardClick("itchiness-comparison")}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="text-subtitle1 font-bold text-gray-900">
                      특정 항암 치료를 받은 암 환자에서 항암제군별 가려움 중증도
                      비교
                    </h4>
                    <span className="text-b2 font-bold bg-green-100 text-green-700 px-2 py-1 rounded">
                      진행 중
                    </span>
                  </div>
                  <p className="text-subtitle1 text-gray-700 mb-3">
                    EGFR 억제제, 면역관문억제제, 표적치료제, 기존 화학요법 등
                    주요 항암제 클래스별 가려움 중증도 평균 차이를 비교
                  </p>
                  <div className="flex items-center space-x-4 text-subtitle2 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>등록일 | 2025-06-29</span>
                    </div>
                    <span>설문항목 8개</span>
                  </div>
                </div>
                <div className="ml-6 text-right min-w-[88px]">
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
      </main>
    </div>
  );
}
