import React, { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({setIsLoggedIn}){

    const navigate = useNavigate();
    const[showPassword , setShowPassword] = useState(false);
    const[formData , setFormData] = useState({
        email:"",
        password:""
    })

    function changeHandler(event){
        setFormData((prevState)=>({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged in");
        console.log(formData);
        navigate("/home");
    }

    return(
        <div>
        <form onSubmit={submitHandler} className=" flex flex-col w-full gap-y-4 mt-6 ">
            {/* email address */}
            <label className=" w-full">
                <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">Email Address
                    <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                </p>
                <input
                className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email address ..."
                />
            </label>

            {/* password */}
            <label className=" w-full relative">
                <p className=" text-white text=[0.875rem] mb-1.5 leading-[1.375rem]">Password
                    <sup className=" text-pink-800 ml-2 text-[15px] font-bold">*</sup>
                </p>
                <input
                className=" bg-[#2c3842] rounded-[8px] text-white w-full p-[12px]"
                required
                type={showPassword?("text"):("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password ..."
                />
                <span
                className=" absolute right-[12px] top-[40px] text-white text-[20px] fill-[#AFB2BF]"
                onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
                    <Link to='#'><p className=" text-pink-800 mt-1 text-xs max-w-max ml-auto">Forgot Password</p></Link>
            </label>

            <button className=" w-max-max bg-yellow-200 font-medium rounded-[8px] px-[12px] py-[10px] mt-6">
                Log In
            </button>

        </form>

        
        </div>

        


    )
}

export default LoginForm