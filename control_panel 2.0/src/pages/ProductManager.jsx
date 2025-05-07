import React, { useState } from 'react';
import  {productList}  from '../Data/productsList';
import Products from './Products';
import AddProduct from './Addproduct';

const ProductManager = () => {
    const [products, setProducts] = useState(productList);

    const handleAddProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <div>
            <AddProduct onAddProduct={handleAddProduct} />
            <Products products={products} onDelete={handleDeleteProduct} />
        </div>
    );
};

export default ProductManager;
