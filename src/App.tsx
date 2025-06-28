import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/patient/upload/UploadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/patient/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
