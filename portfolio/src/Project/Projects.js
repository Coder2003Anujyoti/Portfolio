import React from "react";
const Projects = () => {
  return (
    <>
<div className="lg:p-4">
  <div className="w-full flex justify-center "><h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">My Projects</h1></div>
      <div className="py-4 flex flex-col gap-y-8 lg:flex-row lg:p-12 lg:gap-x-24">
       <div className="flex flex-col text-center gap-y-2">
 <div className="w-full flex justify-center"><a href="https://coder2003anujyoti.github.io/Pokedex/" target="_blank"><img src="Images/Pokemon.jpg" className="w-64 h-54 rounded-lg"/></a></div>
  <h1 className="text-xl text-white font-bold">Pokedex App</h1>
    <p className="text-sm text-white font-bold lg:text-lg">Welcome to the Pokedex App! It is an API inbuilt app.Here you get different variety of pokemons along with their stats. Let's enjoy it by explore it.</p>
  </div>
         <div className="flex flex-col text-center gap-y-2">
 <div className="w-full flex justify-center"><a href="https://coder2003anujyoti.github.io/Ben10-website/" target="_blank"><img src="Images/Ben10.jpg" className="w-64 h-54 rounded-lg"/></a></div>
  <h1 className="text-xl text-white font-bold">Ben10 App</h1>
    <p className="text-sm text-white font-bold lg:text-lg">Welcome to the Ben10 App! It is a REST API inbuilt app .Here you get different variety of aliens along with their names and images. Creating REST API for storing data as well as introduce different methods for fetching data in REST API Let's enjoy it by explore it.</p>
  </div>
     <div className="flex flex-col text-center gap-y-2">
 <div className="w-full flex justify-center"><a href="https://coder2003anujyoti.github.io/benweb/" target="_blank"><img src="images/IP.jpg" className="w-64 h-54 rounded-lg"/></a></div>
  <h1 className="text-xl text-white font-bold">Cricket App</h1>
    <p className="text-sm text-white font-bold lg:text-lg">Welcome to the Cricket App! It is a mern-stack based app involve both frontend showing images and different details and backend for storing data and fetch data through different HTTP requests.</p>
  </div>
  </div>
</div>
</>
  );
};



export default Projects;
