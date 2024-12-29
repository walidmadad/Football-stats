import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { motion } from 'framer-motion';

const goalsData = [
	{ year: "1930", goals: 70 },
	{ year: "1934", goals: 70 },
	{ year: "1938", goals: 84 },
	{ year: "1950", goals: 88 },
	{ year: "1954", goals: 140 },
	{ year: "1958", goals: 126 },
	{ year: "1962", goals: 89 },
	{ year: "1966", goals: 89 },
	{ year: "1970", goals: 95 },
	{ year: "1974", goals: 97 },
	{ year: "1978", goals: 102 },
	{ year: "1982", goals: 146 },
	{ year: "1986", goals: 132 },
	{ year: "1990", goals: 115 },
	{ year: "1994", goals: 141 },
	{ year: "1998", goals: 171 },
	{ year: "2002", goals: 161 },
	{ year: "2006", goals: 147 },
	{ year: "2010", goals: 143 },
	{ year: "2014", goals: 171 },
	{ year: "2018", goals: 169 },
	{ year: "2022", goals: 172 },

];

export default function goalsOverviewChart() {
  return (
    <motion.div
			className='bg-indigo-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-indigo-900'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Goals Overview</h2>

			<div className='h-80 '>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={goalsData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"year"} stroke='#9ca3af' />
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
							dataKey='goals'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
						
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
  )
}
