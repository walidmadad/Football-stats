import { Menu,} from "lucide-react"
import { useState } from "react"
import {AnimatePresence, motion} from 'framer-motion'
import { Link } from "react-router";
import Ucl from "../icons/ucl.png";
import WC from "../icons/WC.png";
import LaLiga from "../icons/laliga.png";
import PremierLeague from "../icons/premierLeague.png"
import Ligue1 from "../icons/ligue1.webp";
import SeriaA from "../icons/SerieA.png";
import Bundesliga from "../icons/bundesliga.avif"

const SIDEBAR_ITEMS = [
    { name:"World Cup", icon: () => <img src={WC} alt="WorldCup Icon" style={{ width: "25px", height: "30px" }} /> , path:"/"},
    { name:"Champions League", icon: () => <img src={Ucl} alt="UCL Icon" style={{ width: "30px", height: "30px" }} /> , path:"/ucl"},
    { name:"Premier League", icon: () => <img src={PremierLeague} alt="PremierLeague Icon" style={{ width: "26px", height: "30px" }} /> , path:"/pl"},
    { name:"La Liga", icon: () => <img src={LaLiga} alt="LaLiga Icon" style={{ width: "30px", height: "30px" }} /> , path:"/ll"},
    { name:"Seria A", icon: () => <img src={SeriaA} alt="SeriaA Icon" style={{ width: "22px", height: "30px" }} /> , path:"/seriea"},
    { name:"Bundesliga", icon: () => <img src={Bundesliga} alt="bundesliga Icon" style={{ width: "30px", height: "25px" }} /> , path:"/bundesliga"},
    { name:"Ligue1", icon: () => <img src={Ligue1} alt="Ligue1 Icon" style={{ width: "30px", height: "30px" }} /> , path:"/ligue1"},

]

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
    className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
    animate={{ width: isSidebarOpen ? 256 : 100}}
    >
        <div className="h-full bg-indigo-950 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-indigo-900">
            <motion.button
                whileHover={{ scale: 1.1}}
                whileTap={{ scale:0.9}}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-4 rounded-full hover:bg-indigo-900 transition-colors max-w-fit"
            >
                <Menu size={24}/>

            </motion.button>

            <nav className="mt-8 flex-grow">
                {SIDEBAR_ITEMS.map((item, index) => (
                    <Link key={item.path} to={item.path}>
                     <motion.div
                     className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-indigo-900 transition-colors mb-2"
                     >
                        <item.icon />
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span 
                                className="ml-4 text-base whitespace-nowrap"
                                initial={{opacity:0, width:0}}
                                animate={{opacity:1, width:"auto"}}
                                exit={{opacity:0, width:0}}
                                transition={{duration: 0.2, delay:0.3}}
                                >
                                    {item.name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                     </motion.div>
                    </Link>
                ))}
            </nav>
        </div>
    </motion.div>

  )
}
