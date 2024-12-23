import React from "react";
import database from "/database.svg";

const MainItems = ({ items }) => {
  return (
    <div className="flex flex-col mt-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full border-t border-[#E9EAEB] p-3 pb-0 hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            <p className="font-medium text-md lg:text-lg text-[#181D27]">
              {item.name}
            </p>
            <span className="border border-[#B2DDFF] text-xs bg-[#EFF8FF] px-2 py-1 text-[#175CD3] rounded-full">
              {item.tag}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-xs text-[#181D27] flex gap-2 items-center">
              {item.language}
              <span className="h-[5px] w-[5px] rounded-full bg-[#1570EF]"></span>
            </p>
            <div className="flex items-center">
              <img src={database} alt="" className="py-2" />
              <p className="px-2 py-2 text-xs text-[#181D27]">{item.size} KB</p>
            </div>
            <div className="text-xs py-2 text-[#181D27]">{item.updated}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainItems;
