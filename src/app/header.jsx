"use client";

import React, { useState, useEffect } from "react";
import "./styles.css"; // 引入 CSS 文件

const Header = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  // 读取 JSON 里的图片列表
  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  // 每3秒切换一次背景图
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <header
      className="header"
      style={{ backgroundImage: images.length > 0 ? `url(/images/header/${images[currentImage]})` : "none" }}
    >
      <div className="header-overlay"></div>
      <h1 className="header-title">Yechun Peng</h1>
    </header>
  );
};

export default Header;
