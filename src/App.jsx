import { Route, Routes } from "react-router-dom";
import WorldCup from "./pages/WorldCup";
import UCL from "./pages/UCL";
import Sidebar from "./components/Sidebar";
import PremierLeague from "./pages/PremierLeague";
import LaLiga from "./pages/LaLiga";
import SerieA from "./pages/SerieA";
import Bundesliga from "./pages/Bundesliga";
import Ligue from "./pages/Ligue";

export default function MiniDrawer() {

  return (
    <div className="flex h-screen bg-indigo-950 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur-sm"/>
      </div>

      <Sidebar/>
      <Routes>
        <Route path="/" element={<WorldCup/>}/>
        <Route path="/ucl" element={<UCL/>}/>
        <Route path="/pl" element={<PremierLeague/>}/>
        <Route path="/ll" element={<LaLiga/>}/>
        <Route path="/seriea" element={<SerieA/>}/>
        <Route path="/bundesliga" element={<Bundesliga/>}/>
        <Route path="/ligue1" element={<Ligue/>}/>

      </Routes>
    </div>
  );
}
