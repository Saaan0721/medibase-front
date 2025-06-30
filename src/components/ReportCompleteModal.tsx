// src/components/ReportCompleteModal.tsx

type ReportCompleteModalProps = {
  onConfirm: () => void;
};

export default function ReportCompleteModal({
  onConfirm,
}: ReportCompleteModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl px-8 py-10 w-full max-w-md text-center">
        <h2 className="text-h3 font-bold text-gray-900 mb-6">
          리포트가 완료되었어요!
        </h2>

        <div className="flex justify-center mb-8">
          <img
            src="/assets/illust-done.png"
            alt="리포트 완료 이미지"
            className="w-64 h-64"
          />
        </div>

        <button
          onClick={onConfirm}
          className="w-full py-3 bg-black text-white text-body1 font-bold rounded-lg"
        >
          리포트 확인하기
        </button>
      </div>
    </div>
  );
}
