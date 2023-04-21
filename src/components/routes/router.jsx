import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetBooks } from "../GetBooks"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetBooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
