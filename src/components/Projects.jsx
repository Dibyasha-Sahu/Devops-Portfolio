import { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { projects } from "../data/projects";
import DevSecOpsDetails from "./DevSecOpsDetails";
import KubernetesDetails from "./KubernetesDetails";
import DevSecOpsPipelineDetails from "./DevSecOpsPipelineDetails";

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (title) => {
    setOpenProject(openProject === title ? null : title);
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-[#E6501B]">
        04. FEATURED PROJECTS
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Projects that demonstrate my DevOps skills.
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 items-start">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-[#161b22] p-6 transition duration-300 hover:border-[#E6501B]/70"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-slate-300 hover:text-[#E6501B]"
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
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#E6501B] px-4 py-2 text-sm font-semibold text-[#E6501B] transition hover:bg-[#E6501B] hover:text-white"
              >
                View Project →
              </a>

              <button
                onClick={() => toggleProject(project.title)}
                className="flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-[#E6501B] hover:text-white"
              >
                {openProject === project.title ? (
                  <>
                    Hide Details <FaChevronUp />
                  </>
                ) : (
                  <>
                    View Details <FaChevronDown />
                  </>
                )}
              </button>
            </div>

            {/* DevSecOps */}
            {project.title === "GitHub Actions DevSecOps Capstone" &&
              openProject === project.title && (
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <DevSecOpsDetails />
                </div>
            )}

            {/* Kubernetes */}
            {project.title === "WordPress & MySQL on Kubernetes" &&
              openProject === project.title && (
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <KubernetesDetails />
                </div>
            )}

            {/* Kubernetes DevSecOps Pipeline */}
            {project.title === "Kubernetes DevSecOps Pipeline" &&
              openProject === project.title && (
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <DevSecOpsPipelineDetails />
                </div>
            )}

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;