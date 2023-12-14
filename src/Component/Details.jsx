import React from "react";
import { GiAudioCassette } from "react-icons/gi";
import p1 from '../assets/customer-support.png'
import p2 from '../assets/high-quality.png'
import p3 from '../assets/search.png'
import p4 from '../assets/prestige.png'

const Details = () => {
  return (
    <div className="w-full  py-10 ">
      <div className="p-5 py-10 ">
        <h1 className="text-2xl font-semibold text-center text-[#001930]">
          What Makes UsThe Most
        </h1>
        <h1 className="text-2xl font-semibold text-center">
          {" "}
          Innovative Brand in Audio Industry
        </h1>
        <p className="px-5 mt-4 text-center">
          We are a brand with creativity, technology, craftiness and socio
          responsibility.{" "}
        </p>
        <p className="px-5 text-center">
          We make Audio products that add value to your life.
        </p>
      </div>
      <div className="w-[90%] mx-auto grid  md:grid-cols-4 sm:grid-cols-2 gap-3">
        <div className="cursor-pointer group bg-[#85e4e2] hover:bg-[#00AFAC] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3">
          <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
            {/* <GiAudioCassette className="text-6xl  " /> */}
            <img src={p3} className="text-red-300 w-[60px]"/>
          </div>
          <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
            Uncompromised Quality
          </h3>
          <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700">
            Erthpot products are designed & made with the highest quality of
            components available for that segment.
          </p>
        </div>
        <div className="cursor-pointer group bg-[#85e4e2] hover:bg-[#00AFAC] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3">
          <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
            {/* <GiAudioCassette className="text-6xl  " /> */}
            <img src={p1} className="text-red-300 w-[60px]"/>
          </div>
          <h3 className="text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
          Audio Consulting
          </h3>
          <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700">
          The tech team of Erthpot ensures that the customers know and understand the technology behind our products
          </p>
        </div>
        <div className="cursor-pointer group bg-[#85e4e2] hover:bg-[#00AFAC] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3">
          <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
            {/* <GiAudioCassette className="text-6xl  " /> */}
            <img src={p4} className="text-red-300 w-[60px]"/>
          </div>
          <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
          User Experience
          </h3>
          <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700 ">
          Since Erthpot is into simplify complex audio applications, the softwares & systems designed by Erthpot team ensure smooth operations & easy to learn
          </p>
        </div>
        <div className="cursor-pointer group bg-[#85e4e2] hover:bg-[#00AFAC] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3">
          <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
            {/* <GiAudioCassette className="text-6xl  " /> */}
            <img src={p2} className="text-red-300 w-[60px]"/>
          </div>
          <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
          Brand Credibility
          </h3>
          <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700 ">
          Erthpot products are certified for quality & aspirations. The various certificates we hold like StartUp India, Make in India, UDYAM & ISO speak for our commitment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
