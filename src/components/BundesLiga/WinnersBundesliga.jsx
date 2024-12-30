import { motion } from 'framer-motion';


const data = [
    {name : "Bayern Munich", value: 33},
    {name : "FC Nuremberg", value: 9},
    {name : "Borussia Dortmund", value: 8},
    {name : "Schalke 04", value: 7},
    {name : "Hambourg SV", value: 6},
    {name : "Borussia Mönchengladbach", value: 5},
    {name : "VfB Stuttgart", value: 5},
    {name : "Werder Brême", value: 4},
    {name : "FC Kaiserslautern", value: 4},
    {name : "FC Cologne", value: 3},
    {name : "Greuther Fürth", value: 3},
    {name : "VfB Leipzig", value: 3},
    {name : "FC BFC Viktoria 89 Berlin", value: 2},
    {name : "Hertha Berlin", value: 2},
    {name : "Dresdner SC", value: 2},
    {name : "Hanovre 96", value: 2},
    {name : "SV Blau-Weiß Berlin", value: 1},
    {name : "Freiburger FC", value: 1},
    {name : "Phönix Karlsruhe", value: 1},
    {name : "Karlsruher FV", value: 1},
    {name : "Holstein Kiel", value: 1},
    {name : "Fortuna Düsseldorf", value: 1},
    {name : "Rapid Vienne", value: 1},
    {name : "VfR Mannheim", value: 1},
    {name : "Rot-Weiss Essen", value: 1},
    {name : "Eintracht Francfort", value: 1},
    {name : "Munich 1860", value: 1},
    {name : "Eintracht Brunswick", value: 1},
    {name : "VfL Wolfsbourg", value: 1},
    {name : "Bayer Leverkusen", value: 1},
]


export function WinnersBundesliga() {
  return (
    <motion.div
            className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-indigo-100'>All-Time Winners</h2>

            <div className="space-y-4">
                    {data.map((player, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-indigo-100">{player.name}</span>
                        <div className="flex-1 mx-10">  
                          <motion.div
                            className="relative flex items-center"
                            initial={{ width: 0 }}
                            animate={{ width: `${player.value * 2}%` }} 
                            transition={{ duration: 0.8 }}
                          >
                            <div className="h-6 bg-indigo-600 rounded" />
                          </motion.div>
                        </div>
                        <span className="text-sm text-indigo-100">{player.value}</span> 
                      </div>
                    ))}
                  </div>
        </motion.div>
  )
}

