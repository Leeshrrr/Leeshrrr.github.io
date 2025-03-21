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
      <h1 className="title">Publication</h1>
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
                {item.author.split(/(Yechun Peng)/g).map((part, index) =>
                  part === "Yechun Peng" ? (
                    <span key={index} className="highlight-author">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>

              <p className="item-text">{item.conference}</p>

              {/* 处理 link 和 material，只有当它们存在时才显示 */}
              {(item.link || item.material) && (
    <p className="item-text">
            {item.year && (
<span className="year-badge">{item.year}</span>
                )}
      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
          Link
        </a>
      )}
      {item.link && item.material && " | "}
      {item.material && (
        <a href={item.material} target="_blank" rel="noopener noreferrer" className="item-link">
          Material
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


