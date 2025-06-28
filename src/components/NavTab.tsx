type TabKey = "overview" | "upload" | "pro" | "consent";

type NavTabsProps = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "overview", label: "연구개요" },
  //   { key: "upload", label: "데이터 업로드" },
  { key: "pro", label: "설문 작성" },
  //   { key: "consent", label: "동의 관리" },
];

export default function NavTabs({ active, onChange }: NavTabsProps) {
  return (
    <nav className="mb-8">
      <ul className="flex gap-4 text-subtitle1 text-gray-500 font-bold pb-2">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`cursor-pointer pb-1 ${
              active === tab.key
                ? "text-gray-900 border-b-2 border-gray-900"
                : ""
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
