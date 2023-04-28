import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar";
import { GetBooksCon } from "../../containers/GetBooksCon";
import { WaliCon } from "../../containers/WaliCon";
import { FreeBooksCon } from "../../containers/FreeBooksCon";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GetBooksCon />} />
        <Route path="/helper" element={<WaliCon />} />
        <Route path="/free" element={<FreeBooksCon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
