import React from 'react'
import addProdcuts  from "../Data/addproducts";

const Addproduct = () => {
  return (
     <div className="p-6">
          <h2 className="text-5xl font-bold mb-4 text-center">Add Products</h2>
          <p className="text-md mb-6 text-center">Add new products to your inventory.</p>
    
          <div className="grid grid-cols-4 gap-6">
            {addProdcuts.map(product => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-contain rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.category}</p>
                  <p className="text-blue-600 font-bold mt-2">{product.price}</p>
                   
                  <button
                      className="mt-4 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded w-full"
                    >
                      Add Product
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Addproduct