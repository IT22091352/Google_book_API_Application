import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarbarBefore from "../Navbar/NavbarBefore"
import './register.css';
import Footer from '../Footer/Footer';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => {
        alert("User Registered Successfully");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register", {
        name: String(inputs.name),
        email: String(inputs.email),
        password: String(inputs.password),
      })
      .then((res) => res.data);
  };

  return (
<> <NavbarbarBefore/>
    <div className="register-container">
   

      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Register;