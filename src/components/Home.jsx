import React from "react";
import Logo from '../assets/logo.png'
import Logo1 from '../assets/imghome1.png'
import Logo2 from '../assets/imghome2.png'
import Logo3 from '../assets/imghome3.png'
import Logo4 from '../assets/icmmis.png'

const Home = () => {
  return (
    <div name ='home' className="w-full h-screen ">
        <div className="bg-[url('assets/homebgshad.png')] h-full bg-cover bg-center bg-no-repeat">
          <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-full">
            <h1 className="text-[#527271] font-extrabold text-3xl">About Us</h1>
            <br />
              <div className="max-w-[45rem] text-xl text-justify">
                <p>
                  We are a new investment and consultant group with 
                  initiatives on the development of mineral commodity based 
                  transformation to knowledge based economy, from mineral commodity based to metal based manufacturers 
                  and new energy. 
                </p>
                <br />
                <p>
                  With founder's extensive background and experience in the 
                  energy and mineral resources sector, in collaboration with 
                  competent experts from multiple related disciplines, we believe 
                  the alliance in the modern era of added value metal 
                  based and energy transition is inevitable, provided carry out 
                  long term prosperity for society, environment and a better life.
                </p>
              </div>
          </div>
        </div>

        <div className="max-w-[77.5rem] mx-auto grid md:grid-cols-2 gap-10">
          <div className="w-full flex flex-col p-4 mb-5 mt-20">
          <img className="w-45 mx-auto mt" src={Logo2} alt="/"/>
            <div className="justify-center flex flex-wrap mt-5">
                <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                  RSky Consultant
                </div>
                <div>
                    <img src={Logo} alt="Icon Image" style={{width: '5rem'}}/>
                </div>
                <div>
                  PT Pandasa Minergi Konsultan
                </div>
            </div>
          </div>

          <div className="w-full flex flex-col p-4 mb-5 mt-20">
          <img className="w-45 mx-auto mt" src={Logo1} alt="/"/>
            <div className="justify-center flex flex-wrap mt-5">
                <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                  RSky Investment
                </div>
                <div>
                    <img src={Logo} alt="Icon Image" style={{width: '5rem'}}/>
                </div>
                <div>
                  PT Pandasa Prima Investama
                </div>
            </div>
          </div>
        </div>

        <div className="max-w-[35rem] mx-auto grid md:grid-cols-1 gap-10">
          <div className="w-full flex flex-col p-4 my-5">
            <img className="w-45 mx-auto mt" src={Logo3} alt="/"/>
              <div className="justify-center flex flex-wrap mt-5">
                <img className="max-w-[22rem] mx-auto mt" src={Logo4} alt="/"/>
              </div>
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

export default Home;
