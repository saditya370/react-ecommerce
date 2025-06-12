import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
        <ShoppingCart size={20} />
        FakeStore
      </Link>
      <div className="ms-auto">
        <Link to="/cart" className="btn btn-outline-light">
          Go to Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
