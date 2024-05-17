import React from 'react';
import op from '../images/logo-opera.svg';
import fire from '../images/logo-firefox.svg';
import chro from '../images/logo-chrome.svg';

function Download() {
  return (
    <section className="download">
      <h2>Download the extension</h2>
      <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize</p>

      <div className="download-row">
        <div className="download-col">
          <img src={chro} alt="chrome logo" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <hr />
          <a href="#">Add & Install Extension</a>
        </div>
        <div className="download-col">
          <img src={fire} alt="firefox logo" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <hr />
          <a href="#">Add & Install Extension</a>
        </div>
        <div className="download-col">
          <img src={op} alt="opera logo" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <hr />
          <a href="#">Add & Install Extension</a>
        </div>
      </div>
    </section>
  );
}

export default Download;
