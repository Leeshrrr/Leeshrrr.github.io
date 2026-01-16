"use client";

import React, { useEffect, useState } from "react";
import ".//styles.css"; // 引入样式

export default function Publication() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/publication.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        // 按 id 进行排序（确保 id 为数字）
        const sortedData = json.sort((a, b) => Number(b.id) - Number(a.id));
        setData(sortedData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">All Publications</h1>
      <div className="list-container">
        {data.map((item) => (
          <div key={item.id} className="list-item">
            {/* 图片 */}
            <img
              src={`/images/${item.picture}`}
              alt={item.title}
              className="item-image"
            />
            {/* 右侧文本信息 */}
            <div className="item-info">
              <h2 className="item-title">{item.title}</h2>
              
              {/* 处理 Author 字段，"Yechun Peng" 加粗变色 */}
              <p className="item-text">
                {item.author
                  .split(/(Yechun Peng\*?)/g)
                  .map((part, index) =>
                    part === "Yechun Peng" || part === "Yechun Peng*" || part === "Yechun Peng†" ? (
                      <span key={index} className="highlight-author">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
              </p>

              <p className="item-text">{item.conference}</p>

              {/* 处理 paper / Explorer / material / presentation / demo */}
              {(item.paper ||
                item.explorer ||
                item.material ||
                item.presentation ||
                item.demo) && (
                <p className="item-text">
                  {item.year && <span className="year-badge">{item.year}</span>}

                  {item.paper && (
                    <a
                      href={item.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Paper
                    </a>
                  )}

                  {item.paper &&
                    (item.explorer ||
                      item.material ||
                      item.presentation ||
                      item.demo) &&
                    " | "}

                  {item.explorer && (
                    <a
                      href={item.explorer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Explorer
                    </a>
                  )}

                  {item.explorer &&
                    (item.material || item.presentation || item.demo) &&
                    " | "}

                  {item.material && (
                    <a
                      href={item.material}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Material
                    </a>
                  )}

                  {item.material && (item.presentation || item.demo) && " | "}

                  {item.presentation && (
                    <a
                      href={item.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Presentation
                    </a>
                  )}

                  {item.presentation && item.demo && " | "}

                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      Demo
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
