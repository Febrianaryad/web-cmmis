import React from "react";
import Prof1 from '../assets/chair.png'
import Prof2 from '../assets/vicechair.png'
import Prof3 from '../assets/sec.png'

const Team = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-[url('assets/teambg.png')] h-[20rem] bg-cover bg-center bg-no-repeat w-full">
        <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-[20rem]">
          <div className="mt-20">
            <br />
            <br />
            <h1 className="text-[#527271] font-extrabold text-6xl">Meet <span className="text-[#bdba7e] font-extrabold text-6xl">Our</span> Team</h1>
            <h2 className="text-[#515f5f] font-bold text-base">professional advisor and consultant with superior management</h2>
          </div>
        </div>
      </div>
      
      <br />
      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center">
        <div className="justify-center items-center mx-auto mt-11">
            <div className='text-center py-2 px-4 bg-[#f1f0dc] rounded-md w-[45rem]'>
              <h2 className="text-[#668685] font-bold text-4xl">Management</h2>
            </div>
        </div>
      </div>
    

      <div className="max-w-[62.5rem] mx-auto grid grid-cols-1">

        <div className="w-full flex flex-col p-4 mb-5 mt-2">
              <div className="justify-center mt-5 items-center text-center">
                  <div>
                    Founder
                  </div>
                  <br />
                  <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                    <a href="/chairman" className="opacity-100 duration-500 hover:opacity-50 hover:underline">Dr. IR. Raden Sukhyar</a>
                  </div>
              </div>
            </div>
        

          <div className="w-full flex flex-col p-4 mb-5 mt-4">
            <div className="justify-center mt-5 items-center text-center">
                <div>
                  Co-Founder & Chief Executive
                </div>
                <br />
              <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                  <a href="/vice-chairman" className="opacity-100 duration-500 hover:opacity-50 hover:underline">Mohammad Asyhari</a>
                </div>
              </div>
          </div>
      </div>

      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center">
        <div className="justify-center items-center mx-auto mt-8">
            <div className='text-center py-2 px-4 bg-[#f1f0dc] rounded-md w-[45rem]'>
              <h2 className="text-[#668685] font-bold text-4xl">Management</h2>
            </div>
        </div>
      </div>

        <div className="w-full flex flex-col p-4 mb-5 mt-2">
            <div className="justify-center mt-5 items-center text-center w-max-[10rem]">
              <div>
                Corporate Development Officer
              </div>
              <br />
              <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                <a href="/secretary" className="opacity-100 duration-500 hover:opacity-50 hover:underline">Muhammad Rafif Roid</a>
              </div>


            </div>
        </div>

      <div className="h-[6rem]">
      </div>

    </div>
  );
}

export default Team;
