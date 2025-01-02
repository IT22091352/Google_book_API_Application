import React, { useState } from "react";
import "./booklist.css";

function BookList({ books, loading }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSeeMore = (book) => {
    console.log("Selected Book:", book)
    setSelectedBook(book);
  };

  const closePopup = () => {
    setSelectedBook(null);
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  if (!books || books.length === 0) {
    return <div style={
      { textAlign: "center", 
        color: "#fff",
        fontSize: "30px",
        backgroundColor: "black",
      }
    }>No books found</div>;
  }

  return (
    <>
    <div className="book-list-container">
      <h2>Your search results</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            )}
            <p>{book.volumeInfo.pageCount} pages</p>
            <p>{book.volumeInfo.publisher}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            <p>
              {book.volumeInfo.description?.length > 100
                ? `${book.volumeInfo.description.slice(0, 100)}... `
                : book.volumeInfo.description}
              {book.volumeInfo.description?.length > 100 && (
                <button onClick={() => handleSeeMore(book)}>See More</button>
              )}
            </p>
          </div>
        ))}
        
      </div>

      {/* Popup for Full Description */}
      {selectedBook && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedBook.volumeInfo.title}</h3>
            <p>{selectedBook.volumeInfo.description}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      
    </div>
    </>
    
  );
}

export default BookList;
