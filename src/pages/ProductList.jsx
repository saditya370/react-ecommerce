import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
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
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
