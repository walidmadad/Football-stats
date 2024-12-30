import { motion } from 'framer-motion';

const data = [
    {name : "Miroslav Klose", value: 16},
    {name : "Leo Messi", value: 13},
    {name : "Ronaldo Nazário", value: 15},
    {name : "Gerd Müller", value: 14},
    {name : "Just Fontaine", value: 13},
    {name : "Pelé", value: 12},
    {name : "Kylian Mbappé", value: 12},
    {name : "Sándor Kocsis", value: 11},
    {name : "Jürgen Klinsmann", value: 11},
]
const newData = data.sort((a, b) => b.value - a.value);  

export default function TopScoresWorldCupr() {
  return (
    <motion.div
      className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-xl font-medium mb-4 text-indigo-100'>Top 10 Most Goals</h2>
      
      <div className="space-y-4">
        {newData.map((player, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-indigo-100">{player.name}</span>
            <div className="flex-1 mx-2">  
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
