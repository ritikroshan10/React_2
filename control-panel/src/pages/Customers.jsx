import React from 'react';
import customers from '../Data/customers'
import {getStatusStyle} from '../Data/customers'

const Customers = () => {
  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold  mb-7 text-center">Customers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map(customer => (
          <div
            key={customer.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-4 flex items-center space-x-4"
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{customer.name}</h4>
              <p className="text-sm text-gray-600 ">{customer.email}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400">Joined: {customer.joined}</p>
            </div>
            <span
              className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusStyle(customer.status)}`}
            >
              {customer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
