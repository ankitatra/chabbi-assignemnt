import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../Component/Register";
import Dashbord from "../Component/dashbord";
const Allroutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/dashboard" element={<Dashbord />} />
    </Routes>
  );
};

export default Allroutes;
