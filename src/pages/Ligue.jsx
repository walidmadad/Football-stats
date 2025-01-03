import Header from "../components/comon/Header"
import StatCard from "../components/comon/StatCard"
import { motion } from "framer-motion"
import {SportsSoccer, SportsSoccerRounded } from "@mui/icons-material"
import {Trophy} from "lucide-react"
import { WinnersLigueUn } from "../components/Ligue1/WinnersLigueUn"
import TopApparenceLigue1 from "../components/Ligue1/TopApparenceLigue1"
import TopScoresLigue1 from "../components/Ligue1/TopScoresLigue1"
import TopAssitsLigue1 from "../components/Ligue1/TopAssitsLigue1"
import TopCleansheetLigue1 from "../components/Ligue1/TopCleansheetLigue1"

export default function Ligue() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="Ligue 1 Statistics"/>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
           {/* STATS */}
           <motion.div 
           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
           initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           transition={{duration: 1}}
           >
            <StatCard name="Winners" icon={Trophy} value={"Paris Saint-Germain : 12"} color='#F5B041'/>
            <StatCard name="Goalscores Player" icon={SportsSoccer} value={"Delio Onnis : 299"} color='#5DADE2'/>
            <StatCard name="Current Champions" icon={SportsSoccerRounded} value={"Paris Saint-Germain"} color='#58D68D'/>
            <StatCard name="Most Matchs" icon={SportsSoccerRounded} value={"Mickaël Landreau : 618"} color='#58D68D'/>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-6">
            <WinnersLigueUn/>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TopApparenceLigue1/>
            <TopScoresLigue1/>
            <TopAssitsLigue1/>
            <TopCleansheetLigue1/>
           </div>
        </main>
    </div>
  )
}
