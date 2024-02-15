import React from "react";
import Image from "next/image";
import { Button } from "antd";
const PreviewEmp = () => {
  return (
    <div className="w-screen  h-screen p-5 bg-gray-200 flex flex-wrap items-center justify-center gap-20 ">
      <div className="w-[40%] h-full  p-4 bg-[#E6F7FF] flex justify-center items-center rounded-3xl">
        <Image width={100} height={100} src="onboard.svg" className="w-full " />
      </div>
      <div className="flex flex-col gap-5 items-center  w-[40%] ">
        <div className="w-full h-full flex flex-col gap-5">
          <h2 className="text-xl font-bold">Preview</h2>
          <div className="flex gap-8 ">
            <div className=" border-b-2 border-blue-400 text-blue-400 font-medium">
              Personal Details
            </div>
            <div className="border-b-2 border-blue-400 text-blue-400 font-medium">
              Company Details
            </div>
          </div>
        </div>
        <div className="self-start rounded-md w-full p-2 h-full flex flex-col gap-5">
          <Image src="profile.svg" width={100} height={100} />
          <div className="flex flex-col gap-2">
            <div className="flex  justify-start gap-40 border-b-2  border-gray-500 w-full">
              <span className="  flex flex-col gap-1 ">
                <span className="text-gray-500 ">Fisrt Name</span>
                <span>Abdullah</span>
              </span>
              <span className="flex flex-col gap-1 pl-4">
                <span className="text-gray-500 ">Fisrt Name</span>
                <span>Abdullah</span>
              </span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-500 w-full">
              <span className="text-gray-500 ">Gender</span>
              <span>Male</span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-500 w-full">
              <span className="text-gray-500 ">Phone Number</span>
              <span>91+ 9505934716</span>
            </div>
            <div className="flex flex-col gap-1  border-b-2 border-gray-500 w-full">
              <span className="text-gray-500 "> Date of Birth</span>
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
