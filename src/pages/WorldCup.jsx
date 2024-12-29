import { motion } from "framer-motion"
import Header from "../components/comon/Header"
import StatCard from "../components/comon/StatCard"
import {ChartNoAxesCombined, Trophy} from "lucide-react"
import SalesOverviewChart from "../components/WorldCup/GoalsOverview"
import WinnerWorldCupChart from "../components/WorldCup/WinnerWorldCupChart"
import {SportsSoccer, SportsSoccerRounded } from "@mui/icons-material"
export default function WorldCup() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="World Cup Statistiques"/>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
           {/* STATS */}
           <motion.div 
           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
           initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           transition={{duration: 1}}
           >
            <StatCard name="Goalscores Player" icon={SportsSoccer} value={"Miroslav Klose 16 Goals"} color='#5DADE2'/>
            <StatCard name="Winners" icon={Trophy} value={"Brazil 5"} color='#F5B041'/>
            <StatCard name="Goalscores Country" icon={SportsSoccerRounded} value={"Brazil 237"} color='#58D68D'/>
            <StatCard name="Editions" icon={ChartNoAxesCombined} value={"22"} color='#F1948A'/>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WinnerWorldCupChart/>
            <SalesOverviewChart/>
           </div>
        </main>
    </div>
  )
}

