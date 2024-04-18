import React, { useState, useEffect } from "react";

const AccountPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    // Fetch user details from localStorage when component mounts
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever user state changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    // Update user state when form fields change
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Implement logic to handle form submission, like updating user data in a database
    console.log("User details submitted:", user);
    // You can also redirect the user to another page after form submission if needed
  };

  return (
    <div>
      <h2>My Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">Address:</label>

        <textarea
          id="address"
          name="address"
          value={user.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default AccountPage;
