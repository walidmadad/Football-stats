import Header from "../components/comon/Header"
import StatCard from "../components/comon/StatCard"
import { motion } from "framer-motion"
import {SportsSoccer, SportsSoccerRounded } from "@mui/icons-material"
import { Trophy} from "lucide-react"
import {WinnersLaLiga, WinnersLaLigaChart} from "../components/LaLiga/WinnersLaLiga"
import TopApparenceLaLiga from "../components/LaLiga/TopApparenceLaLiga"
import TopScoresLaLiga from "../components/LaLiga/TopScoresLaLiga"
import TopCleansheetsLaLiga from "../components/LaLiga/TopCleansheetsLaLiga"
import TopHatTricksLaLiga from "../components/LaLiga/TopHatTricksLaLiga"

export default function LaLiga() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="La Liga Statistics"/>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20 ">
           {/* STATS */}
           <motion.div 
           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
           initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           transition={{duration: 1}}
           >
            <StatCard name="Winners" icon={Trophy} value={"Real Madrid : 36"} color='#F5B041'/>
            <StatCard name="Goalscores Player" icon={SportsSoccer} value={"Lionel Messi : 474"} color='#5DADE2'/>
            <StatCard name="Current Champions" icon={SportsSoccerRounded} value={"Real Madrid"} color='#58D68D'/>
            <StatCard name="Most Matchs" icon={SportsSoccerRounded} value={"Andoni Zubizarreta & Joaquín : 622"} color='#58D68D'/>
            

           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WinnersLaLiga/>
            <WinnersLaLigaChart/>
            <TopApparenceLaLiga/>
            <TopScoresLaLiga/>
            <TopCleansheetsLaLiga/>
            <TopHatTricksLaLiga/>
           </div>
        </main>
    </div>
  )
}
