import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/patient/upload/UploadPage";
import ResearchDetailPage from "./pages/patient/research/ResearchDetailPage";
import LandingPage from "./pages/patient/landing/LandingPage";
import ResearchListPage from "./pages/patient/research/ResearchListPage";
import RewardPage from "./pages/patient/reward/RewardPage";

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
      </Routes>
    </Router>
  );
}

export default App;
