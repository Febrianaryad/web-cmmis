import React from "react";
import Logo from '../assets/logo.png'

const Services1 = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-[18rem]">
          <div className="mt-[7rem]">
            <h1 className="text-[#bdba7e] font-extrabold text-4xl">Our <span className="text-[#515f5f] font-extrabold text-4xl">Services</span></h1>
            <h2 className="text-[#515f5f] font-bold text-base">to our best in the minerals and metals industry</h2>
          </div>
      </div>

      <div className="max-w-full h-[3rem] ml-10 mr-10 rounded-2xl bg-[#fcfcf2] justify-center mt-11">
        <div className="items-center text-center">
          <h2 className="text-[#515f5f] font-bold text-4xl">Service</h2>
        </div>
      </div>

      <div className="max-w-[45rem] mx-auto text-xl justify-center text-justify mt-20">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div className="h-[6rem]">
        </div>
      </div>

      
  );
}

export default Services1;