import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetail.css'

const ProductDetail = () => {
    const {userId}  = useParams();
    console.log(userId)
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${userId}`)
        .then((response) => response.json())
        .then((productData) => setProducts(productData))
        .catch((error) => console.log(error))
    });
    
    return (
        <>
            <div className="card-detail" >
                <div className="cardImg">
                    <img src={products.image} alt={products.title} />
                </div>
                <div className="cardContent">
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    <h3>Category: {products.category}</h3>
                    <h3>Price: {products.price}</h3>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
