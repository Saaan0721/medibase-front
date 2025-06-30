import { FlowerSpinner } from "react-epic-spinners";

export default function LoadingBox() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <FlowerSpinner color="#000000" size={70} />
      <p className="mt-4 text-sm text-gray-600 font-medium">
        AI가 보고서를 생성 중입니다...
      </p>
    </div>
  );
}
