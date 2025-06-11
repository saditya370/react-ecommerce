import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4 d-flex align-items-center gap-2">
        <ShoppingCart /> FakeStore Products
      </h1>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
            <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title" style={{ fontSize: '1rem' }}>{product.title}</h5>
                  <p className="card-text text-success fw-bold">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
