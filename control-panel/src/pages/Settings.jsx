import React, { useState } from 'react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('Account');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* navigation bar */}
      <div className="bg-white shadow-md py-4 px-6">

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
          <nav>
            <ul className="flex space-x-8">
              <li
                className={`cursor-pointer text-lg ${activeSection === 'Account' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveSection('Account')}
              >
                Account
              </li>
              <li
                className={`cursor-pointer text-lg ${activeSection === 'Privacy' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveSection('Privacy')}
              >
                Privacy
              </li>
              <li
                className={`cursor-pointer text-lg ${activeSection === 'Notifications' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveSection('Notifications')}
              >
                Notifications
              </li>
              <li
                className={`cursor-pointer text-lg ${activeSection === 'Billing' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveSection('Billing')}
              >
                Billing
              </li>
            </ul>
          </nav>
        </div>

      </div>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto p-8">
        {/* Account Section  use ternary operator*/}
        {activeSection === 'Account' ? (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="Enter your username"
              />
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Save Changes
              </button>
            </div>
          </div>
        ) : null}


        {/* Privacy Section  this is using logic and*/}
        {activeSection === 'Privacy' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Settings</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">

              <label className="block text-gray-700 font-semibold mb-2" htmlFor="visibility">
                Profile Visibility
              </label>

              <select
                id="visibility"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends Only</option>

              </select>

              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Save Changes
              </button>
            </div>

          </div>
        )}


        {/* Notifications Section */}
        {activeSection === 'Notifications' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notification Settings</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" />
                <span>Email Notifications</span>
              </label>

              <label className="flex items-center space-x-3 mt-3">
                <input type="checkbox" className="form-checkbox" />
                <span>SMS Notifications</span>
              </label>

              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Save Changes
              </button>

            </div>
          </div>
        )}


        {/* Billing Section */}
        {activeSection === 'Billing' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">

              <label className="block text-gray-700 font-semibold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="Enter your card number"
              />

              <label className="block text-gray-700 font-semibold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="MM/YY"
              />

              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Update Billing
              </button>
              
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Settings;
