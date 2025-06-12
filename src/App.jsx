import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductShow from './pages/ProductShow';
import Cart from './pages/Cart';
import Navbar from './layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductShow />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
