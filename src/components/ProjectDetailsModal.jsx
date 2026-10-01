import { useEffect } from "react";
import { FaTimes, FaGithub } from "react-icons/fa";

import DevSecOpsDetails from "./DevSecOpsDetails";
import KubernetesDetails from "./KubernetesDetails";
import DevSecOpsPipelineDetails from "./DevSecOpsPipelineDetails";
import RAGInternalDocsDetails from "./RAGInternalDocsDetails";

import "./ProjectDetailsModal.css";

function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    // Prevent the page behind the modal from scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  const renderDetails = () => {
    switch (project.title) {
      case "GitHub Actions DevSecOps Capstone":
        return <DevSecOpsDetails />;

      case "WordPress & MySQL on Kubernetes":
        return <KubernetesDetails />;

      case "Kubernetes DevSecOps Pipeline":
        return <DevSecOpsPipelineDetails />;

      case "RAG Internal Documentation Assistant":
        return <RAGInternalDocsDetails />;

      default:
        return null;
    }
  };

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="project-modal">
        {/* HEADER */}
        <div className="project-modal-header">
          <div className="project-modal-heading">
            <span className="project-modal-label">
              PROJECT DETAILS
            </span>

            <h2>{project.title}</h2>
          </div>

          <div className="project-modal-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-modal-github"
                aria-label="View GitHub repository"
              >
                <FaGithub />
              </a>
            )}

            <button
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* ORANGE DIVIDER */}
        <div className="project-modal-divider" />

        {/* DETAILS */}
        <div className="project-modal-content">
          {renderDetails()}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;