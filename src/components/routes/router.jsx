import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar";
import { GetBooksCon } from "../../containers/GetBooksCon";
import { WaliCon } from "../../containers/WaliCon";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GetBooksCon />} />
        <Route path="/helper" element={<WaliCon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
