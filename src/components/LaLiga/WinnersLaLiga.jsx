import { ResponsiveContainer, PieChart,Tooltip, Pie, Cell, Legend } from 'recharts'
import { motion } from 'framer-motion';


const data = [
    {name : "Real Madrid", value: 36},
    {name : "Barcelona", value: 27},
    {name : "Atletico Madrid", value: 11},
    {name : "Athletic Bilbao", value: 8},
    {name : "Valencia", value: 6},
    {name : "Real Sociedad", value: 2},
    {name : "Deportivo La Coruña", value: 1},
    {name : "Sevilla", value: 1},
    {name : "Real Betis", value: 1},

]

const COLORS = ["#FFFFFF", "#960008", "#1710e3", "#FF4500", "#FFA500", "#008bf5", "#ae00e3", "#f50c00", "#00e32a"]

export function WinnersLaLigaChart() {
  return (
    <motion.div
			className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-indigo-100'>Winners</h2>

			<div className='h-80 '>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                />
                <Legend />
                </PieChart>
            </ResponsiveContainer>
			</div>
		</motion.div>
  )
}

export function WinnersLaLiga() {
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

