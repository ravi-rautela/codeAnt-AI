import React, { useState } from "react";
import RepoLeft from "./RepoLeft";
import RepoRight from "./RepoRight";

const Repository = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex gap-2">
        <RepoLeft isOpen={isOpen} toggleMenu={toggleMenu} />
        <RepoRight isOpen={isOpen} />
      </div>
    </>
  );
};

export default Repository;
