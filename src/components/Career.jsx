import React from "react";


const Career = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="bg-[url('assets/careerbgshad.png')] h-full bg-cover bg-center bg-no-repeat">
        <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-[18rem]">
            <div className="mt-[7rem]">
              <h3 className="text-[#515f5f] font-extrabold text-4xl pb-[0.5rem]">Hi!</h3>
              <h3 className="text-[#bdba7e] font-extrabold text-4xl">Welcome to RSky Group Career Center</h3>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-10 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="px-8 pb-8">
              <h3 className="font-bold text-xl mt-6 mb-3 text-[#515f5f]">Researcher</h3>
              <p className="text-[#515f5f]">Lorem Ipsum Bla bla bala nasdba bskdnnmck kanfklanfka nkasdn</p>
            </div>
            <div className="flex space-x-72 bg-slate pl-8 py-4">
              {/* <div className="">
                <img src="assets/locationicon.png" alt="" className="shadow rounded max-w-full h-auto align-middle border-none"/>
              </div> */}
              <p className=" text-black">Jakarta</p>
              <p className=" text-black">Details >>></p>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="px-8 pb-8">
              <h3 className="font-bold text-xl mt-6 mb-3 text-[#515f5f]">Product Manager</h3>
              <p className="text-[#515f5f]">Lorem Ipsum Bla bla bala nasdba bskdnnmck kanfklanfka nkasdn</p>
            </div>
            <div className="flex space-x-72 bg-slate pl-8 py-4">
              <p className=" text-black">Jakarta</p>
              <p className=" text-black">Details >>></p>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="px-8 pb-8">
              <h3 className="font-bold text-xl mt-6 mb-3 text-[#515f5f]">Job 5</h3>
              <p className="text-[#515f5f]">Lorem Ipsum Bla bla bala nasdba bskdnnmck kanfklanfka nkasdn</p>
            </div>
            <div className="flex space-x-72 bg-slate pl-8 py-4">
              <p className=" text-black">Jakarta</p>
              <p className=" text-black">Details >>></p>

            </div>
          </div>
        </div>




        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-6 sm:pt-10 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="px-8 pb-8">
              <h3 className="font-bold text-xl mt-6 mb-3 text-[#515f5f]">Job 4</h3>
              <p className="text-[#515f5f]">Lorem Ipsum Bla bla bala nasdba bskdnnmck kanfklanfka nkasdn</p>
            </div>
            <div className="flex space-x-72 bg-slate pl-8 py-4">
              <p className=" text-black">Jakarta</p>
              <p className=" text-black">Details >>></p>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="px-8 pb-8">
              <h3 className="font-bold text-xl mt-6 mb-3 text-[#515f5f]">Job 3</h3>
              <p className="text-[#515f5f]">Lorem Ipsum Bla bla bala nasdba bskdnnmck kanfklanfka nkasdn</p>
            </div>
            <div className="flex space-x-72 bg-slate pl-8 py-4">
              <p className=" text-black">Jakarta</p>
              <p className=" text-black">Details >>></p>

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="px-8 pb-8">
              <h3 className="font-bold text-xl mt-6 mb-3 text-[#515f5f]">Job 6</h3>
              <p className="text-[#515f5f]">Lorem Ipsum Bla bla bala nasdba bskdnnmck kanfklanfka nkasdn</p>
            </div>
            <div className="flex space-x-72 bg-slate pl-8 py-4">
              <p className=" text-black">Jakarta</p>
              <p className=" text-black">Details >>></p>

            </div>
          </div>
        </div>

        <div className="h-[8rem]">
        </div>
      </div>
    </div>
    
  );
}

export default Career;
