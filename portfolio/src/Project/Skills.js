import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <div id="skills-container">
    <h1 id="heading-text">My Skills</h1>
    <div id="skill-images">
  <img src="images/html-5.png"  />
    <img src="images/css-3.png"  />
      <img src="images/js.png"  />
        <img src="images/react.png"  />
        <img src="images/redux.png"  />
      <img src="images/C.png"  />
      <img src="images/python.png" />
      <img src="images/typescript.png" />
  </div>
  <div id="box-container">
   <div id="html-box"><div id="html"></div>80%</div>
   <div id="css-box"><div id="css"></div>80%</div>
    <div id="js-box"><div id="js"></div>60%</div>
<div id="react-box"><div id="react"></div>60%</div>
    <div id="redux-box"><div id="redux"></div>25%</div>
   <div id="c-box"><div id="c"></div>80%</div>
   <div id="python-box"><div id="python"></div>25%</div>
      <div id="ts-box"><div id="ts"></div>60%</div>
    </div>
    </div>
  );
};


export default Skills;
