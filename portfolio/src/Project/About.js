import React from "react";
const About = () => {
  return(
    <>
    <div className="p-4  w-full flex items-center flex-col gap-y-8 lg:flex-row lg:justify-start lg:gap-x-8 md:p-16">
        <img src="images/AnujyotiDe.jpg" className="w-64 h-64 lg:w-96 lg:h-96 rounded-full" />
      <div className="w-full  flex text-xs justify-start">
        <p className="text-white text-xs font-bold lg:text-lg">Hi, I’m Anujyoti De, a passionate B.Tech student specializing in Information Technology. Currently, I am honing my skills in the field of Frontend Development and Backend Development, with a keen interest in creating dynamic and user-friendly web applications.

I enjoy combining creativity with coding to craft seamless and visually appealing user experiences. My journey in frontend development has led me to explore HTML, CSS, JavaScript, and modern frameworks like React,Express. I’m constantly seeking opportunities to expand my knowledge, work on real-world projects, and stay up-to-date with the latest trends in web development.

I'm enthusiastic about collaborating with like-minded professionals and contributing to impactful projects.</p>
</div>
    </div>
    </>
  );
};

export default About;
