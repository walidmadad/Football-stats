import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { motion } from 'framer-motion';

const rawData = [
    {name : "Brazil", winner: 5, second: 2},
    {name : "Germany", winner: 4, second: 4},
    {name : "Italy", winner: 4, second: 2},
    {name : "Argentine", winner: 3, second: 3},
    {name : "France", winner: 2, second: 2},
    {name : "Uruguay", winner: 2, second: 0},
    {name : "Spain", winner: 1, second: 0},
    {name : "England", winner: 1, second: 0},
    {name : "Netherlands", winner: 0, second: 3},
    {name : "Hungary", winner: 0, second: 2},
    {name : "Czechoslovakia", winner: 0, second: 2},
    {name : "Sweden", winner: 0, second: 1},
    {name : "Croitia", winner: 0, second: 1},

];
const data = rawData.map(item => ({
    ...item,
    total: item.winner + item.second,
}));

export default function FinalsRecordWC() {
  return (
    <motion.div
			className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-indigo-900'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Finals records by team</h2>

			<div className='h-80 -ml-10'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' angle={-90} textAnchor="end" height={70}/>
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='winner'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
                        <Line
							type='monotone'
							dataKey='second'
							stroke='#FFD700'
							strokeWidth={3}
							dot={{ fill: "#FFD700", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
                        <Line
							type='monotone'
							dataKey='total'
							stroke='#FF4500'
							strokeWidth={3}
							dot={{ fill: "#FF4500", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
						
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
  )
}
