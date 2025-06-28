import { useState } from "react";
import Logo from "../../../components/Logo";
import NavTabs from "../../../components/NavTab";
import FhrUploadPanel from "../../../components/FhrUploadPanel";
import { AnimatePresence, motion } from "framer-motion";
import UserAvatar from "../../../components/UserAvatar";

const tabs = [{ key: "fhr", label: "데이터 업로드" }];

export default function FhrUpload() {
  const [active, setActive] = useState<string>("fhr");

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      {/* 헤더 */}
      <header className="flex justify-between items-center pb-4 mb-6">
        <Logo />
        <UserAvatar name="김커피" />
      </header>

      {/* 탭 */}
      <NavTabs active={active} onChange={setActive} tabs={tabs} />

      {/* 콘텐츠 영역 */}
      <AnimatePresence mode="wait">
        {active === "fhr" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <FhrUploadPanel />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
