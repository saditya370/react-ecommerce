import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductShow from './pages/ProductShow';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductShow />} />
    </Routes>
  );
}

export default App;
