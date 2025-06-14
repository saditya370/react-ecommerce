import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Product({ product }) {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = async () => {
    await addToCart(product.id);
    setAdded(true);
  };

  const inCart = cartItems.some(item => item.productId === product.id);

  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
        <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
      </Link>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title" style={{ fontSize: '1rem' }}>{product.title}</h5>
        <p className="card-text text-success fw-bold">${product.price}</p>
        {!inCart && !added ? (
          <button className="btn btn-sm btn-outline-success mt-2" onClick={handleAdd}>Add to Cart</button>
        ) : (
          <Link to="/cart" className="btn btn-sm btn-success mt-2">Go to Cart</Link>
        )}
      </div>
    </div>
  );
}

export default Product;
