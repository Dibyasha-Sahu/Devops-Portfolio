import { useState } from "react";
import { FaGithub, FaChevronDown } from "react-icons/fa";
import { projects } from "../data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Section Label */}
      <p className="font-mono text-sm text-[#E6501B]">
        04. FEATURED PROJECTS
      </p>

      {/* Heading */}
      <h2 className="mt-2 text-3xl font-bold text-white">
        Projects that demonstrate my DevOps skills.
      </h2>

      {/* Project Grid */}
      <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-[#161b22] p-6 transition duration-300 hover:border-[#E6501B]/70"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} GitHub repository`}
                className="flex-shrink-0 text-xl text-slate-300 transition hover:text-[#E6501B]"
              >
                <FaGithub />
              </a>
            </div>

            {/* Description */}
            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-[#0d1117] px-3 py-1 font-mono text-xs text-[#ff8b66]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#E6501B] px-4 py-2 text-sm font-semibold text-[#E6501B] transition hover:bg-[#E6501B] hover:text-white"
              >
                View Project →
              </a>

              {/* View Details */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-[#E6501B] hover:text-white"
              >
                View Details
                <FaChevronDown className="text-xs" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;