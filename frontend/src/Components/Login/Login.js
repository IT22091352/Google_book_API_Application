import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import NavbarBefore from '../Navbar/NavbarBefore' 

const Login = () => {
  const [inputs, setInputs] = useState({
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
      .then((response) => {
        if (response.status === "Ok") {
          localStorage.setItem('token', response.token); // Store token in localStorage
          alert("User Logged In Successfully");
          navigate("/home");
        } else {
          alert(response.err);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        email: String(inputs.email),
        password: String(inputs.password)
      })
      .then((res) => res.data);
  };

  return ( 
  <><NavbarBefore/>
    <div className="login-container">
      
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
    </>
  );
};

export default Login;