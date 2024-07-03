import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav className="flex justify-between px-10 py-8">
        <img src="/brand_logo.png" alt="" />
        <ul className="flex gap-8 uppercase font-bold">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-[#D01C28] text-white px-6 font-bold">
          Login
        </button>
      </nav>

      <section className="flex justify-between px-20 items-center">
        <div className="w-[55%]">
          <h1 className="font-extrabold text-[8rem] leading-[1]">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="my-8 w-1/2 text-[0.9rem] text-gray-500">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex gap-8 mt-4">
            <button className="text-[1rem] bg-[#D01C28] text-white px-8 py-2">
              Shop Now
            </button>
            <button className="text-[1rem] px-8 py-2 border-2 border-black">
              Category
            </button>
          </div>
          <div className="mt-8">
            <p>Also Available On</p>
            <div className="flex gap-4 mt-2">
              <img src="./flipkart.png" alt="" />
              <img src="./amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <img className="w-full h-[80vh]" src="./shoe_image.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default App;
