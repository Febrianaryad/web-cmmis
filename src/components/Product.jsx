import React from "react";
import Logo from '../assets/logo.png'

const Product = () => {
  return (
    <div className="w-full min-h-screen">
      <br />
      <div className="w-full flex flex-row-reverse">
        <div className="w-2/5 flex flex-col p-4 mb-5 mt-20">
            <div className="justify-center flex flex-wrap mt-5">
                  <div className="flex flex-col">
                    <div className="self-end px-6 text-[#527271] font-extrabold text-2xl">
                      RSky Consultancy
                    </div>
                    <div className="text-sm self-end pr-6">
                      PT Pandasa Minergi Konsultan
                    </div>
                  </div>
                  <div>
                      <img src={Logo} alt="Icon Image" style={{width: '4rem'}}/>
                  </div>
              </div>
        </div>
      </div>

      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-full">
            <div className="max-w-[37rem] text-xl text-justify px-8 pb-8">
              <h1 className="text-[#527271] font-extrabold text-5xl">Strategic Consultancy</h1>
              <br />
              <p className="text-[#515f5f]">Our expertise and knowledge to offer linkages into markets in the region and collaboratively working with investee to grow value of industry.</p>
            </div>
          </div>
      

    </div>
  );
}

export default Product;
