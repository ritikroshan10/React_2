import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-64 border-r border-gray-300">

            <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Shopping</h1>

            <ul className='flex flex-col mt-5 text-xl'>

                <li className="flex items-center py-3 px-2  space-x-4 hover:rounded hover:cursor-pointer 
                               hover:text-white hover:bg-blue-600">
                    <FaTachometerAlt />
                    <Link to="/">Dashboard</Link>
                </li>

                <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                               hover:text-white hover:bg-blue-600">
                    <FaShoppingCart />
                    <Link to="/orders">Orders</Link>
                </li>

                <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                               hover:text-white hover:bg-blue-600">
                    <FaUsers />
                    <Link to="/customers">Customers</Link>
                </li>

                <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                               hover:text-white hover:bg-blue-600">
                    <FaUser />
                    <Link to="/users">Users</Link>
                </li>

                <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                               hover:text-white hover:bg-blue-600">
                    <FaBox />
                    <Link to="/products">Products</Link>
                </li>

                <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
                               hover:text-white hover:bg-blue-600">
                    <FaCog />
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Sidebar