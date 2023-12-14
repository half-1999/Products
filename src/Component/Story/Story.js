import React from "react";
import "./Story.css";
const Story = () => {
  return (
    <div className="container_story w-full p-7 ">
      <div class="wave"></div>

      <div className="grid  md:grid-cols-2  gap-2">
        <div class=" flex justify-center items-center ">
          <img
            src="https://www.erthpot.com/wp-content/uploads/2022/12/about-image.png"
            className="w-[400px] hover:duration-700 duration-1000 "
          />
        </div>

        <div class="story_container   ">
          <p class="first uppercase">Erthpot</p>
          <h2>The Story of Erthpot</h2>
          <p class="second">
            The idea of founding Erthpot is interesting. In the cold winter of
            2018, We started discussing the current scenario of the AV Industry
            in India. The team understood the root cause of Indian customers’
            lack the trust and understanding of the new products launched in the
            industry.
          </p>
          <p class="second">
            Foreign goods had more faith, while Indian products, which are
            cost-effective and better quality, are not a willing option. This
            led to the foundation of a brand, which is entirely indigenous, and
            connected to mother earth. We had seen this dream in 2018 that one
            Indian brand would be made and would profoundly impact the industry.
            Finally, Erthpot started with great passion in 2022 by Heena Golani,
            Vikram Yadav, Vijay Sinha & Shailesh Awasthi, and we firmly believe
            this brand will soon take its position in the AV market.
          </p>
          <div className="text-center">
            {" "}
            <button className="uppercase p-3 border-2 border-cyan-600 hover:bg-cyan-700 hover:text-white hover:duration-700 text-cyan-700 hover:border-white hover:rounded-lg">
              known more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
