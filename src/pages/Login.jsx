import React from "react";
import Template from "../components/Template";


function Login({setIsLoggedIn}){
    return(
        <Template
         title="Elevate Your Skills, Log in Now!" 
         desc1="Ready to take your skills to the next level"
         desc2="Login in to explore our extensive library, engage with expert instructors, and gain valuable insights to advance your career"
         formType="login"
         setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login