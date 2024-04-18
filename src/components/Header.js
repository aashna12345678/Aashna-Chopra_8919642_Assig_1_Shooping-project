import React, { useState } from "react";

function Header({ count, setDisplayFlag }) {
  return (
    <div className="flex shopping-card">
      <button onClick={() => setDisplayFlag("shopping")}>
        Shopping Cart App
      </button>
      <button onClick={() => setDisplayFlag("cart")}>
        Cart
        <sup> {count} </sup>
      </button>
      <button onClick={() => setDisplayFlag("account")}>Account</button>
    </div>
  );
}

export default Header;

function AccountForm({ onSubmit }) {
  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the user details to the parent component
    onSubmit(userDetails);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 style={{ fontSize: "1.5rem" }}>Account Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ fontSize: "1.2rem" }}>
          Name:
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          style={{ fontSize: "1.2rem" }}
        />
        <br />
        <label htmlFor="email" style={{ fontSize: "1.2rem" }}>
          Email:
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          style={{ fontSize: "1.2rem" }}
        />
        <br />
        <label htmlFor="address" style={{ fontSize: "1.2rem" }}>
          Address:
        </label>
        <br />
        <textarea
          id="address"
          name="address"
          value={userDetails.address}
          onChange={handleChange}
          style={{ fontSize: "1.2rem" }}
        ></textarea>
        <br />
        <label htmlFor="country" style={{ fontSize: "1.2rem" }}>
          Country:
        </label>
        <br />
        <input
          type="text"
          id="country"
          name="country"
          value={userDetails.country}
          onChange={handleChange}
          style={{ fontSize: "1.2rem" }}
        />
        <br />
        <label htmlFor="pincode" style={{ fontSize: "1.2rem" }}>
          Pincode:
        </label>
        <br />
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={userDetails.pincode}
          onChange={handleChange}
          style={{ fontSize: "1.2rem" }}
        />
        <br />
        <button type="submit" style={{ fontSize: "1.2rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
