//Aashna Firozbhai Chopra
//Student no- 8919642
//achopra9642@contestogac.on.ca

import React, { useState, useEffect } from "react";
import "./AccountPage.css";
import { useNavigation } from "react-router-dom";
const AccountPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    country: "",
    pincode: "",
    phone: "",
  });
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful", data);
        const userId = data._id;
        localStorage.setItem("userId", userId);
        setRegistered(true);
        // Optionally, you can redirect the user to another page after successful registration
        // For example, you can redirect them to the login page
        // window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <div className="account-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={user.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
        {/* <button type="button">Login</button> */}
      </form>
    </div>
  );
};

export default AccountPage;
