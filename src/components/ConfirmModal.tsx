// src/components/ConfirmModal.tsx
type ConfirmModalProps = {
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
};

export default function ConfirmModal({
  title,
  description,
  onClose,
  onConfirm,
  confirmText = "확인",
  cancelText = "취소",
}: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6 whitespace-pre-line">{description}</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className="px-4 py-2 rounded bg-black text-white"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
