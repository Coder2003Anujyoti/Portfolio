import React,{useEffect,useState} from "react";
import './Home.css'
const Home = () => {
  return(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <div id="home-container">
      <div  id="image-container">
        <img src="images/AnujyotiDe.jpg" />
      </div>
    <h2 id="title">I'm a <span className="text">Frontend Developer</span></h2>
        <p id="infos">Hi, I’m Anujyoti De, a passionate B.Tech student specializing in Information Technology. Currently, I am honing my skills in the field of Frontend Development, with a keen interest in creating dynamic and user-friendly web applications.
        </p>
            <a href="https://www.linkedin.com/in/anujyoti-de-1a365a258" target="blank_"><img src="images/linkedin.png" id="linkedin" /></a>
      <a href="https://github.com/Coder2003Anujyoti" target="blank_"><img src="images/github.png" id="github"/></a>
    </div>
    </>
  );
};

export default Home;
