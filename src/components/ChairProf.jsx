import React from "react";
import Prof from '../assets/chair.png'


const ChairProf = () => {
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
                    Dr. IR. Raden Sukhyar
                  </div>
                  <br />
                  <div>
                    Chairman
                  </div>
              </div>
        </div>

        <div className="max-w-[45rem] text-xl text-justify mt-20">
          <p>
            Dr. Raden Sukhyar, is a prominent figure with more than four decades of experience in the fields of Mineral Resources and Energy Sector. During his tenure in Ministry of Energy and Mineral Resources he held several pivotal positions, served as Head of Indonesia Geological Agency and Director General of Mineral and Coal, with also held positions as commissioners in state owned enterprises. He authored numerous professionalpolicies, serviced as an advisor to a number of organizations and achieved a number of awards, including the Bintang Jasa Utama from President Republic of Indonesia and Ganesha Wirya Jasa Utama from Bandung Instute of Technology (ITB).
          </p>
          <br />
          <p>
            In the post tenure era he once served as special assistant to Minister of Industry, commisioners and professional advisors to several private firms, and worked as non permanent consultant of World Bank. His recent initiatives are focused to encourage and direct the development of increased value-added minerals from Indonesian mines into Metal based products and the development of coal-based energy and materials
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

export default ChairProf;
