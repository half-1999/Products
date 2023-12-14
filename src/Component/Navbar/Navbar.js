import React, { useState, useEffect } from "react";
import whatsapp from "../../assets/whatsapp.png";
import "./Navbar.css";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSupportDropdownActive, setSupportDropdownActive] = useState(false);

  const toggleSupportDropdown = () => {
    setSupportDropdownActive(!isSupportDropdownActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div>
      
      <header className={`isSticky ? "sticky" : ""`}>
        {/* <a href="#" className="logo">Food<span>Spot</span></a> */}
        <img
          src="https://www.erthpot.com/wp-content/uploads/2022/10/retina-01.png"
          className="w-[150px] cursor-pointer hover:duration-700 duration-700"
        />
        <div
          className={`menutoggle ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>
        <ul className={`navigation ${isMenuActive ? "active" : ""}`}>
          <li>
            <a href="#banner" className="uppercase font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="uppercase font-bold">
              Products
            </a>
          </li>
         
          <li className="parent">
            <a href="#menu" className="uppercase font-bold">
            Studies
            </a>
            <ul class="child">
              <li className="w-[150px]">
                <a href="#" className="">
                 Blogs
                </a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="#menu" className="uppercase font-bold">
            Studies
            </a>
            <ul class="child">
              <li className="w-[150px]">
                <a href="#" className="">
                 Blogs
                </a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
            </ul>
          </li>
        
          <li>
            <a href="#testimonials" className="uppercase font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#contactus" className="uppercase font-bold">
              Contact
            </a>
          </li>
        </ul>
      </header>

      <section class="banner" id="banner">
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
                <div class="col-md-12 text-center">
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
      <section className="fixed z-10 -right-10 -bottom-10 ">
        <img
          src={whatsapp}
          className="w-14 border-[#00B0EA] border-2 rounded-full p-2"
        />
      </section>
    </div>
  );
};

export default Navbar;
