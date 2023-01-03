import React from "react";
import Prof from '../assets/vicechair.png'


const ViceChairProf = () => {
  return (
    <div className="w-full h-screen ">
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

      <div className="max-w-[77.5rem] mx-auto grid md:grid-cols-2 gap-5">
        <div className="w-full flex flex-col p-4 mb-5 mt-20">
            <img className="mx-auto mt object-scale-down h-80 w-80" src={Prof} alt="/"/>
              <div className="justify-center mt-5 items-center text-center">
                  <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                  Mohammad Asyhari
                  </div>
                  <br />
                  <div>
                    Vice Chairman
                  </div>
              </div>
        </div>

        <div className="max-w-[45rem] text-xl text-justify mt-20">
          <br />
          <p>
          Mohammad Asyhari, has more than twelve years cross sectoral experience, working with a range of private and not for profit organizations, includes two national strategic alumina smelters and waste to energy project. For the first decade of his career, Asyhari primarily works on Oil & Gas related to national welding personnel enhancement and several EPC Projects. 
          He then shifted his focus to managerial responsibility, with strong emphasizes to the field of mineral extractives and eco-friendly energy solutions. More recently with founders, he established Indonesia Center for Mineral and Metal Industry Studies. He holds a Master of Business Management, University Prasetiya Mulya and Bachelor Degree in Metallurgy and Materials Engineering from University of Indonesia.
          </p>
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

export default ViceChairProf;
