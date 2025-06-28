type UserAvatarProps = {
  name: string; // 예: "김커피"
};

export default function UserAvatar({ name }: UserAvatarProps) {
  return (
    <div className="flex items-center gap-1">
      {/* 동그란 아바타 영역 */}
      <div className="w-8 h-8 bg-gray-300 rounded-full mr-1" />

      {/* 사용자 이름 */}
      <span className="text-lg font-bold text-gray-800">{name}</span>
      <span className="text-sm text-gray-600">님</span>
    </div>
  );
}
