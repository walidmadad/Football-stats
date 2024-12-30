import {motion} from 'framer-motion'

export default function StatCard({name, icon:Icon, value, color}) {
  return (
    <motion.div
        className='bg-indigo-950 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-indigo-900'
        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,00.5)"}}
    >
        <div className='px-4 py-5 sm:p-6'>
            <span className='flex items-center text-lg font-medium text-gray-400'>
                <Icon
                    size={20}
                    className="mr-2"
                    style={{color}}
                />
                {name}
            </span>
            <p className='mt-1 text-xl  text-gray-100'>{value}</p>
        </div>

    </motion.div>
  )
}
