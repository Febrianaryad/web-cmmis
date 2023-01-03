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

      <div className="max-w-full h-[3rem] ml-10 mr-10 rounded-2xl bg-[#fcfcf2] justify-center mt-11">
        <div className="items-center text-center">
          <h2 className="text-[#515f5f] font-bold text-4xl">Management</h2>
        </div>
      </div>

      <div className="max-w-[77.5rem] mx-auto grid md:grid-cols-3 gap-5">

        <div className="w-full flex flex-col p-4 mb-5 mt-20">
            <img className="mx-auto mt object-scale-down h-80 w-80" src={Prof1} alt="/"/>
              <div className="justify-center mt-5 items-center text-center">
                  <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                    <a href="/chairman">Dr. IR. Raden Sukhyar</a>
                  </div>
                  <br />
                  <div>
                    Chairman
                  </div>
              </div>
            </div>
        

          <div className="w-full flex flex-col p-4 mb-5 mt-20">
            <img className="mx-auto mt object-scale-down h-80 w-80" src={Prof2} alt="/"/>
            <div className="justify-center mt-5 items-center text-center">
              <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                  <a href="/vice-chairman">Mohammad Asyhari</a>
                </div>
                <br />
                <div>
                  Vice Chairman
                </div>
              </div>
          </div>
          
          <div className="w-full flex flex-col p-4 mb-5 mt-20">
            <img className="mx-auto mt object-scale-down h-80 w-80" src={Prof3} alt="/"/>
            <div className="justify-center mt-5 items-center text-center w-max-[10rem]">
              <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                <a href="/secretary">Muhammad Rafif Roid</a>
              </div>
              <br />
              <div>
                Corporate Secretary
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-full h-[3rem] ml-10 mr-10 rounded-2xl bg-[#fcfcf2] justify-center mt-11">
          <div className="items-center text-center">
            <h2 className="text-[#515f5f] font-bold text-4xl">Associates</h2>
          </div>
        </div>

        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
    </div>
  );
}

export default Team;
