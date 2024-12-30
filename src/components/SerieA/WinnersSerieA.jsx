import { ResponsiveContainer, PieChart,Tooltip, Pie, Cell, Legend } from 'recharts'
import { motion } from 'framer-motion';


const data = [
    {name : "Juventus", value: 36},
    {name : "Inter Milan", value: 20},
    {name : "AC Milan", value: 19},
    {name : "Genoa", value: 9},
    {name : "Pro Vercelli", value: 7},
    {name : "Bologna", value: 7},
    {name : "Torino", value: 7},
    {name : "Roma", value: 3},
    {name : "Napoli", value: 3},
    {name : "Fiorentina", value: 2},
    {name : "Lazio", value: 2},
    {name : "Casale", value: 1},
    {name : "Novese", value: 1},
    {name : "Cagliari", value: 1},
    {name : "Hellas Verona", value: 1},
    {name : "Sampdoria", value: 1},
]

const COLORS = ["#FFFFFF", "#1710e3", "#ff0000", "#edf500", "#000000", "#000a66", "#940200", "#d4c600", "#11b8fa", "#980ffa", "#61d6fa", "#000000", "#007aab", "#1710e3","#edf500", "#61d6fa"]

export function WinnersSerieAChart() {
  return (
    <motion.div
			className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-indigo-100'>Winners</h2>

			<div className='h-96 mt-24'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie
                
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend/>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                />
                
                </PieChart>
            </ResponsiveContainer>
			</div>
		</motion.div>
  )
}

export function WinnersSerieA() {
  return (
    <motion.div
            className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-indigo-100'>Winners</h2>

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

