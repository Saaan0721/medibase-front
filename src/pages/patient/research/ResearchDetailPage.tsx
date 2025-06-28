import { useState } from "react";
import Logo from "../../../components/Logo";
import NavTabs from "../../../components/NavTab";
import OverviewPanel from "../../../components/OverviewPanel";
import SurveyPanel from "../../../components/SurveyPanel";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import UserAvatar from "../../../components/UserAvatar";

const tabs = [
  { key: "overview", label: "연구개요" },
  { key: "pro", label: "설문 작성" },
];

export default function ResearchDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const { researchId } = useParams<{ researchId: string }>();

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      {/* 헤더 */}
      <header className="flex justify-between items-center pb-4 mb-6">
        <Logo />
        <UserAvatar name="김커피" />
      </header>

      {/* 탭 */}

      <NavTabs active={activeTab} onChange={setActiveTab} tabs={tabs} />

      {/* 콘텐츠 영역 */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <OverviewPanel researchId={researchId!} />
          </motion.div>
        )}
        {activeTab === "pro" && (
          <motion.div
            key="pro"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <SurveyPanel researchId={researchId!} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
