import React from 'react';

function MobileNavigation({ menuOpen }) {
  return (
    <div className="mobile-navigation" id="mobileNav" style={{ display: menuOpen ? 'block' : 'none' }}>
      <nav>
        <ul>
          <li><a href="#">features</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">contact</a></li>
          <li><a href="#">login</a></li>
        </ul>

        <ul>
          <li><a href="#"><img src="images/icon-facebook.svg" alt="facebook icon" /></a></li>
          <li><a href="#"><img src="images/icon-twitter.svg" alt="twitter icon" /></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavigation;
