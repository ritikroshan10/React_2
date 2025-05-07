import React from 'react'
import { dataLine, dataBar } from '../assets/chartData'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { FaUsers, FaShoppingCart, FaDollarSign, FaBoxOpen } from 'react-icons/fa';
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)


const stats = [
    { title: 'Total Sales', value: '$24,000', icon: <FaDollarSign className="text-green-500" /> },
    { title: 'Orders', value: '1,250', icon: <FaShoppingCart className="text-blue-500" /> },
    { title: 'Customers', value: '920', icon: <FaUsers className="text-purple-500" /> },
    { title: 'Products', value: '480', icon: <FaBoxOpen className="text-yellow-500" /> },
  ];

const Dashboard = () => {
    return (
        <>
            <div className='p-6'>
                <h2 className="text-3xl lg:text-5xl font-bold mb-7 text-center">Dashboard</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl shadow flex items-center space-x-4 hover:shadow-lg transition">
                            <div className="text-3xl">{stat.icon}</div>
                            <div>
                                <h4 className="text-md text-gray-700">{stat.title}</h4>
                                <p className="text-xl font-semibold text-gray-80">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                        <Line data={dataLine} />
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                        <Bar data={dataBar} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
