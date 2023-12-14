import React from 'react'
// import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram ,FaTwitter,FaYoutube,FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer class="footer-section  p-4">
    <div class="container">
        <div class="footer-cta pt-5 pb-5 border-b border-gray-700">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="mb-4">
                    <div class="flex">
                    <FaLocationDot  className=' text-[#00AFAC] text-4xl mr-2'/>
                        <div class="cta-text">
                            <h4 class=" text-lg font-semibold ">Find us</h4>
                            <span class="text-gray-500">India
A - 164, A Block Noida Sector 63, Gautam Budhha Nagar Uttar Pradesh Pincode: 201301</span>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex  justify-center">
                        {/* <i class="fas fa-phone text-orange-500 text-2xl mr-3"></i> */}
                        <IoCall className=' text-[#00AFAC] text-2xl mr-2' />
                        <div class="cta-text">
                            <h4 class=" text-lg font-semibold">Call us</h4>
                            <span class="text-gray-500">+91 01204567452</span>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex  justify-center ">
                        {/* <i class="far fa-envelope-open text-orange-500 text-2xl mr-3"></i> */}
                        <MdEmail className=' text-[#00AFAC] text-3xl mr-2'/>

                        <div class="cta-text">
                            <h4 class=" text-lg font-semibold">Mail us</h4>
                            <span class="text-gray-500">info@erthpot.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content pt-5 pb-5">
            <div class=" w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="mb-8 md:mb-0">
                    <div class="footer-widget">
                        <div class="footer-logo ">
                            <Link to="/" ><img src="https://www.erthpot.com/wp-content/uploads/2022/10/retina-01.png" class=" w-[180px] " alt="logo" /></Link>
                        </div>
                        <div class="footer-text">
                            {/* <p class="text-gray-500">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit, Lorem ipsum dolor sit amet.</p> */}
                        </div>
                        <div class="footer-social-icon py-10">
                            <span class="text-[#00AFAE] text-xl ">Follow us</span>
                            {/* <Link to="#" class="text-white"><i class="fab fa-facebook-f facebook-bg"></i></Link> */}
                        <div className='flex gap-3 py-5'>
                        <FaFacebook className=' text-3xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer'/>
                            <FaInstagram className=' text-3xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer'/>
                            <FaTwitter className=' text-3xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer' />
                            <FaYoutube className=' text-3xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer' />
                            <FaLinkedin  className=' text-3xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer'/>
                        </div>
                            {/* <Link to="#" class="text-white"><i class="fab fa-twitter twitter-bg"></i></Link>
                            <Link to="#" class="text-white"><i class="fab fa-google-plus-g google-bg"></i></Link> */}
                        </div>
                    </div>
                </div>
                <div class="mb-8 md:mb-0">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3 class=" text-lg font-semibold">Useful Links</h3>
                        </div>
                        <div className='flex gap-4'>
                        <ul className='footer_ul'>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/" class="text-gray-500 ">Home</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/about" class="text-gray-500">About</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Wireless Microphones</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/catalogue" class="text-gray-500">Catalogue</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Become Our Partner</Link></li>
                            {/* <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Registration & Warranty</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">DSP & Controls</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Audio Conference System</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/contact" class="text-gray-500">Contact us</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/blogs" class="text-gray-500">Blogs</Link></li> */}
                        </ul>
                        <ul className='footer_ul'>
                            {/* <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/" class="text-gray-500 ">Home</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/about" class="text-gray-500">About</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Wireless Microphones</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/catalogue" class="text-gray-500">Catalogue</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Become Our Partner</Link></li> */}
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Registration & Warranty</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">DSP & Controls</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="#" class="text-gray-500">Audio Conference System</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/contact" class="text-gray-500">Contact us</Link></li>
                            <li className='hover:translate-x-2 duration-700 hover:duration-700'><Link to="/blogs" class="text-gray-500">Blogs</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="mb-8 md:mb-0">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3 class="text-white text-lg font-semibold">Subscribe</h3>
                        </div>
                        <div class="footer-text mb-4">
                            <p class="text-gray-500">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="#" class="flex items-center bg-[#00AFAE]">
                                <input type="text" placeholder="Email Address" class="w-full py-2 px-4 bg-gray-800 outline-none border-[#00AFAE] border-2 text-white" />
                                <button class="ml-2 py-2 px-4  border-white">
                                    {/* <i class="fab fa-telegram-plane text-white">
                                        </i> */}
                                                  <MdEmail className=' text-white text-3xl'/>
                                                  </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center py-4'>
        <hr/>
        <p className='text-gray-400 mt-5'>
        © 2022 Erthpot | Your Indian AV Manufacturing Partner. All rights reserved |
        </p>
        <p className='text-gray-400 mt-5'>
        Website Proudly Developed SocialNinjaz Technologies & Creative Media
        </p>
    </div>
    {/* <div class="copyright-area bg-gray-800">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="text-center md:text-left mb-4 md:mb-0">
                    <div class="copyright-text">
                        <p class="text-gray-500">Copyright &copy; 2018, All Right Reserved <Link to="https://codepen.io/anupkumar92/" class="text-orange-500">Anup</Link></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div> */}
</footer>

  )
}

export default Footer