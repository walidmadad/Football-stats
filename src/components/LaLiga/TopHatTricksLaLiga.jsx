import { motion } from 'framer-motion';

const data = [
  {name : "Lionel Messi", value: 36},
  {name : "Cristiano Ronaldo", value: 34},
  {name : "Telmo Zarra", value: 23},
  {name : "Alfredo Di Stéfano", value: 22},
  {name : "Mundo", value: 19},
  {name : "César Rodríguez", value: 15},
  {name : "Isidro Lángara", value: 13},
  {name : "Ferenc Puskás", value: 12},
  {name : "László Kubala", value: 11},
  {name : "Pahiño", value: 11},
  {name : "Manuel Badenes", value: 11},
  {name : "Quini", value: 10},
  {name : "Luis Suárez", value: 10},

]

const top10Data = data.slice(0, 10).sort((a, b) => b.value - a.value);  // Trie et limite à top 10


export default function TopHatTricksLaLiga() {
    return (
        <motion.div
          className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className='text-xl font-medium mb-4 text-indigo-100'>Hat-Tricks</h2>
          
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

