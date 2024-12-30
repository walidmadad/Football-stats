import Header from "../components/comon/Header"
import StatCard from "../components/comon/StatCard"
import { motion } from "framer-motion"
import {SportsSoccer, SportsSoccerRounded } from "@mui/icons-material"
import {ChartNoAxesCombined, Trophy} from "lucide-react"
import WinnersPL from "../components/PremierLeague/WinnersPL"
import TopScoresPL from "../components/PremierLeague/TopScoresPL"
import TopApparencePL from "../components/PremierLeague/TopApparencePL"
import TopAssitsPL from "../components/PremierLeague/TopAssitsPL"
import TopCleansheetsPL from "../components/PremierLeague/TopCleansheetsPL"

export default function PremierLeague() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="Premier League Statistiques"/>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
           {/* STATS */}
           <motion.div 
           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
           initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           transition={{duration: 1}}
           >
            <StatCard name="Winners" icon={Trophy} value={"Manchester United 20"} color='#F5B041'/>
            <StatCard name="Goalscores Player" icon={SportsSoccer} value={"Alan Shearer 260"} color='#5DADE2'/>
            <StatCard name="Current Champions" icon={SportsSoccerRounded} value={"Manchester City"} color='#58D68D'/>
            <StatCard name="Most Matchs" icon={ChartNoAxesCombined} value={"Gareth Barry : 653"} color='#F1948A'/>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-5">
            <WinnersPL/>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TopScoresPL/>
            <TopApparencePL/>
            <TopAssitsPL/>
            <TopCleansheetsPL/>
           </div>
        </main>
    </div>
  )
}
