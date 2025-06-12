import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [products, setProducts] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const requests = cartItems.map(item =>
        axios.get(`https://fakestoreapi.com/products/${item.productId}`)
      );
      const responses = await Promise.all(requests);
      const productMap = {};
      responses.forEach(res => {
        productMap[res.data.id] = res.data;
      });
      setProducts(productMap);
    }

    if (cartItems.length) fetchProducts();
  }, [cartItems]);

  if (!cartItems.length) return <div className="container my-5">Cart is empty.</div>;

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      <div className="row mt-4 g-4">
        {cartItems.map(item => {
          const product = products[item.productId];
          if (!product) return null;

          return (
            <div key={product.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: '250px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="text-muted">{product.category}</p>
                  <p className="fw-bold">${product.price}</p>
                  <p className="text-secondary">Quantity: {item.quantity}</p>
                  <button className="btn btn-outline-danger mt-auto" onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
