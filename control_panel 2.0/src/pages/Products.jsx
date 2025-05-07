import React, { useState } from 'react';
import { productList as initialProductList } from "../Data/productsList";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(initialProductList);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold mb-4 text-center">Products</h2>
      <p className="text-md mb-6 text-center">Browse and manage your store's products.</p>

      <div className="grid grid-cols-4 gap-6">
        {products.map(product => (
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

              <div className="flex justify-between">
                <Link to={`/product/${product.id}`}>
                  <button
                    className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
