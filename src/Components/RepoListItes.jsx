import React, { useState } from "react";

const RepoListItes = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`flex gap-2 mt-3 items-center pl-4 p-2 rounded-md cursor-pointer ${
            activeIndex === index
              ? "bg-[#1570EF] text-white"
              : "bg-white text-black"
          }`}
        >
          <img src={item.icon} alt="" />
          <p className="text-base">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoListItes;
