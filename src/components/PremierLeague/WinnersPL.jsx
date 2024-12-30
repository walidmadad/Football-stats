import { motion } from 'framer-motion';


const data = [
    {name : "Manchester United", value: 20},
    {name : "Liverpool", value: 19},
    {name : "Arsenal", value: 13},
    {name : "Manchester City", value: 10},
    {name : "Everton", value: 9},
    {name : "Aston Villa", value: 7},
    {name : "Sunderland", value: 6},
    {name : "Chelsea", value: 6},
    {name : "Newcastle United", value: 4},
    {name : "Sheffield Wednesday", value: 4},
    {name : "Wolverhampton", value: 3},
    {name : "Leeds United", value: 3},
    {name : "Huddersfield Town", value: 3},
    {name : "Blackburn Rovers", value: 3},
    {name : "Preston North End", value: 2},
    {name : "Tottenham Hotspur", value: 2},
    {name : "Derby County", value: 2},
    {name : "Burnley", value: 2},
    {name : "Portsmouth", value: 2},
    {name : "Sheffield United", value: 1},
    {name : "West Bromwich Albion", value: 1},
    {name : "Ipswich Town", value: 1},
    {name : "Nottingham Forest", value: 1},
    {name : "Leicester City", value: 1},

]

export default function WinnersPL() {
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
