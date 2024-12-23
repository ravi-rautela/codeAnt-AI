import React, { useState } from "react";
import small from "/small.svg";
import home from "/home.svg";
import code from "/code.svg";
import cloud from "/cloud.svg";
import menu from "/menu.svg";
import set from "/setting.svg";
import phone from "/Phone.svg";
import logout from "/logout.svg";
import hamburger from "/hamburger.svg";
import cross from "/cross.svg";
import RepoListItes from "./RepoListItes";

const RepoLeft = ({ isOpen, toggleMenu }) => {

  const items = [
    { icon: home, title: "Repositories" },
    { icon: code, title: "AI Code Review" },
    { icon: cloud, title: "Cloud Security" },
    { icon: menu, title: "How to Use" },
    { icon: set, title: "Settings" },
  ];

  return (
    <>
      {/* Header for Mobile */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b border-[#D5D7DA] fixed top-0 left-0 right-0 z-10">
        <div className="flex gap-2 items-center">
          <img src={small} alt="CodeAnt AI" />
          <p className="text-2xl text-[#181D27]">CodeAnt AI</p>
        </div>
        <img
          src={isOpen ? cross : hamburger}
          alt="Menu"
          className="cursor-pointer w-6 h-6"
          onClick={toggleMenu}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col justify-between gap-2 p-4 w-full md:w-[20%] bg-white border border-[#E9EAEB] md:static fixed top-16 left-0 right-0 z-10`}
      >
        <div className="w-full flex flex-col items-center">
          <div className="hidden md:flex gap-2 items-center">
            <img src={small} alt="CodeAnt AI" />
            <p className="text-2xl text-[#181D27]">CodeAnt AI</p>
          </div>
          <select className="mt-4 p-2 border border-gray-300 rounded outline-none w-full">
            <option value="utkarshDhairyapa">Utkarsh Dhairyapawar</option>
            <option value="ravirautela">Ravi Rautela</option>
            <option value="sumit">Sumit Kumar</option>
          </select>
          <main className="w-full mt-4">
            <RepoListItes items={items} />
          </main>
        </div>
        <footer className="flex flex-col gap-2 p-4 md:p-0">
          <div className="flex gap-1 cursor-pointer">
            <img src={phone} alt="Support" />
            <p>Support</p>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <img src={logout} alt="Logout" />
            <p>Logout</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RepoLeft;
