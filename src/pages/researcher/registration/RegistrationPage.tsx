"use client";

import { ArrowLeft } from "lucide-react";
import UserAvatar from "../../../components/UserAvatar";

interface ResearchRegistrationPageProps {
  onBack: () => void;
  onStartRecruitment: () => void;
}

export default function ResearchRegistrationPage({
  onBack,
}: ResearchRegistrationPageProps) {
  return (
    <div className="min-h-screen bg-[#F5F6F7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 pt-8 pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex flex-col space-y-1">
              <h1 className="text-xl font-bold text-black">MediBase</h1>
              <h2 className="text-base text-black">연구 등록</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <UserAvatar name="박콜라" />
            <span className="text-sm text-gray-800">박콜라 님</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-8 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6">새 연구 등록</h2>
          <form className="space-y-6">
            {/* 제목 */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                연구 제목 <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                placeholder="연구 제목을 입력하세요"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            {/* 설명 */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                연구 설명 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                placeholder="연구에 대한 상세한 설명을 입력하세요"
                className="w-full border border-gray-300 px-3 py-2 rounded min-h-[120px]"
              />
            </div>

            {/* 분야 */}
            <div>
              <label htmlFor="field" className="block text-sm font-medium mb-1">
                연구 분야 <span className="text-red-500">*</span>
              </label>
              <select
                id="field"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  연구 분야를 선택하세요
                </option>
                <option value="experimental">실험의학</option>
                <option value="clinical">임상의학</option>
                <option value="preventive">예방의학</option>
                <option value="basic">기초의학</option>
              </select>
            </div>

            {/* 참여자 수 */}
            <div>
              <label
                htmlFor="participants"
                className="block text-sm font-medium mb-1"
              >
                목표 참여자 수 <span className="text-red-500">*</span>
              </label>
              <input
                id="participants"
                type="number"
                placeholder="예: 200"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>

            {/* 기간 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="start-date"
                  className="block text-sm font-medium mb-1"
                >
                  연구 시작일 <span className="text-red-500">*</span>
                </label>
                <input
                  id="start-date"
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="end-date"
                  className="block text-sm font-medium mb-1"
                >
                  연구 종료일 <span className="text-red-500">*</span>
                </label>
                <input
                  id="end-date"
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
            </div>

            {/* 상태 */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1"
              >
                연구 상태 <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                className="w-full border border-gray-300 px-3 py-2 rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  연구 상태를 선택하세요
                </option>
                <option value="recruiting">모집 중</option>
                <option value="ongoing">진행 중</option>
                <option value="pending">승인 대기</option>
              </select>
            </div>

            {/* 버튼 */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={onBack}
                className="text-gray-600 hover:underline"
              >
                취소
              </button>
              <button
                type="submit"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 rounded font-semibold"
              >
                연구 등록
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
