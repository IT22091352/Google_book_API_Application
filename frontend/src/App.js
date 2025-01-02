import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import BookList from './Components/BookList/BookList';
import NavbarAfter from './Components/Navbar/NavbarAfter';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    setLoading(true);
    const API_KEY = process.env.REACT_APP_API_KEY;    
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;
    
    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={
          <div>
            <NavbarAfter/>
            <SearchBar onSearch={searchBooks} />
            <BookList books={books} loading={loading} />
          </div>
        } />
       
      </Routes>

    </Router>
  );
}

export default App;