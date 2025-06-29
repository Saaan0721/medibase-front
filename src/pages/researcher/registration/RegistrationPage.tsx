"use client";

import { ArrowLeft, FolderOpen } from "lucide-react";
import UserAvatar from "../../../components/UserAvatar";

interface ResearchRegistrationPageProps {
  onBack: () => void;
  onStartRecruitment: () => void;
}

export default function ResearchRegistrationPage({
  onBack,
  onStartRecruitment,
}: ResearchRegistrationPageProps) {
  return (
    <div className="min-h-screen bg-[#F5F6F7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-20 pt-10 pb-6">
        <div className="flex justify-between items-center">
          {/* 왼쪽: MediBase와 연구 등록 */}
          <div className="flex items-center space-x-6">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 self-start">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex flex-col items-end space-y-12">
              <h1 className="text-[2.25rem] font-bold text-gray-800 leading-[2.75rem]">MediBase</h1>
              <h2 className="text-[1.75rem] font-bold text-gray-700 border-b-[3px] border-gray-700 w-fit pb-1 px-2 mt-4">
                연구 등록
              </h2>
            </div>
          </div>

          {/* 오른쪽: 박콜라님 아바타 + 버튼 */}
          <div className="flex flex-col items-end gap-4">
            <UserAvatar name="박콜라" />
            <button
              onClick={onStartRecruitment}
              className="px-4 py-3 rounded bg-gray-900 text-white hover:bg-gray-800"
            >
              모집 시작하기
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-8 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6">새 연구 등록</h2>
          <form className="space-y-6">
            {/* 연구 소개 헤더 */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                i
              </div>
              <h3 className="text-base font-semibold text-gray-900">연구 소개</h3>
            </div>

            {/* 제목 */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                연구 제목 <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                placeholder="특정 항암 치료를 받은 암 환자에서 항암제군별 가려움 중증도 비교"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            {/* 배경 */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                연구 배경 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                placeholder="EGFR 억제제, 면역관문억제제, 표적치료제, 기존 화학요법 등 주요 항암제 클래스별 가려움 중증도(Pruritus Severity) 평균 차이를 비교"
                className="w-full border border-gray-300 px-3 py-2 rounded min-h-[120px] resize-none"
              />
            </div>

            {/* 연구 참여자 */}
            <div>
              <label htmlFor="participants" className="block text-sm font-medium mb-1">
                연구 대상자 선정 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="participants"
                placeholder="성인(≥18세) 고형암 또는 혈액암 진단 환자/EGFR 억제제(예: erlotinib), 면역관문억제제(예: pembrolizumab), 표적치료제(예: imatinib), 전통적 화학요법(예: platinum 계열) 중 하나 단독 또는 병용 투여"
                className="w-full border border-gray-300 px-3 py-2 rounded min-h-[120px] resize-none"
              />
            </div>

            {/* 설문 섹션 */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  <FolderOpen className="w-3 h-3" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">설문 형태 설정</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">나이</label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded" defaultValue="">
                    <option value="" disabled>선택</option>
                    <option value="adult-self">본인(성인)</option>
                    <option value="teen-self">본인(청소년)</option>
                    <option value="guardian-adult">보호자 응답(성인 환자)</option>
                    <option value="guardian-teen">보호자 응답(청소년 환자)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">건강 카테고리</label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded" defaultValue="">
                    <option value="" disabled>선택</option>
                    <option value="mental">정신 건강</option>
                    <option value="social">사회적 건강</option>
                    <option value="physical">신체 건강</option>
                    <option value="overall">전반적 건강</option>
                    <option value="profile">건강 프로파일</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">영역</label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded" defaultValue="">
                    <option value="" disabled>선택</option>
                    <option value="pain">통증</option>
                    <option value="fatigue">피로</option>
                    <option value="itching">가려움</option>
                    <option value="breathing">호흡 곤란</option>
                    <option value="gastro">위장 건강</option>
                    <option value="physical-function">신체 기능</option>
                    <option value="sleep">수면 장애</option>
                    <option value="sexual">성기능 및 만족도</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">세부 영역</label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded" defaultValue="">
                    <option value="" disabled>선택</option>
                    <option value="life-interference">생활 방해</option>
                    <option value="quality-of-life">삶의 질</option>
                    <option value="scratching">긁는 행동</option>
                    <option value="symptom-severity">증상 심각도</option>
                    <option value="activity-clothing">활동 및 복장</option>
                    <option value="mood-sleep">기분 및 수면</option>
                    <option value="triggers">유발 요인</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
