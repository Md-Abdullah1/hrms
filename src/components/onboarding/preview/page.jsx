import React from "react";
import Image from "next/image";
const PreviewEmp = () => {
  return (
    <div className="w-screen  h-screen p-5 bg-gray-200 flex flex-wrap items-center justify-center gap-3 ">
      <div className="w-[45%] h-full  p-4 bg-[#E6F7FF] flex justify-center items-center rounded-3xl">
        <Image width={100} height={100} src="onboard.svg" className="w-full " />
      </div>
      <div className="flex flex-col gap-3 items-center  w-[40%] ">
        <h2 className="text-xl font-bold">Preview</h2>
        <div className="flex gap-3 ">
          <div className="p-3 border-b-2 border-blue-400 text-blue-400 font-medium">
            Personal Details
          </div>
          <div className="p-3 border-b-2 border-blue-400 text-blue-400 font-medium">
            Company Details
          </div>
        </div>
        <div className="self-start rounded-md w-[200px] h-[200px]">
          <Image src="profile.svg" width={100} height={100} />
          <div>
            <div className="flex flex-col gap-2  border-b-2 border-gray-500">
                <span>
                    </span><span></span>
            </div>
            <div className="flex flex-col gap-2  border-b-2 border-gray-500">
                <span>
                    </span><span></span>
            </div>
            <div className="flex flex-col gap-2  border-b-2 border-gray-500">
                <span>
                    </span><span></span>
            </div>
            <div className="flex flex-col gap-2  border-b-2 border-gray-500">
                <span>
                    </span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewEmp;
