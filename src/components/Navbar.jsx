import React from "react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast";
import { CgProfile } from "react-icons/cg";


function Navbar(props){
   let isLoggedIn = props.isLoggedIn;
   let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className=" flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            {/* course net logo */}
            <Link to="/">
                <div className=" text-pink-600 text-3xl font-serif font-bold">
                    CourseMap
                </div>
            </Link>
            <div className=" flex items-center gap-x-4 ">
            {
                    !isLoggedIn &&
                    <Link to='/'>
                        <button
                        className=" bg-[#2c3842] text-white text-[18px] py-[8px] px-[12px] rounded-[8px] bg-black-700 ">
                             Home
                        </button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to='/login'>
                        <button
                        className=" bg-[#2c3842] text-white text-[18px] py-[8px] px-[12px] rounded-[8px] bg-black-700 ">
                             Login
                        </button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to='/signup'>
                        <button
                             className=" bg-[#2c3842] text-white text-[18px] py-[8px] px-[12px] rounded-[8px] bg-black-700 ">
                              Signup
                        </button>
                    </Link>
                }
                {/* edited by ash--------------- */}
               
                {
                    !isLoggedIn &&
                    <Link to='/explore-roadmaps'>
                        <button
                             className=" bg-[#2c3842] text-white text-[18px] py-[8px] px-[12px] rounded-[8px] bg-black-700 z-50 ">
                              Explore Roadmap
                        </button>
                    </Link>
                }
                {/* ------------------------------ */}
                {
                    isLoggedIn &&
                    <Link to='/'>
                         <button
                             className=" bg-[#2c3842] text-white text-[18px] py-[8px] px-[12px] rounded-[8px] bg-black-700 "
                            onClick={()=>{setIsLoggedIn(false);
                                        toast.success("logged out");
                                          }}>
                             Logout
                        </button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to='/explore-roadmaps'>
                        <button
                           className=" bg-[#2c3842] text-white text-[18px] py-[8px] px-[12px] rounded-[8px] bg-black-700 ">
                            Explore Roadmap
                         </button>
                     </Link>
                }     
                {
                    <Link to = '/profile'>
                        <CgProfile  className=" text-gray-500 text-4xl"/>
                    </Link>
                    
                }       
            </div>

        </div>
    )
}

export default Navbar
