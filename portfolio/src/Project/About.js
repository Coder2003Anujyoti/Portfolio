import React from "react";
import './About.css'
const About = () => {
  return(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <div id="about-container">
      <div  id="profile-container">
        <img src="images/AnujyotiDe.jpg" loading="lazy"/>
      </div>
        <p id="info">Hi, I’m Anujyoti De, a passionate B.Tech student specializing in Information Technology. Currently, I am honing my skills in the field of Frontend Development, with a keen interest in creating dynamic and user-friendly web applications.

I enjoy combining creativity with coding to craft seamless and visually appealing user experiences. My journey in frontend development has led me to explore HTML, CSS, JavaScript, and modern frameworks like React. I’m constantly seeking opportunities to expand my knowledge, work on real-world projects, and stay up-to-date with the latest trends in web development.

I'm enthusiastic about collaborating with like-minded professionals and contributing to impactful projects.</p>
    </div>
    </>
  );
};

export default About;
