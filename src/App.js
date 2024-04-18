//Aashna Firozbhai Chopra
//Student no- 8919642
//achopra9642@contestogac.on.ca

import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Account from "./components/AccountPage";
import { useState, useEffect } from "react";
import AccountPage from "./components/AccountPage";
import LoginPage from "./components/Login";

function App() {
  const [product, setProduct] = useState([]);
  const [displayFlag, setDisplayFlag] = useState("shopping");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (data) => {
    // Add the product to the cart state
    setCart([...cart, { ...data, quantity: 1 }]);

    // Save the updated cart in local storage
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...data, quantity: 1 }])
    );
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  // Function to handle form submission
  const handleFormSubmit = (userData) => {
    console.log("Updating user data:", userData);
  };

  return (
    <div>
      <Header count={cart.length} setDisplayFlag={setDisplayFlag}></Header>
      {displayFlag === "shopping" && (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
      {displayFlag === "cart" && (
        <CartList cart={cart} setDisplayFlag={setDisplayFlag}></CartList>
      )}
      {displayFlag === "account" && <AccountPage onSubmit={handleFormSubmit} />}
      {displayFlag === "placeOrder" && (
        <>
          <h1>Thank you for order!</h1>
          <button onClick={() => setDisplayFlag("shopping")}>
            Continue shopping
          </button>
        </>
      )}
    </div>
  );
}

export default App;
