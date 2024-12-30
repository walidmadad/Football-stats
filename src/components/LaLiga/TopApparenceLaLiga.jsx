import { motion } from 'framer-motion';

const data = [
  {name : "Andoni Zubizarreta", value: 622},
  {name : "Joaquín", value: 622},
  {name : "Raúl García", value: 609},
  {name : "Raúl", value: 550},
  {name : "Eusebio Sacristán", value: 543},
  {name : "Francisco Buyo", value: 542},
  {name : "Sergio Ramos", value: 536},
  {name : "Manolo Sanchís", value: 523},
  {name : "Lionel Messi", value: 520},
  {name : "Jesús Navas", value: 514},
]

const top10Data = data.slice(0, 10).sort((a, b) => b.value - a.value);  // Trie et limite à top 10


export default function TopApparenceLaLiga() {
  return (
    <motion.div
      className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-xl font-medium mb-4 text-indigo-100'>Top 10 Most Appearances</h2>
      
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

