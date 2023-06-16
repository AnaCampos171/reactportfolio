import React from 'react';
import Avatar from '../assets/logo512.png'; // Update the image path with your avatar

function About() {
  return (
    <div id="about">
      {/* Display the developer's photo/avatar */}
      <img src={Avatar} alt="Ana Campos" />
      {/* Provide a short bio about the developer */}
      <p>
        
      Welcome to my Portfolio! <br /> <br />
                My name is Ana Campos, and I am an entry level web developer with a background in Law, Psychology, and Statistics. <br /> <br />
                I have previously worked as a security officer and as a behavioral interventionist. I recently developed a passion for learning how to code, and I bring my love of problem solving and critical thinking to this new endeavor. <br /> <br />
                In my spare time I like to volunteer at my parish, play the piano, and read classical literature. Thank you for your interest and hope to hear from you soon! <br />
      </p>
    </div>
  );
}

export default About;
