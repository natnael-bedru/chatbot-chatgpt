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
      <main className="flex">
        <section className="container bg-zinc-700 h-screen flex flex-col justify-end items-center ">
          {/* BUBBLE CHAT LINK: https://dev.to/mino89/incredibly-simple-talk-bubbles-with-tailwind-4fe0 */}
          {/* Green bubble ::START */}
          <div className="w-1/2 flex items-center ">
            <div className="w-3 overflow-hidden">
              <div className="h-4 bg-green-400 rotate-45 transform origin-bottom-right rounded-sm"></div>
            </div>
            <div className="bg-green-400 p-4 my-6 rounded-lg flex-1 shadow-md">
              🔥🔥🔥🔥Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam blanditiis harum quisquam
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            </div>
          </div>
          {/* Green bubble ::END */}
          {/* GRAY bubble ::START */}
          <div className="flex items-center ">
            <div className="bg-blue-200 p-4 my-6 rounded-lg flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="w-3 overflow-hidden ">
              <div className="h-4 bg-blue-200 rotate-45 transform origin-top-left rounded-sm"></div>
            </div>
          </div>
          {/* Green bubble ::END */}

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
        </section>
      </main>
    </>
  );
}

export default App;
