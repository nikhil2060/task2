import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ShubhMuhurat from "./Pages/ShubhMuhurat";
import AnnanprashanMuhurat from "./Pages/AnnanprashanMuhurat";
import NaamkaranMuhurat from "./Pages/NaamkaranMuhurat";
import BikeMuhurat from "./Pages/BikeMuhurat";
import GoldBuying from "./Pages/GoldBuying";
import BhoomiPujan from "./Pages/BhoomiPujan";
import GrihaPravesh from "./Pages/GrihaPravesh";
import MundanMuhurat from "./Pages/MundanMuhurat";
import MarriageMuhurat from "./Pages/MarriageMuhurat";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="shubhMuhurat" element={<ShubhMuhurat />} />
        <Route path="annanprashanMuhurat" element={<AnnanprashanMuhurat />} />
        <Route path="naamkaranMuhurat" element={<NaamkaranMuhurat />} />
        <Route path="bike-carMuhurat" element={<BikeMuhurat />} />
        <Route path="goldBuying" element={<GoldBuying />} />
        <Route path="bhoomipujan" element={<BhoomiPujan />} />
        <Route path="marriageMuhurat" element={<MarriageMuhurat />} />
        <Route path="grihaPravesh" element={<GrihaPravesh />} />
        <Route path="mudanMuhurat" element={<MundanMuhurat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
