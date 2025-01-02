import React from 'react';
import { useState } from 'react';
import './searchbar.css';


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <>
    <div className='holder'>
      <header className='header'>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>

          <form onSubmit={handleSubmit} className="search-bar">
        <input 
          type="text" 
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button type="submit" >Search</button>
      </form>
        </div>
      </header>

      
    </div>
    </>
  );
}

export default SearchBar;