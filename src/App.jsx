import React from "react";
import Signin from "./Components/Signin";
import Repository from "./Components/Repository";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Repository />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
