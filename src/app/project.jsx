"use client";

import React, { useEffect, useState } from "react";
import "./styles.css"; // 引入独立 CSS 文件

export default function Project () {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        const sortedData = json.sort((a, b) => Number(b.id) - Number(a.id)); 
        setProjects(json)})
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
<div className="container">
<h1 className="title">Projects</h1>
    <div className="project-container">
      {projects.map((project) => (
        <div
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={`/images/${project.picture}`} alt={project.title} className="project-image" />
          {/* 黑色半透明遮罩层 */}
          <div className="overlay"></div>

          {/* 项目内容 */}
          <div className="project-content">
            <h2 className="project-title">{project.title}</h2>
            
            {/* Tag 列表 */}
            <div className="project-tags">
              {project.tag.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <p className="project-intro">{project.intro}</p>
            <div className="project-footer">
              <span className="year-badge">{project.year}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="item-link">
                    Link
                  </a>
                )}
              </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
