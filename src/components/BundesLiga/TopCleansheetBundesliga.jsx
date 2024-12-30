import { motion } from 'framer-motion';

const data = [
  {name : "Manuel Neuer", value: 226},
  {name : "Oliver Kahn", value: 204 },
  {name : "Oliver Reck", value: 176 },
  {name : "Eike Immel", value: 148 },
  {name : "Uli Stein", value: 146},
  {name : "Sepp Maier", value: 137},
  {name : "Jens Lehmann", value: 131},
  {name : "Richard Golz", value: 123},
  {name : "Frank Rost", value: 121},
  {name : "Norbert Nigbur", value: 120},
]

const top10Data = data.slice(0, 10).sort((a, b) => b.value - a.value);  // Trie et limite à top 10


export default function TopCleansheetLigue1() {
  return (
      <motion.div
        className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className='text-xl font-medium mb-4 text-indigo-100'>Top 10 Most Clean Sheets</h2>
        
        <div className="space-y-4 ">
          {top10Data.map((player, index) => (
            <div key={index} className="flex items-end justify-end">
              <span className="text-indigo-100">{player.name}</span>
              <div className="flex-1 mx-4">  
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

