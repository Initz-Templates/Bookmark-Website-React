import React, { useState } from 'react';
import arr from "../images/icon-arrow.svg";


function FAQ() {
  const [dropDownStates, setDropDownStates] = useState([false, false, false, false]);

  const toggleDropDown = (index) => {
    const newDropDownStates = [...dropDownStates];
    newDropDownStates[index] = !newDropDownStates[index];
    setDropDownStates(newDropDownStates);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Here are some of our FAQs. If you have any other questions<br /> you’d like answered please feel free to email us.</p>

      <ul className="banner">
        {[
          'What is Bookmark?',
          'How can I request a new browser?',
          'Is there a mobile app?',
          'What about other Chromium browsers?'
        ].map((question, index) => (
          <li key={index}>
            <div className="text" onClick={() => toggleDropDown(index)}>
              {question} <img src={arr} alt="arrow" />
            </div>

            <div className="drop-down-text" style={{ display: dropDownStates[index] ? 'block' : 'none' }}>
              <p>
                {index === 0 && (
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
                )}
                {index === 1 && (
                  "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
                )}
                {index === 2 && (
                  "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
                )}
                {index === 3 && (
                  "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="btn">More Info</a>
    </section>
  );
}

export default FAQ;
