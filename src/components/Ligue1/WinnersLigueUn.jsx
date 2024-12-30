import { motion } from 'framer-motion';


const data = [
    {name : "Paris Saint-Germain", value: 12},
    {name : "Marseille", value: 10},
    {name : "Saint-Étienne ", value: 10},
    {name : "Monaco", value: 8},
    {name : "Nantes", value: 8},
    {name : "Lyon", value: 7},
    {name : "Bordeaux", value: 6},
    {name : "Reims", value: 6},
    {name : "Lille", value: 6},
    {name : "Roubaix", value: 6},
    {name : "Standard Athletic Club", value: 5},
    {name : "Nice", value: 4},
    {name : "Helvétique Marseille", value: 3},
    {name : "Le Havre", value: 3},
    {name : "RC Paris", value: 2},
    {name : "Sochaux", value: 2},
    {name : "Sète", value: 2},
    {name : "Lens", value: 1},
    {name : "Club Français", value: 1},
    {name : "CA Paris", value: 1},
    {name : "US Tourcoing", value: 1},
    {name : "Rouen", value: 1},
    {name : "Strasbourg", value: 1},
    {name : "Gallia Club Paris", value: 1},
    {name : "Stade Français", value: 1},
    {name : "Auxerre", value: 1},
    {name : "Montpellier", value: 1},

]

export function WinnersLigueUn() {
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

