import React from "react";

const SaasListItem = ({ icon, title }) => {
  return (
    <>
      <div className="flex gap-2 w-96 justify-center items-center border border-gray-300 p-2 rounded-xl cursor-pointer">
        <img src={icon} alt="" />
        <p className="font-semibold text-md">{title}</p>
      </div>
    </>
  );
};

export default SaasListItem;
