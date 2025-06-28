import { useState } from "react";
import Logo from "../../../components/Logo";
import NavTabs from "../../../components/NavTab";
import FhrUploadPanel from "../../../components/FhrUploadPanel";
import OverviewPanel from "../../../components/OverviewPanel";
import SurveyPanel from "../../../components/SurveyPanel";
import ConsentPanel from "../../../components/ConsentPanel";
import { AnimatePresence, motion } from "framer-motion";

export default function FhrUpload() {
  const [active, setActive] = useState<
    "overview" | "upload" | "pro" | "consent"
  >("overview");

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      {/* 헤더 */}
      <header className="flex justify-between items-center pb-4 mb-6">
        <Logo />
        <div className="flex items-center gap-4">
          <span className="text-gray-600">김커피 님</span>
          <button className="bg-black text-white px-4 py-1 rounded">
            제출하기
          </button>
        </div>
      </header>

      {/* 탭 */}
      <NavTabs active={active} onChange={setActive} />

      {/* 콘텐츠 영역 */}
      <AnimatePresence mode="wait">
        {active === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <OverviewPanel />
          </motion.div>
        )}
        {active === "upload" && (
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
        {active === "pro" && (
          <motion.div
            key="pro"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <SurveyPanel />
          </motion.div>
        )}
        {active === "consent" && (
          <motion.div
            key="consent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ConsentPanel />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
