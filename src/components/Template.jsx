import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({title,desc1,desc2,image,formType,setIsLoggedIn}){
    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 " >
            <div className=" w-11/12 max-w-[480px]">
                {/* title */}
                <h1 className=" text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

                {/* description */}
                <p className=" text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className=" text-gray-500">{desc1}</span>
                    <br></br>
                    <span className=" text-pink-800 italic">{desc2}</span>
                </p>

                {/* if (formtype === signup) then {signup page} else {login page}*/}
                {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
               
            
            </div>


        </div>
    )
}

export default Template