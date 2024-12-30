import { ResponsiveContainer, BarChart, Tooltip, CartesianGrid, YAxis, XAxis, Bar} from 'recharts'
import { motion } from 'framer-motion';


const data = [
    {name : "Real Madrid", value: 15},
    {name : "Milan", value: 7},
    {name : "Bayern Munich", value: 6},
    {name : "Liverpool", value: 6},
    {name : "Barcelona", value: 5},
    {name : "Ajax", value: 4},
    {name : "Inter Milan", value: 3},
    {name : "Man United", value: 3},
    {name : "Juventus", value: 2},
    {name : "Benfica", value: 2},
    {name : "Chelsea", value: 2},
    {name : "Nottingham Forest", value: 2},
    {name : "Porto", value: 2},
    {name : "Borussia Dortmund", value: 1},
    {name : "Celtic", value: 1},
    {name : "Hamburger SV", value: 1},
    {name : "Man City", value: 1},
    {name : "Marseille", value: 1},
    {name : "Feyenoord", value: 1},
    {name : "Aston Villa", value: 1},
    {name : "PSV", value: 1},
    {name : "Red Star", value: 1},

]

export default function WinnersChampionsLeague() {
  return (
    <motion.div
            className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-indigo-100'>All-Time Winners</h2>

            <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis type="number" axisLine={{ stroke: '#bc85ff' }} tick={{ fill: '#bc85ff' }} ticks={[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15]} />
            <YAxis interval={0} type="category" dataKey="name" width={150} axisLine={{ stroke: '#bc85ff' }} tick={{ fill: '#bc85ff' }} />
            <Tooltip wrapperStyle={{ backgroundColor: '#333', color: '#bc85ff'}} />
            <Bar dataKey="value" fill="#bc85ff"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
        </motion.div>
  )
}
