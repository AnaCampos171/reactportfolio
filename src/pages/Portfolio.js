import React from 'react';

function Portfolio() {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      {/* Display titled images of the developer's applications with links */}
      <div className="project">
        <h3>Buzzer Project</h3>
        <img src="./public/images/buzzer.png" alt="buzzer" width="1000" />
        <div className="project-links">
          <a href="https://fathomless-wave-31109.herokuapp.com/" target="_blank" rel="noopener noreferrer">View App</a>
          <a href="https://github.com/Radioactive-mtb/Buzzer" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
      
      <div className="project">
        <h3>Highlighter</h3>
        <img src="./public/images/highlighter.png" alt="Highlighter" width="1000" />
        <div className="project-links">
          <a href="https://peaceful-island-43281.herokuapp.com/" target="_blank" rel="noopener noreferrer">View App</a>
          <a href="https://github.com/Radioactive-mtb/highlighter" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
      
      {/* Repeat the above structure for other projects */}
    </div>
  );
}

export default Portfolio;

