import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-around  bg-blue-600 text-white p-3" id="home">
     <h1 className="text-3xl m-3 font-semibold">buydesk</h1>
      <nav className='text-lg flex justify-center items-center ' >
        <a className="navLink " href="#home">Home</a>
        <a className="navLink" href="#home">About</a>
        <a className="navLink" href="#home">Testimonials</a>
         <a className="navLink" href="#home">Pricing</a>
        <a className="navLink" href="#home">FAQs</a>
        <a className="navLink" href="#home">Contact</a>

      </nav>
      <div className="headerBtnContainer flex">
<button className="text-xl m-2 font-semibold">Sign In</button>
<button className="text-xl text-sky-600 bg-white px-6 py-0 rounded-2xl m-2 flex items-center  font-semibold">Sign Up</button>
      </div>


    
    </div>
  );
}
