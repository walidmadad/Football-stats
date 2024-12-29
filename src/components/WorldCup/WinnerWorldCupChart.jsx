import { ResponsiveContainer, PieChart,Tooltip, Pie, Cell, Legend } from 'recharts'
import { motion } from 'framer-motion';


const data = [
    {name : "Brazil", value: 5},
    {name : "Germany", value: 4},
    {name : "Italy", value: 4},
    {name : "Argentine", value: 3},
    {name : "France", value: 2},
    {name : "Uruguay", value: 2},
    {name : "Spain", value: 1},
    {name : "England", value: 1},
]

const COLORS = ["#FFD700", "#FF4500", "#32CD32", "#1E90FF", "#8A2BE2", "#FF69B4", "#FFA500", "#00CED1"]

export default function WinnerWorldCupChart() {
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
