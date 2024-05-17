import React, { useState } from 'react';
import logo from '../images/logo-bookmark.svg';
import hamburgerIcon from '../images/icon-hamburger.svg';
import MobileNavigation from './MobileNavigation';
import '../App.css';
import img1 from '../images/illustration-hero.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className='hero'>
        <nav>
          <a href="#"><img src={logo} alt="bookmark logo" id="logo" /></a>
          <ul>
            <li><a href="#">features</a></li>
            <li><a href="#">pricing</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">login</a></li>
          </ul>
          <img src={hamburgerIcon} alt="hamburger menu" className="mobile-menu" id="mobileMenu" onClick={handleToggleMenu} />
        </nav>

        <div className="hero-row">
          <div className="left-col">
            <div className="left-col-text">
              <h1>A Simple Bookmark Manager</h1>
              <p>A clean and simple interface to organize your favourite websites. Open a new browser
                tab and see your sites load instantly. Try it for free.
              </p>
              <div className="hero-links">
                <a href="#">Get it on Chrome</a>
                <a href="#">Get it on Firefox</a>
              </div>
            </div>
          </div>
          <div className="right-col">
            <img src={img1} alt="bookmark illustration" />
          </div>
        </div>
      </section>
      <MobileNavigation menuOpen={menuOpen} />
    </>
  );
}

export default Navbar;
