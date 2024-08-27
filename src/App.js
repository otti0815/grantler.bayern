import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Grantler Consulting</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h2>Expert Consulting Solutions</h2>
          <p>Empowering businesses to reach their full potential</p>
          <button>Get Started</button>
        </section>

        <section id="about">
          <h2>About Grantler</h2>
          <p>Grantler is a leading consulting firm dedicated to helping businesses grow and succeed in today's competitive market.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Strategic Planning</li>
            <li>Financial Analysis</li>
            <li>Market Research</li>
            <li>Operational Efficiency</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Grantler Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;