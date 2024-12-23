import React from "react";
import abstract from "/abstract.svg";
import small from "/small.svg";
import vector from "/vector.svg";
import upIcon from "/upIcon.svg";
import RightSideMain from "./RightSideMain";

const Signin = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="leftSide hidden md:flex border border-gray-300 h-screen w-full md:w-1/2 relative items-center justify-center">
          <div className="card relative">
            <div className="totalEmail border border-2-gray shadow-xl h-36 w-80 md:w-96 rounded-xl bg-white z-30">
              <div className="flex gap-1 items-center border-b-[1px] p-3">
                <img src={small} alt="" className="filter invert-0" />{" "}
                <p className="text-[#081735] text-sm">
                  AI to Detact & Autofix Bad Code
                </p>
              </div>
              <div className="flex justify-between gap-2 p-3 items-center">
                <div className="text-center">
                  <p className="text-lg font-bold ">30+</p>
                  <p className="text-sm">Language Support</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">10K+</p>
                  <p className="text-sm">Developer</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">100K+</p>
                  <p className="text-sm">Hours Saved</p>
                </div>
              </div>
            </div>
            <div className="card2 p-5 mt-[-20px] bg-white z-40 border border-2-gray rounded-xl shadow-lg h-36 w-56 md:w-64 absolute right-[-20px] md:right-[-43px]">
              <div className="flex justify-between">
                <img
                  src={vector}
                  alt=""
                  className="p-3 bg-[#9D90FA40] rounded-full"
                />
                <div>
                  <div className="flex justify-start">
                    <div>
                      <img src={upIcon} alt="" />
                    </div>
                    <p className="text-[#0049C6] text-sm font-bold">14%</p>
                  </div>
                  <div className="mt-[-5px]">
                    <p className="text-xs ">This Week</p>
                  </div>
                </div>
              </div>

              {/* Issues Fixed  */}
              <div className="flex flex-col mt-2">
                <p className="text-sm font-bold">Issues Fixed</p>
                <p className="text-2xl font-bold">500K+</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 ">
            <img src={abstract} alt="" />
          </div>
        </div>
        <RightSideMain />
      </div>
    </>
  );
};

export default Signin;
