import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import { researchData } from "../../../data/researchData";
import { useEffect, useState } from "react";
import ConfirmModal from "../../../components/ConfirmModal";
import { useModalStore } from "../../../store/useModalStore";
import ConsentModal from "../../../components/ConsentModal";
import UserAvatar from "../../../components/UserAvatar";

export default function ResearchListPage() {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const { hasSeenModal, setHasSeenModal } = useModalStore();

  useEffect(() => {
    if (!hasSeenModal) {
      setShowConfirmModal(true);
      setHasSeenModal(true);
    }
  }, [hasSeenModal]);

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      {/* 헤더 */}
      <header className="flex justify-between items-center pb-4 mb-6">
        <Logo />
        <UserAvatar name="김커피" />
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
      {/* 1차 확인 모달 */}
      {showConfirmModal && (
        <ConfirmModal
          title="전자 의무기록이 필요합니다"
          description={`설문에 참여하시기 전에\nFHIR 형식의 의무기록을 먼저 업로드해주세요.`}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={() => {
            setShowConfirmModal(false);
            setShowConsentModal(true); // 확인 시 동의 모달 열기
          }}
          confirmText="업로드하러 가기"
          cancelText="취소"
        />
      )}

      {/* 2차 동의 모달 */}
      {showConsentModal && (
        <ConsentModal
          onConfirm={() => {
            setShowConsentModal(false);
            navigate("/patient/upload"); // 동의 완료 후 업로드 페이지로 이동
          }}
        />
      )}
    </div>
  );
}
