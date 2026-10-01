import {
  FaUser,
  FaGithub,
  FaFlask,
  FaDatabase,
  FaBrain,
  FaDocker,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiHelm,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import "./RAGInternalDocsDetails.css";

const ArchitectureNode = ({
  icon: Icon,
  title,
  subtitle,
  variant = "",
}) => (
  <div className={`architecture-node ${variant}`}>
    <div className="architecture-icon">
      <Icon />
    </div>

    <h4>{title}</h4>
    <p>{subtitle}</p>
  </div>
);

const VerticalConnector = () => (
  <div className="vertical-connector">
    <span className="connector-arrow">↓</span>
  </div>
);

const BranchConnector = () => (
  <div className="branch-connector">
    <div className="branch-stem" />
    <div className="branch-left">
      <span />
    </div>
    <div className="branch-right">
      <span />
    </div>
  </div>
);

const SecurityBranchConnector = () => (
  <div className="security-branch-connector">
    <div className="security-branch-line center" />
    <div className="security-branch-line left" />
    <div className="security-branch-line right" />
  </div>
);

const MergeConnector = () => (
  <div className="merge-connector">
    <div className="merge-left" />
    <div className="merge-right" />
    <div className="merge-center">
      <span>↓</span>
    </div>
  </div>
);

function RAGInternalDocsDetails() {
  return (
    <div className="rag-details">

      {/* =====================================================
          01. PROJECT OVERVIEW
      ====================================================== */}
      <section className="rag-section">
        <div className="rag-section-title">
          01. PROJECT OVERVIEW
        </div>

        <div className="rag-overview">
          <div>
            <h3 className="rag-overview-title">
              Production-Style RAG + DevOps Platform
            </h3>

            <p className="rag-overview-text">
              Built an internal documentation assistant that answers
              technical questions using Retrieval-Augmented Generation
              with CI/CD, Kubernetes, security checks and observability.
            </p>
          </div>

          <div className="rag-tech-list">
            <span className="rag-tech-tag">FastAPI</span>
            <span className="rag-tech-tag">Streamlit</span>
            <span className="rag-tech-tag">ChromaDB</span>
            <span className="rag-tech-tag">Groq</span>
            <span className="rag-tech-tag">Docker</span>
            <span className="rag-tech-tag">Kubernetes</span>
            <span className="rag-tech-tag">Helm</span>
            <span className="rag-tech-tag">Prometheus</span>
            <span className="rag-tech-tag">Grafana</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          02. RAG PIPELINE
      ====================================================== */}
      <section className="rag-section">
        <div className="rag-section-title">
          02. RAG PIPELINE
        </div>

        <div className="architecture">

          <ArchitectureNode
            icon={FaUser}
            title="User"
            subtitle="Technical Question"
          />

          <VerticalConnector />

          <ArchitectureNode
            icon={FaFlask}
            title="Streamlit"
            subtitle="User Interface"
          />

          <VerticalConnector />

          <ArchitectureNode
            icon={FaFlask}
            title="FastAPI"
            subtitle="RAG API"
            variant="compact"
          />

          <BranchConnector />

          <div className="architecture-branch">

            <ArchitectureNode
              icon={FaDatabase}
              title="ChromaDB"
              subtitle="Vector Search"
              variant="compact"
            />

            <ArchitectureNode
              icon={FaBrain}
              title="Groq"
              subtitle="LLM Response"
              variant="compact"
            />

          </div>

          <MergeConnector />

          <ArchitectureNode
            icon={FaBrain}
            title="Answer + Sources"
            subtitle="Grounded response"
          />

        </div>
      </section>


      {/* =====================================================
          03. DEVOPS WORKFLOW
      ====================================================== */}
      <section className="rag-section">
        <div className="rag-section-title">
          03. DEVOPS WORKFLOW
        </div>

        <div className="architecture">

          <ArchitectureNode
            icon={FaGithub}
            title="GitHub"
            subtitle="Source Code"
          />

          <VerticalConnector />

          <ArchitectureNode
            icon={FaGithub}
            title="GitHub Actions"
            subtitle="CI/CD Pipeline"
          />

          <SecurityBranchConnector />

          <div className="architecture-branch">

            <ArchitectureNode
              icon={FaCheckCircle}
              title="Tests"
              subtitle="pytest + Ruff"
              variant="compact"
            />

            <ArchitectureNode
              icon={FaShieldAlt}
              title="Security"
              subtitle="Dependency Checks"
              variant="compact"
            />

          </div>

          <MergeConnector />

          <ArchitectureNode
            icon={FaDocker}
            title="Docker"
            subtitle="Build Container Image"
          />

          <VerticalConnector />

          <ArchitectureNode
            icon={FaDocker}
            title="GHCR"
            subtitle="Container Registry"
          />

          <VerticalConnector />

          <ArchitectureNode
            icon={SiHelm}
            title="Helm"
            subtitle="Application Deployment"
          />

          <VerticalConnector />

          <ArchitectureNode
            icon={SiKubernetes}
            title="Kubernetes"
            subtitle="Running Application"
          />

        </div>
      </section>


      {/* =====================================================
          04. SECURITY & OBSERVABILITY
      ====================================================== */}
      <section className="rag-section">
        <div className="rag-section-title">
          04. SECURITY & OBSERVABILITY
        </div>

        <div className="architecture">

          <ArchitectureNode
            icon={SiKubernetes}
            title="Kubernetes"
            subtitle="Running Workloads"
          />

          <VerticalConnector />

          <SecurityBranchConnector />

          <div className="architecture-branch">

            <ArchitectureNode
              icon={FaShieldAlt}
              title="Security Controls"
              subtitle="Secrets • API Keys • Resource Limits"
              variant="compact"
            />

            <ArchitectureNode
              icon={FaChartLine}
              title="Application Metrics"
              subtitle="/metrics endpoint"
              variant="compact"
            />

          </div>

          <MergeConnector />

          <div className="architecture-branch">

            <ArchitectureNode
              icon={SiPrometheus}
              title="Prometheus"
              subtitle="Metrics Collection"
              variant="compact"
            />

            <ArchitectureNode
              icon={SiGrafana}
              title="Grafana"
              subtitle="Dashboards & Monitoring"
              variant="compact"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          05. KUBERNETES FEATURES
      ====================================================== */}
      <section className="rag-section">
        <div className="rag-section-title">
          05. KUBERNETES & PLATFORM FEATURES
        </div>

        <div className="rag-feature-panel">

          <h4 className="rag-feature-title">
            DEPLOYMENT & RELIABILITY
          </h4>

          <div className="rag-feature-grid">

            <div className="rag-feature">
              <FaCheckCircle />
              <span>Startup, readiness & liveness probes</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>Resource requests & limits</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>Kubernetes Secrets & ConfigMaps</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>PersistentVolumeClaim storage</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>NGINX Ingress</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>Helm-based deployment</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>Prometheus ServiceMonitor</span>
            </div>

            <div className="rag-feature">
              <FaCheckCircle />
              <span>Container images published to GHCR</span>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          06. OBSERVABILITY METRICS
      ====================================================== */}
      <section className="rag-section">
        <div className="rag-section-title">
          06. OBSERVABILITY
        </div>

        <div className="rag-metrics">

          <div className="rag-metric">
            <strong>3</strong>
            <span>RAG Requests</span>
          </div>

          <div className="rag-metric">
            <strong>746</strong>
            <span>Total Tokens</span>
          </div>

          <div className="rag-metric">
            <strong>0</strong>
            <span>Errors</span>
          </div>

          <div className="rag-metric">
            <strong>UP</strong>
            <span>Prometheus Target</span>
          </div>

        </div>

        <div className="rag-note">
          Custom application metrics track request count, latency,
          token usage and errors through Prometheus and Grafana.
        </div>
      </section>

    </div>
  );
}

export default RAGInternalDocsDetails;