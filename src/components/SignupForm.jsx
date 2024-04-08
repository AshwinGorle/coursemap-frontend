import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const navigate = useNavigate();
    const[showPassword , setShowPassword] = useState(false);
    const[confirmPassword ,setConfirmPassword] = useState(false);
    const[accountType , setAccountType] = useState("student");

    const[formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setFormData((prevState)=>({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
        }
        else{      
            toast.success("account created");
            setIsLoggedIn(true);
            navigate("/dashboard");
            const accountData = {
                ...formData
            }
            const finalData = {
                ...formData,
                accountType
            }
            useNavigate("/");
            console.log(finalData);
            console.log(accountData);
        }
    }


    return(
        <div className= "" >
            {/* student-instructor tab */}
            <div
            className=" flex text-[#848c92] gap-x-1 my-6 p-1 bg-[#2c3842] max-w-max rounded-full">
                <button
                className={`${accountType === "student" ? "bg-[#010b13] text-white rounded-full p-2"
                 : "bg-[#2c3842] text-[#848c92] rounded-full py-2 px-5 transition-all duration-200"}`}
                onClick={()=> setAccountType("student")}>
                    Student
                </button>

                <button
                className={`${accountType === "instructor" ? "bg-[#010b13] text-white rounded-full p-2"
                :"bg-[#2c3842] text-[#848c92] rounded-full py-2 px-5 transition-all duration-200"}`}
                 onClick={()=> setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first name and last name */}
                <div className=" flex gap-x-5 mt-5">
                    <label className=" w-full">
                        <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">
                            First Name
                            <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                        </p>
                        <input
                            className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                            required
                            text="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="Enter First Name ..."
                            onChange={changeHandler}
                        />
                    </label>
                    <label className=" w-full">
                        <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">
                            Last Name
                            <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                        </p>
                        <input
                             className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                            required
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Enter Last Name ..."
                            onChange={changeHandler}
                        />
                    </label>
                </div>

                {/* email address */}
                <div className=" mt-5">
                    <label className=" w-full">
                        <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">
                          Email Address
                         <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                      </p>
                      <input
                      className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                         required
                        type="email"
                         name="email"
                        value={formData.email}
                        placeholder="Enter email address ..."
                        onChange={changeHandler}
                    />
                    </label>
                </div>
               

                {/* password and confirm password */}
                <div className=" flex gap-x-5 mt-5">
                    <label className=" w-full relative">
                        <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">
                            Create Password
                            <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                        </p>
                        <input
                         className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                         required
                         type={showPassword?("text"):("password")}
                         name="password"
                         value={formData.password}
                         placeholder="Create Password ..."
                         onChange={changeHandler}
                        />
                        <span
                        className=" absolute right-[12px] top-[40px] text-white text-[20px] fill-[#AFB2BF]"
                        onClick={()=> setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
                    <label className=" w-full relative">
                        <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">
                            Confirm Pasword
                            <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                        </p>
                        <input
                         className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                         required
                         name="confirmPassword"
                         value={formData.confirmPassword}
                         placeholder="Confirm Password ..."
                         onChange={changeHandler}
                         type={confirmPassword?("text"):("password")}
                         />
                         <span
                         className=" absolute right-[12px] top-[40px] text-white text-[20px] fill-[#AFB2BF]"
                         onClick={()=> setConfirmPassword((prev) => !prev)}>
                            {confirmPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                         </span>
                    </label>
                </div>

                <button className=" w-full bg-yellow-200 font-medium rounded-[8px] px-[12px] py-[10px] mt-6">
                    Create Account
                </button>
               
            </form>
        </div>
    )
}
export default SignupForm