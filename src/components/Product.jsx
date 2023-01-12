import React from "react";


const Product = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-[18rem]">
          <div className="mt-[7rem]">
            <h1 className="text-[#bdba7e] font-extrabold text-6xl">Our <span className="text-[#515f5f] font-extrabold text-6xl">Services</span></h1>
            <h2 className="text-[#515f5f] font-bold text-base">to our best in the minerals and metals industry</h2>
          </div>
      </div>

      <div className="bg-[url('assets/prodbg.png')] min-h-screen bg-cover bg-center bg-no-repeat w-full">
        <div className="max-w-[62.5rem] min-h-screen mx-auto px-8 flex flex-col justify-center">


          <div className="items-center text-center h-[5rem] w-full py-8 flex justify-center bg-white opacity-30 hover:opacity-100">
            <div className="opacity-100 text-[#515f5f] font-bold text-xl">
              Service 1
            </div>
            
          </div>

          <br />

          <div className="items-center text-center h-[5rem] w-full py-8 flex justify-center bg-white opacity-30 hover:opacity-100">
            <div className="opacity-100 text-[#515f5f] font-bold text-xl">
              Service 2
            </div>
          </div>

          <br />

          <div className="items-center text-center h-[5rem] w-full py-8 flex justify-center bg-white opacity-30 hover:opacity-100">
            <div className="opacity-100 text-[#515f5f] font-bold text-xl">
              Service 3
            </div>
          </div>

          <br />

          <div className="items-center text-center h-[5rem] w-full py-8 flex justify-center bg-white opacity-30 hover:opacity-100">
            <div className="opacity-100 text-[#515f5f] font-bold text-xl">
              Service 4
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Product;
