import React from "react";
import refresh from "/refresh.svg";
import plus from "/plus.svg";
import search from "/search.svg";
import MainItems from "../MainItems";

const RepoRight = ({ isOpen }) => {
  const items = [
    {
      name: "design-system",
      tag: "Public",
      language: "React",
      size: "7320",
      updated: "Uploaded 1 day ago",
    },
    {
      name: "codeant-ci-app",
      tag: "Private",
      language: "Javascript",
      size: "5871",
      updated: "Uploaded 2 days ago",
    },
    {
      name: "analytics-dashboard",
      tag: "Private",
      language: "Python",
      size: "5421",
      updated: "Uploaded 5 days ago",
    },
    {
      name: "mobile-app",
      tag: "Public",
      language: "Swift",
      size: "3096",
      updated: "Uploaded 3 days ago",
    },
    {
      name: "e-commerce-platform",
      tag: "Private",
      language: "Java",
      size: "6210",
      updated: "Uploaded 6 days ago",
    },
    {
      name: "blog-website",
      tag: "Public",
      language: "HTML/CSS",
      size: "1876",
      updated: "Uploaded 4 days ago",
    },
    {
      name: "social-network",
      tag: "Private",
      language: "PHP",
      size: "5432",
      updated: "Uploaded 7 days ago",
    },
  ];

  return (
    <div
      className={`p-4 w-full md:w-[80%] md:bg-[#FAFAFA] mt-16 md:mt-0 transition-opacity duration-300 ${
        isOpen ? "opacity-50 pointer-events-none" : "opacity-200 "
      }`}
    >
      <div className="h-full bg-white border border-[#E9EAEB] rounded-md">
        <div className="p-3">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <p className="text-3xl font-bold">Repositories</p>
              <p className="text-sm text-gray-700">33 total repositories</p>
            </div>
            <div className="flex gap-2 items-center mt-3 md:mt-0">
              <div className="flex gap-2 items-center border rounded-md border-[#D5D7DA] py-2 px-3 cursor-pointer">
                <img src={refresh} alt="Refresh" />
                <p>Refresh All</p>
              </div>
              <div className="flex gap-2 items-center border bg-[#1570EF] rounded-md border-[#E9EAEB] py-2 px-3 cursor-pointer">
                <img src={plus} alt="Add" />
                <p className="text-white">Add Repository</p>
              </div>
            </div>
          </div>
          {/* Search Button */}
          <div className="pl-3 flex w-full md:w-80 items-center gap-2 mt-4 border border-[#D5D7DA] rounded-md p-2">
            <img src={search} alt="Search" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="outline-none w-full "
            />
          </div>
        </div>
        {/* Main Section */}
        <div>
          <MainItems items={items} />
        </div>
      </div>
    </div>
  );
};

export default RepoRight;
