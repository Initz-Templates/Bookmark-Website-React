import React, { useState } from 'react';
import tab1 from '../images/illustration-features-tab-1.svg';
import tab2 from '../images/illustration-features-tab-2.svg';
import tab3 from '../images/illustration-features-tab-3.svg';

function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="features">
      <h2>Features</h2>
      <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync
        between your devices so you can access them on the go.</p>

      <div className="features-controller">
        {['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map((label, index) => (
          <p key={index} className={`control ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
            {label}
          </p>
        ))}
      </div>

      <div className="features-tab">
        <div className="left-col">
          <img src={activeTab === 0 ? tab1 : activeTab === 1 ? tab2 : tab3} alt="features illustration" id="image" />
        </div>
        <div className="right-col">
          <h3 id="heading">
            {activeTab === 0 ? 'Bookmark in one click' : activeTab === 1 ? 'Intelligent search' : 'Share your bookmarks'}
          </h3>
          <p id="paragraph">
            {activeTab === 0 ? 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.' :
              activeTab === 1 ? 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.' :
              'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
            }
          </p>
          <a href="#">More Info</a>
        </div>
      </div>
    </section>
  );
}

export default Features;
