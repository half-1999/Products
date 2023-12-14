import React from 'react'
import './About.css';


const About = () => {

  return (
    <>
      <div>

        <main>
          <section className="intro">
            <h1 className="intro__title">
              What Makes Us Erthpot
            </h1>
            <p className="intro__subtitle">
              We are a brand with creativity, technology, craftness and socio-responsibility. We make Audio products that add value to your life.
            </p>
            <a href="#" className="button">Get Started</a>
            <img className="intro__illustration" src="https://res.cloudinary.com/alexandracaulea/image/upload/v1583497233/intro-illustration_qneuer.svg" alt="" />
          </section>

          <div className='mt-[10rem]'>
            <h1 className="text-3xl text-center font-bold text-[#00AFAC]" >Our Core Foundation</h1>
            <p className='text-center'>
              What Sets Us Apart from Any Other AV Manufacturer Across the Globe
            </p>
          </div>

          <section id="how-it-works " className="grow">

          </section>


          {/* <div className="arrow-1"></div> */}
          <section className="get-feedback ">
            <div className='mt-[6rem]'><h2 className="section_title get-feedback_title">
              Passion For Manufacturing Best Audio Products!
            </h2>
              <p>
                We aim to provide products created under the strict observation of our audio experts.

                We strive to bring positive change. Our vision is to create a brand that emits sustainability and values it in every breath.
              </p>
            </div>

            <div>
              <img className="intro__illustration" src="https://www.erthpot.com/wp-content/uploads/2022/12/about-updated-vt-01-1.png" alt="" />
            </div>
          </section>
          <div className="arrow-2"></div>

          <section className="learning">

            <div>
              <img src="https://www.erthpot.com/wp-content/uploads/2022/12/research-audio.png" alt="" />
            </div>
            <div className='mt-[5rem]' >
              <h2 className="section_title learning_title">
                Years of Research by The Expert
                of Audio Industry!
              </h2>
              <p>
                Our team has inspired many young people to take the hard path of building brand equity

                The team had designed products with well-researched data, making them better than the current competition.
              </p>
            </div>


          </section>


          <div className="arrow-2"></div>
          <section className="learning">
            <div className='mt-[4rem]'>
              <h2 className="section_title learning_title">
                Our Responsibility Towards Environment & Ecology
              </h2>
              <p>
                The AV industry produces a lot of E-Waste which not only pollutes the environment but is equally toxic for different life forms. We at Erthpot, focus on building sustainable products.
                We try to minimize the peripheral waste produced during the manufacturing of our products, making us more environment-friendly.
              </p>
            </div>

            <div>
              <img src="https://www.erthpot.com/wp-content/uploads/2022/12/environ-01.png" alt="" />
            </div>
          </section>


          
           <div className="arrow-2"></div>
          <section className="learning">
            <div>
              <img src="https://www.erthpot.com/wp-content/uploads/2022/12/technology-img-abt.png" alt="" />
            </div>
            <div className='mt-[3rem]'>
              <h2 className="">
                Better Technology & Innovation in Audio manufacturing Industry
              </h2>
              <p>
                The ecosystem for electronics manufacturing in India is still in its nascent stage. Finding the right parts suppliers and OEM designers is difficult as of now. Luckily in the software and embedded design part, India has a huge pool of talented engineers.

                We are constantly improving the quality of vendors and service providers to develop better products that stand out in the global market.
              </p>

            </div>


          </section>

        </main>




      </div>
    </>
  )

}

export default About;