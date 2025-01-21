import {HashRouter as Routers,
Routes,Route,Link} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
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
  useEffect(() => {
    document.body.className ="bg-[#081c29]"; 
  }, []);
  return (
    <>
      <Routers>
          <div className="w-full flex items-center p-4 bg-[#081c29]">
          <div className="text-xl w-48  font-extrabold"> <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">My Portfolio</h1></div>
    <div className="md:hidden w-full flex justify-end">   {!toggle && <> <img className="w-8 h-8"src="images/bar.png" onClick={()=>setToggle(!toggle)} id="toggle" /> 
       </>}
       {toggle && <>  <img src="images/closes.png" className="w-4 h-4" id="close" onClick={()=>setToggle(!toggle)} /></>}
       </div>
      <div className="hidden md:w-full  md:flex md:flex-row">
         <ul type="none" className="hidden md:w-full  md:flex md:flex-row md:justify-evenly md:text-white md:font-extrabold">
        <li id="home"><Link id="link" 
         to="/">Home</Link></li>
      <li><Link id="link" to="/about">About</Link></li>
       <li><Link id="link" to="/skills">Skills</Link></li>
         <li><Link id="link" to="/projects">Projects</Link></li>
       <li><Link id="link" to="/contacts">Contacts</Link></li>
        </ul>
      </div>
          </div>
         <div className="p-4 flex justify-center gap-y-8 font-extrabold text-white bg-[#081c29] "style={my}>
        <ul type="none" className="p-2 flex justify-center gap-y-8 font-extrabold text-white flex-col">
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
