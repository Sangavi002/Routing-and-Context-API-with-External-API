import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
  const { products, loading, error } = useContext(AppContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="box">
        {products.map((ele) => (
            <Link key={ele.id} to={`/product/${ele.id}`} className='card-link'>
                <div className="card">
                    <div className="card-img">
                        <img src={ele.image} alt={ele.category} />
                    </div>
                    <h4>{ele.title}</h4>
                    <h5>₹ {ele.price}</h5>
                </div>
            </Link>  
        ))}
      </div>
    </>
  );
};

export default Product;
