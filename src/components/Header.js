import React from 'react';

function Header() {
  return (
    <header>
      {/* name */}
      <h1>Ana Campos</h1>
      {/* Implement the navigation bar */}
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
