import Image from "next/image";
import { Button, Progress } from "antd";
import { IoChevronBackOutline } from "react-icons/io5";
const PreviewCompany = () => {
  return (
    <div className="w-screen  h-screen p-2 bg-gray-50 flex flex-wrap items-center justify-center gap-10 leading-7 ">
      <div className="w-[40%] h-full  p-4 bg-[#E6F7FF] flex justify-center items-center rounded-3xl">
        <Image width={100} height={100} src="onboard.svg" className="w-full " />
      </div>
      <div className="flex flex-col gap-1 items-center  w-[40%] relative leading-8">
        <div className="flex  items-center justify-evenly p-1 gap-1 border border-blue-500 text-blue-500 group hover:text-white btn hover:bg-blue-500 w-[8vw] absolute rounded-sm
         right-2 top-1 cursor-pointer">
          <Image width={15} height={15} src="Logout.svg" className="group-hover:bg-white" />
          <button className="">Logout</button>
        </div>
        <div className="w-full ">
          <div className="w-full  flex flex-col">
            <div className="flex items-center gap-2">
              <IoChevronBackOutline />
              <p>Back</p>
            </div>
            <p className="text-sm text-gray-400">Onboarding</p>
            <Progress percent={50} showInfo={false} />
            <span className="text-[#4F7396] text-sm ">step 1 of 3</span>
          </div>

          <h2 className="text-lg font-semibold">Preview</h2>
          <div className="flex gap-8 ">
            <div className=" border-b-2 border-black text-sm font-medium">
              Personal Details
            </div>
            <div className="border-b-2  text-sm  border-blue-400 text-blue-400 font-medium">
              Company Details
            </div>
          </div>
        </div>
        <div className="self-start rounded-md w-full p-2 h-full flex flex-col gap-2">
          <div className="w-[7vw] h-[10vh] bg-white rounded-md">
            <Image
              src="company.svg"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex  justify-start gap-40 border-b  border-gray-200 w-full">
              <span className="  flex flex-col  ">
                <span className="text-gray-400 text-xs">
                  Legal Company Name
                </span>
                <span className="text-xs">Synectiks pvt Ltd</span>
              </span>
              <span className="flex flex-col  pl-4">
                <span className="text-gray-400 text-xs">
                  Company Email Address
                </span>
                <span className="text-xs">hr@stnectiks.com</span>
              </span>
            </div>
            <div className="flex flex-col   border-b border-gray-200 w-full">
              <span className="text-gray-400 text-xs">Phone Number</span>
              <span className="text-xs">91+ 9505934716</span>
            </div>
            <div className="flex flex-col   border-b border-gray-200 w-full">
              <span className="text-gray-400 text-xs">Address Line 1</span>
              <span className="text-xs">Synectiks, Level 6, N Heights</span>
            </div>
            <div className="flex flex-col   border-b border-gray-200 w-full">
              <span className="text-gray-400 text-xs"> Address Line 2</span>
              <span className="text-xs">California</span>
            </div>
            <div className="flex  justify-start gap-48 border-b  border-gray-200 w-full">
              <span className="  flex flex-col  ">
                <span className="text-gray-400 text-xs">Country</span>
                <span className="text-xs">INDIA</span>
              </span>
              <span className="flex flex-col  pl-2">
                <span className="text-gray-400 text-xs">State</span>
                <span className="text-xs">TELANGANA</span>
              </span>
            </div>
            <div className="flex  justify-start gap-40  border-b border-gray-200 w-full">
              <span className="  flex flex-col  ">
                <span className="text-gray-400 text-xs">City</span>
                <span className="text-xs">HYDERABAD</span>
              </span>
              <span className="flex flex-col  pl-4">
                <span className="text-gray-400 text-xs">Zipcode</span>
                <span className="text-xs">500053</span>
              </span>
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

export default PreviewCompany;
