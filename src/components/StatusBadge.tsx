type StatusType = "진행 중" | "모집 중" | "승인 대기" | "종료";

interface StatusBadgeProps {
  status: StatusType;
}

const statusStyleMap: Record<StatusType, string> = {
  "진행 중": "bg-green-100 text-green-700",
  "모집 중": "bg-blue-100 text-blue-700",
  "승인 대기": "bg-yellow-100 text-yellow-800",
  종료: "bg-gray-200 text-gray-600",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`text-sm px-2 py-1 rounded ${statusStyleMap[status]}`}>
      {status}
    </span>
  );
}
