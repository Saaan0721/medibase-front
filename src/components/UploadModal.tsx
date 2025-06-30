type UploadConfirmModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

export default function UploadConfirmModal({
  onClose,
  onConfirm,
}: UploadConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-center">
        {/* 타이틀 */}
        <h2 className="text-xl font-bold mb-4 leading-snug">
          건강 데이터 업로드하고
          <br />
          리포트 받아가세요!
        </h2>

        {/* 이미지 영역 */}
        <div className="relative w-full mb-6">
          <img
            src="/assets/upload-modal.png"
            alt="리포트 미리보기"
            className="w-full h-auto mb-6 object-contain"
          />
        </div>

        {/* 버튼 */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="w-1/2 py-3 h-12 border-2 border-gray-900 rounded-md text-gray-900 font-bold hover:bg-gray-100"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="w-1/2 py-3 h-12 bg-gray-900 text-white rounded-md font-bold hover:bg-neutral-800"
          >
            업로드 하기
          </button>
        </div>
      </div>
    </div>
  );
}
