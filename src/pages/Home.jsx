import React from "react";
// import homeBgVideo from "../assets/newBgVideo.mp4"
import homeBgVideo from "../assets/bgVideo.mp4"
// import homeBgVideo from "../assets/newBg.mp4"
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Divider from "../components/Divider";
import CourseRL from "../components/CourseRL";
import CourseLR from "../components/CourseLR";
import CourseLeft from "../components/CourseLeft";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      
      <div>
      <div className=" overflow-hidden w-full h-screen">
      <video
        src={homeBgVideo}
        autoPlay="true"
        loop="true"
        muted="true"
        className=""
      ></video>

      {/* tagline and description */}
      <div className=" absolute top-80 w-full flex flex-col text-white justify-center text-center p-4">
        <div className=" w-max mx-auto">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  text-white font-bold font-Lexend text-2xl">
          Your personalized roadmap to learning success.
          </h1>
        </div>
        <div className=" mt-10">
          {
            <Link to="/login">
              <a
                href="#_"
                class="inline-flex items-center justify-center w-full px-4 py-2 mb-2 text-lg text-white bg-pink-600 rounded-md hover:bg-pink-500 sm:w-auto sm:mb-0"
                data-primary="green-400"
                data-rounded="rounded-2xl"
                data-primary-reset="{}"
              >
                Get Started
                <svg
                  class="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          }
        </div>
      </div>
    </div>
    </div>
  
    {/* divider */}
    <Divider/>

    {/* course card */}
   
    {/* bg-gradient-to-r from-slate-500 to-slate-800 */}
    <div className=" mt-6 mb-10 bg-[#010b13] rounded-3xl">
      
      <div className="p-5"> 
      <marquee scrollamount="10" direction="right">
        <CourseCard/>
      </marquee>

      <marquee scrollamount="10" direction="left">
        <CourseRL/>
      </marquee>

      <marquee scrollamount="10" direction="right">
        <CourseLR/>
      </marquee>

      <marquee scrollamount="10" direction="left">
        <CourseLeft/>
      </marquee>
      </div>
    </div>


    {/* get mentor */}
   <div className=" text-white text-center" > 
     <div className=" text-3xl text-pink-600">Don't worry if your roadmap is not present here </div>
     <p className=" italic">connect with our mentors for free to receive personalized guidance and support tailored to your needs.</p>
     <Link to="/contactMentor">
        <button className=" mt-3 text-white bg-pink-600 rounded-md hover:bg-pink-500 p-3">
        Connect with a mentor for free
        </button>
     </Link>
   </div>

    {/* services card */}
    <Services/>

    {/* testimonial */}
    <Testimonial/>
    
    {/* footer */}
    <Footer/>

</div>

  );
};

export default Home;