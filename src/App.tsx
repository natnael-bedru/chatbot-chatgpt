// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//text description color : gray-300 #d1d5db
import "./App.css";
import React, { useState } from "react";
import ArrowIcon from "./assets/arrow.svg";

function App() {
  return (
    <>
      <div className="bg-zinc-700 h-screen flex flex-col justify-end items-center ">
        {/* <div className="flex max-w-md mx-auto p-6 rounded-md shadow-md"> */}
        <div></div>
        <div className="w-1/2 ml-20">
          <input
            className="w-11/12 px-3 py-5 pe-16 leading-tight text-white bg-zinc-700 border border-zinc-600 rounded-md appearance-none focus:outline-none shadow-md  focus:shadow-outline"
            id="inputField"
            type="text"
            placeholder="Enter something..."
          />
          <button className="relative right-10 top-1 px-1 py-1 border border-white bg-white text-white rounded shadow-md focus:outline-none focus:shadow-outline ">
            <img src={ArrowIcon} alt="Arrow" className="h-6 w-6" />
          </button>
        </div>
        <p className="text-gray-300 my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
          enim.
        </p>

        {/* </div> */}
      </div>
    </>
  );
}

export default App;
