import { useEffect, useRef, useState } from "react";

import {
  FaUser,
  FaGithub,
  FaCheckCircle,
  FaShieldAlt,
  FaDocker,
  FaBug,
  FaCloud,
  FaFlask,
} from "react-icons/fa";

import "./Architecture.css";

export default function DevSecOpsPipelineArchitecture() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="architecture-container relative w-full min-h-screen blueprint-bg text-gray-300 p-4 md:p-12 flex flex-col items-center select-none overflow-x-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-2xl md:text-4xl font-mono font-bold tracking-widest text-white uppercase">
          Kubernetes DevSecOps{" "}
          <span className="text-[#E6501B]">Pipeline</span>
        </h2>

        <p className="text-gray-400 mt-2 text-xs md:text-sm font-mono max-w-2xl">
          Automated CI/CD, Security Validation, Containerization,
          Kubernetes Deployment & Monitoring
        </p>
      </div>

      {/* Connection Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <marker
            id="devsecops-pipeline-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#E6501B" />
          </marker>
        </defs>

        {/* Developer → GitHub */}
        <Connector
          container={containerRef}
          from="developer"
          to="github"
          active={hoveredNode === "developer" || hoveredNode === "github"}
        />

        {/* GitHub → GitHub Actions */}
        <Connector
          container={containerRef}
          from="github"
          to="actions"
          active={hoveredNode === "github" || hoveredNode === "actions"}
        />

        {/* GitHub Actions → Unit Tests */}
        <Connector
          container={containerRef}
          from="actions"
          to="tests"
          active={hoveredNode === "actions" || hoveredNode === "tests"}
        />

        {/* GitHub Actions → Security Validation */}
        <Connector
          container={containerRef}
          from="actions"
          to="security"
          active={hoveredNode === "actions" || hoveredNode === "security"}
        />

        {/* Security Validation → Security Tools */}
        <Connector
          container={containerRef}
          from="security"
          to="semgrep"
          active={hoveredNode === "security" || hoveredNode === "semgrep"}
        />

        <Connector
          container={containerRef}
          from="security"
          to="gitleaks"
          active={hoveredNode === "security" || hoveredNode === "gitleaks"}
        />

        <Connector
          container={containerRef}
          from="security"
          to="dependency"
          active={hoveredNode === "security" || hoveredNode === "dependency"}
        />

        <Connector
          container={containerRef}
          from="security"
          to="sonarqube"
          active={hoveredNode === "security" || hoveredNode === "sonarqube"}
        />

        <Connector
          container={containerRef}
          from="security"
          to="checkov"
          active={hoveredNode === "security" || hoveredNode === "checkov"}
        />

        {/* Tests → Docker */}
        <Connector
          container={containerRef}
          from="tests"
          to="docker"
          active={hoveredNode === "tests" || hoveredNode === "docker"}
        />

        {/* Security Tools → Docker */}
        <Connector
          container={containerRef}
          from="semgrep"
          to="docker"
          active={hoveredNode === "semgrep" || hoveredNode === "docker"}
        />

        <Connector
          container={containerRef}
          from="gitleaks"
          to="docker"
          active={hoveredNode === "gitleaks" || hoveredNode === "docker"}
        />

        <Connector
          container={containerRef}
          from="dependency"
          to="docker"
          active={hoveredNode === "dependency" || hoveredNode === "docker"}
        />

        <Connector
          container={containerRef}
          from="sonarqube"
          to="docker"
          active={hoveredNode === "sonarqube" || hoveredNode === "docker"}
        />

        <Connector
          container={containerRef}
          from="checkov"
          to="docker"
          active={hoveredNode === "checkov" || hoveredNode === "docker"}
        />

        {/* Docker → Trivy */}
        <Connector
          container={containerRef}
          from="docker"
          to="trivy"
          active={hoveredNode === "docker" || hoveredNode === "trivy"}
        />

        {/* Trivy → GHCR */}
        <Connector
          container={containerRef}
          from="trivy"
          to="ghcr"
          active={hoveredNode === "trivy" || hoveredNode === "ghcr"}
        />

        {/* GHCR → Helm */}
        <Connector
          container={containerRef}
          from="ghcr"
          to="helm"
          active={hoveredNode === "ghcr" || hoveredNode === "helm"}
        />

        {/* Helm → Kubernetes */}
        <Connector
          container={containerRef}
          from="helm"
          to="kubernetes"
          active={hoveredNode === "helm" || hoveredNode === "kubernetes"}
        />

        {/* Kubernetes → Kubescape */}
        <Connector
          container={containerRef}
          from="kubernetes"
          to="kubescape"
          active={
            hoveredNode === "kubernetes" || hoveredNode === "kubescape"
          }
        />

        {/* Kubescape → Flask */}
        <Connector
          container={containerRef}
          from="kubescape"
          to="flask"
          active={hoveredNode === "kubescape" || hoveredNode === "flask"}
        />

        {/* Flask → Prometheus */}
        <Connector
          container={containerRef}
          from="flask"
          to="prometheus"
          active={hoveredNode === "flask" || hoveredNode === "prometheus"}
        />

        {/* Flask → Grafana */}
        <Connector
          container={containerRef}
          from="flask"
          to="grafana"
          active={hoveredNode === "flask" || hoveredNode === "grafana"}
        />
      </svg>

      {/* =========================
          PIPELINE CONTENT
      ========================== */}
      <div className="w-full max-w-5xl flex flex-col items-center space-y-16 z-10">

        {/* Developer → GitHub → GitHub Actions */}
        <div className="flex flex-col items-center w-full space-y-12">
          <NodeCard
            id="developer"
            title="Developer"
            subtitle="Local Commit / git push"
            Icon={FaUser}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="github"
            title="GitHub"
            subtitle="Source Repository"
            Icon={FaGithub}
            onHover={setHoveredNode}
            accent
          />

          <NodeCard
            id="actions"
            title="GitHub Actions"
            subtitle="CI/CD Orchestration"
            Icon={FaGithub}
            onHover={setHoveredNode}
            accent
          />
        </div>

        {/* Unit Tests + Security Validation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl justify-items-center">
          <NodeCard
            id="tests"
            title="Unit Tests"
            subtitle="Automated Test Suite"
            Icon={FaCheckCircle}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="security"
            title="Security Validation"
            subtitle="DevSecOps Security Gate"
            Icon={FaShieldAlt}
            onHover={setHoveredNode}
            accent
          />
        </div>

        {/* Security Tools */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl justify-items-center">

          <NodeCard
            id="semgrep"
            title="Semgrep"
            subtitle="SAST"
            Icon={FaShieldAlt}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="gitleaks"
            title="Gitleaks"
            subtitle="Secret Scan"
            Icon={FaShieldAlt}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="dependency"
            title="Dependency Check"
            subtitle="SCA"
            Icon={FaBug}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="sonarqube"
            title="SonarQube"
            subtitle="Code Quality"
            Icon={FaCheckCircle}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="checkov"
            title="Checkov"
            subtitle="IaC Security"
            Icon={FaShieldAlt}
            onHover={setHoveredNode}
          />
        </div>

        {/* Docker → Trivy → GHCR → Helm → Kubernetes */}
        <div className="flex flex-col items-center w-full space-y-12">

          <NodeCard
            id="docker"
            title="Docker Build"
            subtitle="Container Image"
            Icon={FaDocker}
            onHover={setHoveredNode}
            accent
          />

          <NodeCard
            id="trivy"
            title="Trivy"
            subtitle="Container Security Scan"
            Icon={FaBug}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="ghcr"
            title="GHCR"
            subtitle="GitHub Container Registry"
            Icon={FaCloud}
            onHover={setHoveredNode}
            accent
          />

          <NodeCard
            id="helm"
            title="Helm"
            subtitle="Kubernetes Package Manager"
            Icon={FaCloud}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="kubernetes"
            title="Kubernetes"
            subtitle="Container Orchestration"
            Icon={FaCloud}
            onHover={setHoveredNode}
            accent
          />

          <NodeCard
            id="kubescape"
            title="Kubescape"
            subtitle="Kubernetes Security"
            Icon={FaShieldAlt}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="flask"
            title="Flask App"
            subtitle="Application Workload"
            Icon={FaFlask}
            onHover={setHoveredNode}
            accent
          />
        </div>

        {/* Prometheus + Grafana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-xl justify-items-center">

          <NodeCard
            id="prometheus"
            title="Prometheus"
            subtitle="Metrics Collection"
            Icon={FaCloud}
            onHover={setHoveredNode}
          />

          <NodeCard
            id="grafana"
            title="Grafana"
            subtitle="Monitoring Dashboard"
            Icon={FaCloud}
            onHover={setHoveredNode}
            accent
          />
        </div>

      </div>
    </div>
  );
}

/* =========================================
   NODE CARD
========================================= */

function NodeCard({
  id,
  title,
  subtitle,
  Icon,
  onHover,
  accent = false,
}) {
  return (
    <div
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className={`glass-card w-full max-w-[170px] p-4 rounded-xl flex flex-col items-center text-center space-y-3 cursor-pointer relative z-10 ${
        accent
          ? "border-orange-500/40 bg-orange-950/10"
          : ""
      }`}
    >
      <div
        className={`p-2.5 rounded-lg ${
          accent
            ? "bg-[#E6501B] text-white"
            : "bg-gray-800 text-[#E6501B]"
        }`}
      >
        <Icon className="text-lg" />
      </div>

      <div className="w-full flex flex-col items-center">
        <h4 className="text-white font-mono font-semibold text-[11px] sm:text-xs leading-tight whitespace-normal break-words w-full">
          {title}
        </h4>

        <p className="text-gray-400 font-mono text-[9px] sm:text-[10px] leading-tight whitespace-normal break-words w-full mt-1.5">
          {subtitle}
        </p>
      </div>

      <div className="w-1 h-1 rounded-full bg-orange-500/40 animate-ping absolute top-2 right-2" />
    </div>
  );
}

/* =========================================
   CONNECTOR
========================================= */

function Connector({ container, from, to, active }) {
  const [coords, setCoords] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useEffect(() => {
    const updateCoordinates = () => {
      if (!container.current) return;

      const fromEl = document.getElementById(from);
      const toEl = document.getElementById(to);

      if (!fromEl || !toEl) return;

      const containerRect =
        container.current.getBoundingClientRect();

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const x1 =
        fromRect.left +
        fromRect.width / 2 -
        containerRect.left;

      const y1 =
        fromRect.bottom -
        containerRect.top +
        5;

      const x2 =
        toRect.left +
        toRect.width / 2 -
        containerRect.left;

      const y2 =
        toRect.top -
        containerRect.top -
        10;

      setCoords({
        x1,
        y1,
        x2,
        y2,
      });
    };

    updateCoordinates();

    window.addEventListener("resize", updateCoordinates);
    window.addEventListener("scroll", updateCoordinates);

    const timer = setTimeout(updateCoordinates, 300);

    return () => {
      window.removeEventListener(
        "resize",
        updateCoordinates
      );

      window.removeEventListener(
        "scroll",
        updateCoordinates
      );

      clearTimeout(timer);
    };
  }, [container, from, to]);

  if (coords.x1 === 0 && coords.y1 === 0) {
    return null;
  }

  const isVertical =
    Math.abs(coords.x1 - coords.x2) < 10;

  const pathD = isVertical
    ? `M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`
    : `M ${coords.x1} ${coords.y1}
       C ${coords.x1} ${(coords.y1 + coords.y2) / 2},
         ${coords.x2} ${(coords.y1 + coords.y2) / 2},
         ${coords.x2} ${coords.y2}`;

  return (
    <>
      <path
        d={pathD}
        className={`connection-line ${
          active ? "highlighted" : ""
        }`}
        markerEnd="url(#devsecops-pipeline-arrow)"
        fill="none"
      />

      <path
        d={pathD}
        className="pulse-flow"
        fill="none"
      />
    </>
  );
}