import React from 'react'

const Banner = () => {
  return (
    <div>
          <section class="banner -z-40" id="banner">
        <video
          className="absolute w-full h-full object-cover"
          muted
          loop
          autoPlay
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
        {/* <div className="home-content relative text-white text-center pt-32"> */}
        <div className="home-content absolute left-10 text-whit font-bold">
          <a href="https://codepen.io/uiswarup/full/wvjZgar" target="_blank">
            <div class="container">
              <div class="row">
                <div class=" text-center mg:text-center">
                  <h3 class="animate-charcter"> Novo Conference Systen</h3>
                </div>
                <div className="text-center">
                  {" "}
                  <button className="uppercase p-3 border-2 border-cyan-600 hover:bg-cyan-700 hover:text-white hover:duration-700 text-cyan-700 hover:border-white hover:rounded-lg">
                    known more
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* </div> */}
      </section>
    </div>
  )
}

export default Banner