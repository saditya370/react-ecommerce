import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

function ProductShow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAdd = async () => {
    await addToCart(product.id);
    setAdded(true);
  };

  const inCart = cartItems.some(item => item.productId === Number(id));

  if (!product) return <div className="container my-5"><p>Loading...</p></div>;

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-primary mb-4">&larr; Back to Products</Link>
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-5 text-center p-4">
            <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '300px', objectFit: 'contain' }} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text text-muted mt-2">{product.description}</p>
              <h4 className="text-success mt-3">${product.price}</h4>
              <p className="text-secondary mt-2">Category: <strong>{product.category}</strong></p>

              {!inCart && !added ? (
                <button className="btn btn-success mt-4" onClick={handleAdd}>Add to Cart</button>
              ) : (
                <Link to="/cart" className="btn btn-outline-success mt-4">Go to Cart</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShow;
