import React from 'react';

function Resume() {
  return (
    <div id="resume">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="public/AC.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        {/* Add more proficiencies */}
      </ul>
    </div>
  );
}

export default Resume;
