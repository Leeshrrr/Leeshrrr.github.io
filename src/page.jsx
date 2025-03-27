"use client";

import React, { useEffect, useState } from "react";
import Publication from "./publication";
import ".//styles.css"; // 引入样式
import Project from "./project";
import Profile from "./profile";
import Header from "./header";

export default function Home() {
  return(
  <>
  <Header></Header>
  <Profile></Profile>
  <Publication></Publication>
  <Project></Project>
  </>
 )
};


