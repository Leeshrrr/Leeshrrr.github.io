"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

function getYouTubeEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
  } catch (error) {
    console.error("Invalid YouTube URL:", error);
  }

  return "";
}

function hasAward(award) {
  return award === true || award === "true" || award === "1" || award === 1;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/project.json", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setProjects(json))
      .catch((error) => console.error("Error loading JSON:", error))
      .finally(() => setLoading(false));
  }, []);

  const project = useMemo(
    () => projects.find((item) => String(item.id) === String(id)),
    [id, projects]
  );

  const embedUrl = getYouTubeEmbedUrl(project?.video);

  if (loading) {
    return (
      <div className="container">
        <p className="project-detail-loading">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container project-detail-shell">
        <Link to="/" className="project-back-link">
          ← Back to Home
        </Link>
        <h1 className="project-detail-title">Project not found</h1>
      </div>
    );
  }

  const awardSentence = hasAward(project.award) && project.award_intro
    ? `<p class="project-award-note">This work received ${project.award_intro}.</p>`
    : "";

  return (
    <div className="container project-detail-shell">
      <Link to="/" className="project-back-link">
        ← Back to Home
      </Link>

      <div className="project-detail-hero">
        <div className="project-detail-copy">
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
      </div>

      <div
        className="project-detail-content"
        dangerouslySetInnerHTML={{
          __html: `${project.description || ""}${awardSentence}`,
        }}
      />

      {(project.link || embedUrl) && (
        <div className="project-detail-extras">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-link"
            >
              Visit Project
            </a>
          )}

          {embedUrl && (
            <div className="project-video-frame">
              <iframe
                src={embedUrl}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
