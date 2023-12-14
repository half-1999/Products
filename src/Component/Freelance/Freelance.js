import React from "react";
import "./Freelance.css";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
const Freelance = () => {

  const cards=[
    {
    img:f1,
    title:"Passion",
    paragraph: "Our never-ending passion for developing the best technology for the audio industry.",
  },
    {
    img:f2,
    title:"Technology",
    paragraph: "Developing nature friendly sustainable technology for our users to have a better experience",
  },
    {
    img:f3,
    title:"Learning",
    paragraph: "We strive to improve & attain betterment of our team",
  },
    {
    img:f4,
    title:"Explore",
    paragraph: "We explore opportunities to make your experience better",
  },
    
]
  return (
   
    <div className="w-full">
      <div className="w-[90vw] mx-auto">
        <div className="w-[50%] mx-auto">
          <h2 className="text-center">Work Freelancer Has Done</h2>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1  w-full gap-2"> */}
        <div className="grid  md:grid-cols-2 sm:grid-cols-1  w-full gap-2">
          <div className="min-h-[400px] ">
            {
              cards.map((item,i)=>(
                <div className="p-4 flex gap-5 items-center ">
              <div>
                <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-[#00AFAC] hover:bg-[#101930] hover:duration-700 duration-700">
                  <img src={item.img} alt="no image" className="w-[50px] h-[50px]" />
                </div>
              </div>
              <div>
                <h5 className="text-[#00AFAC] text-xl font-bold">{item.title}</h5>
                <p className="text-[12px]">
                  {item.paragraph}
                </p>
              </div>
            </div>
              ))
            }
            
          </div>
          <div className="min-h-[400px]  p-4">
            <div className="flex justify-center items-center w-full p-3 h-full">
              <div className="">
                <h1 className="text-2xl font-bold text-[#00AFAC]">
                  Your Truly
                </h1>
                <h1>
                  <span className="text-2xl font-bold text-[#00AFAC]">
                    Indigenous
                  </span>{" "}
                  <span className="text-2xl font-bold text-[#101930]">
                    Audio
                  </span>
                </h1>
                <h1>
                  <span className="text-2xl font-bold text-[#101930]">
                    Technology
                  </span>{" "}
                  <span className="text-2xl font-bold text-[#00AFAC]">
                    Brand
                  </span>
                </h1>
                <p className="mt-4 ">
                  Erthpot is an indigenous{" "}
                  <span className="font-bold">Make in India</span> initiative to
                  provide world-class audio technologies to users across the
                  world. The company imbibes the values of being{" "}
                  <span className="font-bold text-[#00AFAC]">
                    grounded, humble, and honest with our customers,
                  </span>{" "}
                  giving us the name “Erthpot”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
