import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import AboutPage from "./aboutus";
import FaqPage from "./faq";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);