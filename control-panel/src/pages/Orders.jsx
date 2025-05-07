import React, { useState } from 'react';
import ordersDetails from '../Data/ordersDetails';
import orderStatus from '../Data/orderStatus';
import { FaSearch } from 'react-icons/fa';

const Orders = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = ordersDetails
    .filter(order =>
      [order.product, order.id]
        .some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const totalQuantity = ordersDetails.reduce((sum, order) => sum + order.quantity, 0);
  const totalPrice = ordersDetails.reduce((sum, order) => sum + order.price * order.quantity, 0);
  const totalTax = ordersDetails.reduce((sum, order) => sum + order.tax, 0);
  const totalAmount = ordersDetails.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-7">Orders</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-1/2 mb-3">
            <FaSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by product, customer or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-sm"
            />
          </div>

          <table className="bg-white rounded-xl shadow-md w-full">
            <thead className="bg-gray-400 text-gray-700">
              <tr>
                <th className="px-6 py-3">Products</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Price ($)</th>
                <th className="px-6 py-3">Tax ($)</th>
                <th className="px-6 py-3">Amount ($)</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id} className="border-t">
                  <td className="px-6 py-4 flex items-center space-x-4 bg-gray-100">
                    <img src={order.image} alt={order.product} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex flex-col space-y-1">
                      <span className="font-medium">{order.product}</span>
                      <span className="text-sm text-gray-500">ID: {order.id}</span>
                    </div>
                  </td>
                  <td className="text-center px-6 py-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${orderStatus(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="text-center px-6 py-4">{order.quantity}</td>
                  <td className="text-center px-6 py-4">{order.price}</td>
                  <td className="text-center px-6 py-4">{order.tax}</td>
                  <td className="text-center px-6 py-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-xl p-6 h-fit">

            <h3 className="text-xl font-semibold mb-4">Summary</h3>

            <div className="space-y-3 text-gray-700">
              <p>Total Quantity : <span className="float-right font-medium">{totalQuantity}</span></p>
              <p>Total Price : <span className="float-right font-medium">${totalPrice}</span></p>
              <p>Total Tax : <span className="float-right font-medium">${totalTax}</span></p>
              <p>Total Amount : <span className="float-right font-medium">${totalAmount}</span></p>
              <hr />
              <p className="text-lg font-bold">Final Amount : <span className="float-right">${totalAmount}</span></p>
            </div>

          </div>

          <div className="bg-white shadow-md rounded-xl p-6 h-fit">

            <h3 className="text-xl font-semibold mb-4">Invoice</h3>

            <div className="text-gray-700 space-y-2">
              <p><span className="font-medium">Invoice No :</span> INV-{new Date().getTime().toString().slice(-6)}</p>
              <p><span className="font-medium">Date :</span> {new Date().toLocaleDateString()}</p>
              <p><span className="font-medium">Customer :</span> John Doe</p>
              <p><span className="font-medium">Email :</span> johndoe@example.com</p>
              <p><span className="font-medium">Payment Method:</span> Credit Card</p>
              <hr />
              <p className="text-lg font-bold mt-2">Total Due: <span className="float-right">${totalAmount}</span></p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Orders;
