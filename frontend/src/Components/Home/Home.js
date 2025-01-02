import React from "react";
import "./home.css";
import NavbarBefore from '../Navbar/NavbarBefore'

function Home() {
  return (
    <>
    <NavbarBefore></NavbarBefore>
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to BookHub</h1>
          <p>Your one-stop destination for all your book needs.</p>
        </header>
        <section className="home-content">
          <div className="home-card">
            <h2>Discover New Books</h2>
            <p>
              Explore our vast collection of books from various genres and
              authors.
            </p>
          </div>
          <div className="home-card">
            <h2>Join Our Community</h2>
            <p>
              Connect with fellow book lovers and share your favorite reads.
            </p>
          </div>
          <div className="home-card">
            <h2>Get Personalized Recommendations</h2>
            <p>Receive book recommendations tailored to your interests.</p>
          </div>
        </section>
      </div>
      <div>
        <div>
          <h1>BookHub</h1>
          <p>Your one-stop destination for all your book needs.</p>
          <div className="background"></div>
        </div>
        <footer className="home-footer">
          <p>&copy; 2021 BookHub. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;