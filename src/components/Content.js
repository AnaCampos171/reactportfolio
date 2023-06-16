import React from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Content() {
  return (
    <section>
      {/* Use conditional rendering to display the appropriate section based on the selected navigation link */}
      {window.location.hash === '#about' && <About />}
      {window.location.hash === '#portfolio' && <Portfolio />}
      {window.location.hash === '#contact' && <Contact />}
      {window.location.hash === '#resume' && <Resume />}
    </section>
  );
}

export default Content;
