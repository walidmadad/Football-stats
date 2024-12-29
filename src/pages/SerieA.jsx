import Header from "../components/comon/Header"
import StatCard from "../components/comon/StatCard"
import { motion } from "framer-motion"
import {SportsSoccer, SportsSoccerRounded } from "@mui/icons-material"
import {ChartNoAxesCombined, Trophy} from "lucide-react"

export default function SerieA() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Seria A Statistiques"/>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
           {/* STATS */}
           <motion.div 
           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
           initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           transition={{duration: 1}}
           >
            <StatCard name="Goalscores Player" icon={SportsSoccer} value={""} color='#5DADE2'/>
            <StatCard name="Winners" icon={Trophy} value={""} color='#F5B041'/>
            <StatCard name="Goalscores Country" icon={SportsSoccerRounded} value={""} color='#58D68D'/>
            <StatCard name="Editions" icon={ChartNoAxesCombined} value={""} color='#F1948A'/>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           </div>
        </main>
    </div>
  )
}
