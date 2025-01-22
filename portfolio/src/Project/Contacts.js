import React from "react";
const Contacts = () => {
  return (<>
    <div className="lg:p-4 lg:text-lg">
 <div className="w-full p-4 flex flex-col justify-center items-center gap-y-4 lg:flex-row lg:gap-x-16">
    <h1 className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-extrabold">Contact Me</h1>
    <h4 className="text-xl  font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500 inline-block text-transparent bg-clip-text">Let's work Together</h4>
  </div>
  <div className=" w-full text-sm font-bold lg:text-lg text-center text-white lg:p-8">
    <p>Ready to bring your ideas to life with stunning, responsive websites? As a web developer, I specialize in turning visions into beautiful, functional web experiences. Let's collaborate and build something amazing together—get in touch today!</p>
    </div>
    <div className="w-full my-4  flex flex-col lg:justify-center items-start lg:gap-x-8 lg:flex-row ">
    <div className="flex justify-center p-4 gap-4">
  <img src="images/telephone.png" className="w-8 h-8" />
  <p className="text-sm font-bold text-white lg:text-lg">+91 7980910076</p>
    </div>
     <div className="flex justify-center p-4 gap-4">
  <img src="images/gmail.png" className="w-8 h-8" />
  <p className="text-sm font-bold text-white lg:text-lg">anujyotide@gmail.com</p>
    </div>
    </div>
    </div>
    </>
  );
};


export default Contacts;
