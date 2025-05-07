import React from 'react';

const Users = () => {
  const userList = [
    { id: 1, name: 'Alice Johnson', role: 'Admin', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Employee', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', role: 'Employee', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', role: 'Admin', email: 'diana@example.com' },
    { id: 5, name: 'Ethan Clark', role: 'Employee', email: 'ethan@example.com' },
    { id: 6, name: 'Fiona Davis', role: 'Employee', email: 'fiona@example.com' },
    { id: 7, name: 'George Miller', role: 'Admin', email: 'george@example.com' },
    { id: 8, name: 'Hannah Moore', role: 'Employee', email: 'hannah@example.com' },
  ];

  return (
    <div className="p-6">
      <h2 className='text-5xl font-bold  mb-4 text-center'>Users</h2>
      <p className="text-md  mb-7 text-center">Admin and Employee user data...</p>
      
      <table className="min-w-full bg-white border border-gray-200 shadow rounded">

        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Role</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
          </tr>
        </thead>

        <tbody>
          {userList.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Users;
