import { useEffect, useState } from "react";

import "./Cart.css";

function CartList({ setDisplayFlag }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    // Fetch product details when component mounts
    const usercart = localStorage.getItem("cart");
    if (usercart) {
      const parsedCart = JSON.parse(usercart);
      setCART(parsedCart);
    } else {
      // set get from LS
    }
  }, []);

  const placeOrder = () => {
    localStorage.setItem("cart", "[]");

    setDisplayFlag("placeOrder");
  };

  return (
    <div className="cart-container">
      {CART?.map((cartItem, cartindex) => {
        return (
          <div key={cartindex} className="cart-item">
            <img src={cartItem.url} alt={cartItem.name} />
            <div className="cart-item-details">
              <span>{cartItem.name}</span>
              <div>
                <button
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>
                <span>{cartItem.quantity}</span>
                <button
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <span>Rs. {cartItem.price * cartItem.quantity}</span>
          </div>
        );
      })}

      <p className="total">
        Total: Rs.{" "}
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
      <button className="order-button" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default CartList;
