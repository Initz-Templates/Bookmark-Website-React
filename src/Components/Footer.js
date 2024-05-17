import React from 'react';
import logo from '../images/logo-bookmark.svg';
import face from '../images/icon-facebook.svg';
import twi from '../images/icon-twitter.svg';

function Footer() {
  return (
    <footer>
      <nav>
        <a href="#"><img src={logo} alt="bookmark logo" /></a>
        <ul className="links">
          <li><a href="#">features</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">contact</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="#"><img src={face} alt="facebook icon" /></a></li>
          <li><a href="#"><img src={twi} alt="twitter icon" /></a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
