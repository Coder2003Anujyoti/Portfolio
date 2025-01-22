import React,{useEffect,useState} from "react";
const Home = () => {
  return(
    <>
    <div className="p-4  w-full flex items-center flex-col lg:flex-row  lg:justify-start lg:p-16">
        <img className="w-64 h-64 md:w-96 md:h-96 rounded-full" src="images/AnujyotiDe.jpg" />
              <div className="p-8">
      <div className="w-full  text-xs text-white font-extrabold">
    <h2 className="text-white lg:text-lg">I'm a <span className=" text-xl bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-extrabold md:text-2xl">Web Developer</span></h2>
        <p className="text-white font-extrabold md:text-lg" id="infos">Hi, I’m Anujyoti De, a passionate B.Tech student specializing in Information Technology. Currently, I am honing my skills in the field of Frontend Development, with a keen interest in creating dynamic and user-friendly web applications.
        </p>
    </div>
      <div className="w-full flex flex-row justify-start my-4 gap-x-4">
            <a href="https://www.linkedin.com/in/anujyoti-de-1a365a258" target="blank_"><img className="w-8 h-8" src="images/linkedin.png" id="linkedin" /></a>
      <a href="https://github.com/Coder2003Anujyoti" target="blank_"><img src="images/github.png" className="w-8 h-8" id="github"/></a>
      </div>
      </div>
    </div>
    </>
  );
};

export default Home;
