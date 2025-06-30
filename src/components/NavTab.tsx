type TabKey = string;

type Tab = {
  key: TabKey;
  label: string;
};

type NavTabsProps = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
  tabs: Tab[];
};

export default function NavTabs({ active, onChange, tabs }: NavTabsProps) {
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
