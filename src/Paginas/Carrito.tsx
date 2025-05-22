import React, { useState } from 'react';
import DummyGC from '../Componentes/DummyGameCard';
import CartBar from '../Componentes/BarraCarrito';
import NavBar from '../Componentes/BarraNavegacion';

type CartItem = {
  name: string;
};

const CartTestPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(true);

  const addToCart = (name: string) => {
    setCartItems([...cartItems, { name }]);
    setIsCartVisible(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const clearCart = () => setCartItems([]);

  const checkout = () => alert('Checkout not implemented yet. Items: ' + cartItems.map(i => i.name).join(', '));

  const toggleCart = () => setIsCartVisible(!isCartVisible);

  return (
    <>
    <div>
      <NavBar />
        <div className="container mt-4">
          <h2>Featured Games</h2>
          <div className="row g-3">
            <DummyGC name="Cual vas a comprar?" onAddToCart={addToCart} />
          </div>
        </div>

        <button
          className="btn btn-dark position-fixed top-0 end-0 m-3"
          onClick={toggleCart}
        >
          🛒
        </button>

        <CartBar
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
          onCheckout={checkout}
          onClearCart={clearCart}
          isVisible={isCartVisible}
        />
    </div>
    </>
  );
};

export default CartTestPage;