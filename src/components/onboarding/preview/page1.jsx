import React from "react";
import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import Onboard from "../../../../public/onboard.svg" 
import Logout from "../../../../public/Logout.svg" 
import Company from "../../../../public/company.svg" 

import { Button ,Progress} from "antd";
const PreviewEmp = () => {
  return (
    <div className="w-screen  h-screen p-5 bg-gray-50 flex flex-wrap items-center justify-center gap-20 ">
      <div className="w-[40%] h-full  p-4 bg-[#E6F7FF] flex justify-center items-center rounded-3xl">
      <Image width={100} height={100} src={Onboard} className="w-full " />
      </div>
      <div className="flex flex-col gap-5 items-center  w-[40%] relative">
      <div className="flex  items-center justify-evenly p-1 gap-1 border border-blue-500 text-blue-500 group hover:text-white btn hover:bg-blue-500 w-[8vw] absolute rounded-sm
         right-2 top-1 cursor-pointer">
          <Image width={15} height={15} src={Logout} className="group-hover:bg-white" />
          <button className="">Logout</button>
        </div>
        <div className="w-full h-full flex flex-col gap-5 ">
        <div className="w-full  flex flex-col">
            <div className="flex items-center gap-2">
              <IoChevronBackOutline />
              <p>Back</p>
            </div>
            <p className="text-sm text-gray-400">Onboarding</p>
            <Progress percent={50} showInfo={false} />
            <span className="text-[#4F7396] text-sm ">step 1 of 3</span>
          </div>
          <h2 className="text-xl font-bold">Preview</h2>
          <div className="flex gap-8 ">
            <div className=" border-b-2 border-blue-400 text-blue-400 font-medium">
              Personal Details
            </div>
            <div className="border-b-2 border-black  font-medium">
              Company Details
            </div>
          </div>
        </div>
        <div className="self-start rounded-md w-full p-2 h-full flex flex-col gap-5">
          <Image src={Company} width={100} height={100} />
          <div className="flex flex-col gap-2">
            <div className="flex  justify-start gap-40 border-b-2  border-gray-200 w-full">
              <span className="  flex flex-col gap-1 ">
                <span className="text-gray-400 ">Fisrt Name</span>
                <span>Abdullah</span>
              </span>
              <span className="flex flex-col gap-1 pl-4">
                <span className="text-gray-400 ">Fisrt Name</span>
                <span>Abdullah</span>
              </span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-200 w-full">
              <span className="text-gray-400 ">Gender</span>
              <span>Male</span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-200 w-full">
              <span className="text-gray-400 ">Phone Number</span>
              <span>91+ 9505934716</span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-200 w-full">
              <span className="text-gray-400 "> Date of Birth</span>
              <span>15/08/2002</span>
            </div>
          </div>
        </div>
        <Button className="mx-2 h-[40px] self-start  bg-blue-500 text-white font-semibold w-[80%]">
          Complete
        </Button>
      </div>
    </div>
  );
};

export default PreviewEmp;
