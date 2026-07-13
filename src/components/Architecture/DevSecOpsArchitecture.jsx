// src/components/Architecture/DevSecOpsArchitecture.jsx
import { useState, useEffect, useRef } from 'react';
import { FaUser, FaGithub, FaDocker, FaShieldAlt, FaBug, FaCloud, FaRocket, FaHeartbeat } from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';
import './Architecture.css';

export default function DevSecOpsArchitecture() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const handleResize = () => forceUpdate(prev => prev + 1);
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(() => forceUpdate(prev => prev + 1), 500);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const isConnected = (fromId, toId) => {
    if (hoveredNode === fromId || hoveredNode === toId) {
      if (fromId === 'gha' && ['build', 'dep', 'sec'].includes(toId)) return true;
      if (['build', 'dep', 'sec'].includes(fromId) && toId === 'dbuild') return true;
      
      const pairs = [
        ['dev', 'repo'], ['repo', 'pr'], ['pr', 'gha'],
        ['dbuild', 'trivy'], ['trivy', 'dhub'], ['dhub', 'deploy'], ['deploy', 'health']
      ];
      return pairs.some(([f, t]) => f === fromId && t === toId);
    }
    return false;
  };

  return (
    <div ref={containerRef} className="architecture-container w-full min-h-screen blueprint-bg text-gray-300 p-4 md:p-12 flex flex-col items-center select-none overflow-x-hidden">
      <div className="text-center mb-16 z-10">
        <h2 className="text-2xl md:text-4xl font-mono font-bold tracking-widest text-white uppercase">
          DevSecOps Pipeline <span className="text-[#E6501B]">Topology</span>
        </h2>
        <p className="text-gray-400 mt-2 text-xs md:text-sm font-mono">Automated CI/CD Isolation & Deep Vulnerability Scanning Pipeline</p>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#E6501B" />
          </marker>
        </defs>
        
        <Connector container={containerRef} from="dev" to="repo" active={isConnected('dev', 'repo')} />
        <Connector container={containerRef} from="repo" to="pr" active={isConnected('repo', 'pr')} />
        <Connector container={containerRef} from="pr" to="gha" active={isConnected('pr', 'gha')} />
        <Connector container={containerRef} from="gha" to="build" active={isConnected('gha', 'build')} />
        <Connector container={containerRef} from="gha" to="dep" active={isConnected('gha', 'dep')} />
        <Connector container={containerRef} from="gha" to="sec" active={isConnected('gha', 'sec')} />
        <Connector container={containerRef} from="build" to="dbuild" active={isConnected('build', 'dbuild')} />
        <Connector container={containerRef} from="dep" to="dbuild" active={isConnected('dep', 'dbuild')} />
        <Connector container={containerRef} from="sec" to="dbuild" active={isConnected('sec', 'dbuild')} />
        <Connector container={containerRef} from="dbuild" to="trivy" active={isConnected('dbuild', 'trivy')} />
        <Connector container={containerRef} from="trivy" to="dhub" active={isConnected('trivy', 'dhub')} />
        <Connector container={containerRef} from="dhub" to="deploy" active={isConnected('dhub', 'deploy')} />
        <Connector container={containerRef} from="deploy" to="health" active={isConnected('deploy', 'health')} />
      </svg>

      <div className="w-full max-w-4xl flex flex-col items-center space-y-16 z-10">
        <div className="flex flex-col items-center w-full space-y-12">
          <NodeCard id="dev" title="Developer" subtitle="Local Commit Workspace" Icon={FaUser} onHover={setHoveredNode} />
          <NodeCard id="repo" title="GitHub Repository" subtitle="Source Control Plane" Icon={FaGithub} onHover={setHoveredNode} />
          <NodeCard id="pr" title="Pull Request" subtitle="Automated Merge Hooks" Icon={FaGithub} onHover={setHoveredNode} accent />
          <NodeCard id="gha" title="GitHub Actions" subtitle="Orchestration Workflow" Icon={SiGithubactions} onHover={setHoveredNode} />
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-3xl justify-items-center py-4">
          <NodeCard id="build" title="Build & Test" subtitle="Automation Suite" Icon={SiGithubactions} onHover={setHoveredNode} />
          <NodeCard id="dep" title="Dependency Review" subtitle="Supply Chain Info" Icon={FaShieldAlt} onHover={setHoveredNode} />
          <NodeCard id="sec" title="Secret Scan" subtitle="Leakage Discovery" Icon={FaShieldAlt} onHover={setHoveredNode} />
        </div>

        <div className="flex flex-col items-center w-full space-y-12">
          <NodeCard id="dbuild" title="Docker Build" subtitle="Multi-Stage Image Build" Icon={FaDocker} onHover={setHoveredNode} />
          <NodeCard id="trivy" title="Trivy Security Scan" subtitle="CVE Vulnerabilities" Icon={FaBug} onHover={setHoveredNode} accent />
          <NodeCard id="dhub" title="Docker Hub" subtitle="Artifact Base Registry" Icon={FaCloud} onHover={setHoveredNode} />
          <NodeCard id="deploy" title="Deploy Simulator" subtitle="Rolling Update Engine" Icon={FaRocket} onHover={setHoveredNode} />
          <NodeCard id="health" title="Health Check" subtitle="Liveness Probes" Icon={FaHeartbeat} onHover={setHoveredNode} />
        </div>
      </div>
    </div>
  );
}

function NodeCard({ id, title, subtitle, Icon, onHover, accent = false }) {
  return (
    <div
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className={`glass-card w-full max-w-[150px] sm:max-w-[170px] p-4 rounded-xl flex flex-col items-center text-center space-y-3 cursor-pointer relative z-10 ${
        accent ? 'border-orange-500/40 bg-orange-950/10' : ''
      }`}
    >
      <div className={`p-2.5 rounded-lg shrink-0 ${accent ? 'bg-[#E6501B] text-white' : 'bg-gray-800 text-[#E6501B]'}`}>
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

function Connector({ container, from, to, active }) {
  const [coords, setCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const updateCoordinates = () => {
      if (!container.current) return;
      const fromEl = document.getElementById(from);
      const toEl = document.getElementById(to);

      if (fromEl && toEl) {
        const cRect = container.current.getBoundingClientRect();
        const fRect = fromEl.getBoundingClientRect();
        const tRect = toEl.getBoundingClientRect();

        const x1 = fRect.left + fRect.width / 2 - cRect.left;
        const y1 = fRect.bottom - cRect.top + 4; // Tiny structural push forward
        const x2 = tRect.left + tRect.width / 2 - cRect.left;
        const y2 = tRect.top - cRect.top - 12; // Compensates for arrowhead spacing bounds

        setCoords({ x1, y1, x2, y2 });
      }
    };

    updateCoordinates();
  }, [container, from, to]);

  if (coords.x1 === 0 && coords.y1 === 0) return null;

  const isVertical = Math.abs(coords.x1 - coords.x2) < 10;
  const pathD = isVertical
    ? `M ${coords.x1} ${coords.y1} L ${coords.x2} ${coords.y2}`
    : `M ${coords.x1} ${coords.y1} C ${coords.x1} ${(coords.y1 + coords.y2) / 2}, ${coords.x2} ${(coords.y1 + coords.y2) / 2}, ${coords.x2} ${coords.y2}`;

  return (
    <>
      <path d={pathD} className={`connection-line ${active ? 'highlighted' : ''}`} markerEnd="url(#arrow)" fill="none" />
      <path d={pathD} className="pulse-flow" fill="none" />
    </>
  );
}