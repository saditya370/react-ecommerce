import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems } = useCart();

  if (!cartItems.length) return <div className="container my-5">Cart is empty.</div>;

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      <ul className="list-group mt-3">
        {cartItems.map(item => (
          <li key={item.productId} className="list-group-item">
            Product ID: {item.productId} — Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
