import {HashRouter as Routers,
Routes,Route,Link} from 'react-router-dom';
import React,{useState} from 'react';
import './App.css';
import Home from './Project/Home.js';
import About from './Project/About.js';
import Skills from './Project/Skills.js';
import Projects from './Project/Projects.js';
import Contacts from './Project/Contacts.js';
function App() {
  const [toggle,setToggle]=useState(false);
  const my={
    display:`${toggle?"flex":"none"}`
  }
  return (
    <>
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <Routers>
          <div id="nav-bar">
            <h1 id="nav-heading">My Portfolio</h1>
       {!toggle && <> <img src="images/bar.png" onClick={()=>setToggle(!toggle)} id="toggle" /> 
       </>}
       {toggle && <>  <img src="images/closes.png"  id="close" onClick={()=>setToggle(!toggle)} /></>}
          </div>
         <div id="show-details" style={my}>
        <ul type="none">
        <li id="home"><Link id="link" 
         to="/" onClick={()=>setToggle(false)}>Home</Link></li>
      <li><Link id="link" to="/about" onClick={()=>setToggle(false)}>About</Link></li>
       <li><Link id="link" to="/skills" onClick={()=>setToggle(false)}>Skills</Link></li>
         <li><Link id="link" onClick={()=>setToggle(false)} to="/projects">Projects</Link></li>
       <li><Link id="link" onClick={()=>setToggle(false)} to="/contacts">Contacts</Link></li>
        </ul>
        </div>
        
    <Routes>
<Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
<Route path="/skills" element={<Skills/>} />
<Route path="/projects" element={<Projects />} />
<Route path="/Contacts" element={<Contacts />} />
  </Routes>
  </Routers>
    </>
  );
}

export default App;
