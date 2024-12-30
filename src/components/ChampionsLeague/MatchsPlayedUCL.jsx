import { motion } from 'framer-motion';

const data = [
    {name : "Cristiano Ronaldo", value: 187},
    {name : "Leo Messi", value: 163},
    {name : "Iker Casillas", value: 181},
    {name : "Toni Kroos", value: 153},
    {name : "Ryan Giggs", value: 151},
    {name : "Xavi Hernández", value: 157},
    {name : "Thomas Müller", value: 158},
    {name : "Karim Benzema", value: 152},
    {name : "Manuel Neuer", value: 147},
    {name : "Luka Modrić", value: 145},
]
const top10Data = data.slice(0, 10).sort((a, b) => b.value - a.value);  // Trie et limite à top 10

export default function MatchsPlayedUCL() {
  return (
    <motion.div
      className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-xl font-medium mb-4 text-indigo-100'>Top 10 Most Appearances</h2>
      
      <div className="space-y-4">
        {top10Data.map((player, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-indigo-100">{player.name}</span>
            <div className="flex-1 mx-10">  
              <motion.div
                className="relative flex items-center"
                initial={{ width: 0 }}
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
