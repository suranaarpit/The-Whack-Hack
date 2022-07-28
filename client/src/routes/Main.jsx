import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Navbar } from "../Components/Navbar";
import { Chat } from "../Pages/Chat";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";

const Main = () => {
  const chatuser = JSON.parse(localStorage.getItem("chatapp"));

  return (
    <div>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default Main;
