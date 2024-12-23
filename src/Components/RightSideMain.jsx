import React, { useState } from "react";
import small from "/small.svg";

import SaasLIst from "./SaasLIst";
import SelfItemList from "./SelfItemList";
const RightSideMain = () => {
  const [active, setActive] = useState("saas");
  return (
    <>
      <div className="rightSide h-screen w-full flex flex-col justify-center md:w-1/2 pt-40 pb-36 lg:p-2">
        <div className="h-full flex flex-col justify-center gap-5 items-center border-2 border-gray-100 rounded-md p-3 w-full ">
          <div className="flex gap-3">
            <img src={small} alt="codeAnt AI" />
            <p className="font-light text-3xl">CodeAnt AI</p>
          </div>
          <div>
            <p className="font-semibold text-3xl md:text-3xl lg:text-4xl text-[#181D27]">
              Welcome to CodeAnt AI
            </p>
          </div>
          <div className="harizontalTab w-full">
            <div className="flex cursor-pointer">
              <div
                className={`border border-2-gray p-2 rounded-md w-full text-center ${
                  active === "saas" ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setActive("saas")}
              >
                SAAS
              </div>
              <div
                className={`border border-2-gray p-2 rounded-md w-full text-center ${
                  active === "self-hosted" ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setActive("self-hosted")}
              >
                Self Hosted
              </div>
            </div>
          </div>
          <hr className="h-[2px] w-full bg-gray-100" />
          {active === "saas" && <SaasLIst />}
          {active === "self-hosted" && <SelfItemList />}
        </div>
        <p className="text-center text-md mt-3 md:mt-3 lg:mt-5 ">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy.</span>{" "}
        </p>
      </div>
    </>
  );
};

export default RightSideMain;
