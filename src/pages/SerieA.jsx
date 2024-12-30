import Header from "../components/comon/Header"
import StatCard from "../components/comon/StatCard"
import { motion } from "framer-motion"
import {SportsSoccer, SportsSoccerRounded } from "@mui/icons-material"
import { Trophy} from "lucide-react"

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
            <StatCard name="Winners" icon={Trophy} value={"Juventus : 36"} color='#F5B041'/>
            <StatCard name="Goalscores Player" icon={SportsSoccer} value={"Silvio Piola : 274"} color='#5DADE2'/>
            <StatCard name="Current Champions" icon={SportsSoccerRounded} value={"Inter Milan"} color='#58D68D'/>
            <StatCard name="Most Matchs" icon={SportsSoccerRounded} value={"Gianluigi Buffon : 657"} color='#58D68D'/>
            
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           </div>
        </main>
    </div>
  )
}
