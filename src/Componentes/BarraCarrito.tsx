import CartItemCard from "./CartItemCard";
import "../Estilos/NavBar.css"; // Asegúrate de tener estilos globales aquí

type CartBarProps = {
  cartItems: { name: string }[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  onClearCart: () => void;
  isVisible: boolean;
};

const CartBar = ({
  cartItems,
  onRemoveItem,
  onCheckout,
  onClearCart,
  isVisible,
}: CartBarProps) => {
  if (!isVisible) return null;

  return (
    <div
      className="position-fixed bottom-0 start-0 end-0 cart-bar text-white p-3 shadow"
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <strong className="text-neon">🛒 Carrito:</strong>
            <div
              className="mb-3 d-flex gap-2"
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                flexWrap: "nowrap",
              }}
            >
              {cartItems.length === 0 ? (
                <span>No hay productos aún</span>
              ) : (
                cartItems.map((item, index) => (
                  <CartItemCard
                    key={index}
                    name={item.name}
                    onRemove={() => onRemoveItem(index)}
                  />
                ))
              )}
            </div>
          </div>
          <div className="col-12 text-end">
            <button className="btn-outline-neon" onClick={onCheckout}>
              ✅ Comprar Ahora
            </button>
            <br />
            <button className="btn-outline-neon:hover" onClick={onClearCart}>
              ❌ Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBar;
