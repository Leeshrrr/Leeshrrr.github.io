"use client";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Publication from "./publication";
import Selected from "./selected";
import ".//styles.css"; // 引入样式
import Profile from "./profile";
import Header from "./header";
import Project from "./project";
import ProjectDetail from "./projectDetail";

function Home() {
  return (
    <>
      <Header />
      <Profile />
      <Selected />
      <Publication />
      <Project />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}
