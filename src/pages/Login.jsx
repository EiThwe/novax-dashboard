import React from "react";
import Lottie from "lottie-react";
import officeAnimation from "../assets/office-animation.json";
import logo from "../assets/logo.svg";
import { Input, InputPassword } from "../components";
const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[60%] h-full bg-white flex justify-center items-center">
        <Lottie animationData={officeAnimation} loop className="h-[95%]" />
        <div className="absolute w-[100px] h-[100px] top-5 left-7">
          <img src={logo} className="w-full h-full" alt="logo" />
        </div>
      </div>
      <div className="w-[40%] h-full bg-primary flex justify-center items-center">
        <div className="flex flex-col gap-5 w-full px-8">
          <h1 className="text-shadow text-secondary text-3xl font-bold text-center">
            Login Account!
          </h1>
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
          />
          <InputPassword
            name={"password"}
            placeholder={"Enter your password..."}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
