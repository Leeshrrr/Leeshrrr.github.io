"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function hasAward(award) {
  return award === true || award === "true" || award === "1" || award === 1;
}

export default function Project() {
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
        setProjects(sortedData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-feature-card"
          >
            <img
              src={`/images/${project.picture}`}
              alt={project.title}
              className="project-feature-image"
            />
            <div className="project-feature-body">
              <div className="project-feature-meta">
                <span className="project-chip">{project.year}</span>
                <span className="project-feature-type">{project.type}</span>
              </div>
              <h2 className="project-feature-title">{project.title}</h2>
              {hasAward(project.award) && (
                <p className="project-feature-award">award winner🏆</p>
              )}
              <p className="project-feature-description">{project.description_short}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
