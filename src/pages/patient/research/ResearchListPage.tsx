import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import { researchData } from "../../../data/researchData";
import { useEffect, useState } from "react";
import ConfirmModal from "../../../components/ConfirmModal";
import { useModalStore } from "../../../store/useModalStore";
import ConsentModal from "../../../components/ConsentModal";
import UserAvatar from "../../../components/UserAvatar";
import UploadConfirmModal from "../../../components/UploadModal";
import StatusBadge from "../../../components/StatusBadge";

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* 헤더 */}
      <header className="flex justify-between items-center px-8 py-10">
        <Logo />
        <UserAvatar name="김커피" />
      </header>

      {/* 본문 */}
      <main className="flex-1 overflow-y-auto bg-gray-100 px-8 py-8 space-y-4">
        {researchData.map((survey) => (
          <div
            key={survey.key}
            className=" bg-white rounded-[20px] p-8 hover:bg-gray-50 transition cursor-pointer"
            onClick={() => navigate(`/patient/research/${survey.key}`)}
          >
            <div className="flex items-center gap-2 my-4">
              <h3 className="text-subtitle1 font-bold text-gray-900">
                {survey.title}
              </h3>
              <StatusBadge status="진행 중" />
            </div>

            <p className="text-subtitle2 text-gray-700 my-4">
              {survey.meta[0]?.description}
            </p>
            <div className="flex items-center gap-6 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/person.svg"
                  alt="person icon"
                  className="w-6 h-6"
                />
                <p className="text-subtitle2 text-gray-700">
                  {survey.institution}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/calendar.svg"
                  alt="calendar icon"
                  className="w-6 h-6"
                />
                <p className="text-subtitle2 text-gray-700">
                  마감일 | {survey.due}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/reward.svg"
                  alt="reward icon"
                  className="w-6 h-6"
                />
                <p className="text-subtitle2 text-gray-700">{survey.reward}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* 모달 */}
      {showConfirmModal && (
        <UploadConfirmModal
          onClose={() => setShowConfirmModal(false)}
          onConfirm={() => {
            setShowConfirmModal(false);
            setShowConsentModal(true);
          }}
        />
      )}

      {showConsentModal && (
        <ConsentModal
          onConfirm={() => {
            setShowConsentModal(false);
            navigate("/patient/upload");
          }}
        />
      )}
    </div>
  );
}
