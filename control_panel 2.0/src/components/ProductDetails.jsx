import { useParams } from "react-router-dom";
import { productList } from "../Data/productsList";

const ProductDetails = () => {
    const { id } = useParams();
    const product = productList.find(p => p.id === parseInt(id));

    if (!product) return <div className="p-6">Product not found</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
        </div>
    );
};

export default ProductDetails;
