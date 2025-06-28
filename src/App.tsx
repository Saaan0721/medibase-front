import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/patient/upload/UploadPage";
import ResearchDetailPage from "./pages/patient/research/ResearchDetailPage";
import LandingPage from "./pages/patient/landing/LandingPage";
import ResearchListPage from "./pages/patient/research/ResearchListPage";
import RewardPage from "./pages/patient/reward/RewardPage";
import ResearchDashboard from "./pages/researcher/dashboard/DashboardPage";
import RegistrationPage from "./pages/researcher/registration/RegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient/research" element={<ResearchListPage />} />
        <Route
          path="/patient/research/:researchId"
          element={<ResearchDetailPage />}
        />
        <Route path="/patient/upload" element={<UploadPage />} />
        <Route path="/patient/reward" element={<RewardPage />} />
        <Route path="/researcher/dashboard" element={<ResearchDashboard />} />
        <Route
          path="/researcher/registration"
          element={
            <RegistrationPage onBack={() => {}} onStartRecruitment={() => {}} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
