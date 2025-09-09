import Apage from "@pages/Apage/Apage";
import BPage from "@pages/BPage/BPage";
import HeaderPage from '@pages/HeaderPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apage />} />
        <Route path="/b" element={<BPage />} />
        <Route path="/t" element={<HeaderPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
