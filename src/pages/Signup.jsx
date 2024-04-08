import React from "react";
import Template from "../components/Template";


function Signup({setIsLoggedIn}){
    return(
        <Template
         title="Unlock Your Potential, Enroll Today!"  
         desc1="Welcome to our online learning platform, where knowledge meets convenience"
         desc2="in a community of learners and embark on a journey of continuous learning and development."
         formType="signup"
         setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup
