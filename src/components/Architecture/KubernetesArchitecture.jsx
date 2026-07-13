// src/components/Architecture/KubernetesArchitecture.jsx
import { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaWordpress, FaHdd, FaDatabase } from 'react-icons/fa';
import { SiKubernetes, SiMysql } from 'react-icons/si';
import './Architecture.css';

export default function KubernetesArchitecture() {
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
      if (fromId === 'wp-deploy' && ['wp-pod1', 'wp-pod2'].includes(toId)) return true;
      if (['wp-pod1', 'wp-pod2'].includes(fromId) && toId === 'hd-svc') return true;
      
      const pairs = [
        ['browser', 'np-svc'], ['np-svc', 'wp-deploy'],
        ['hd-svc', 'mysql-ss'], ['mysql-ss', 'mysql-pod'],
        ['mysql-pod', 'pvc'], ['pvc', 'storage']
      ];
      return pairs.some(([f, t]) => f === fromId && t === toId);
    }
    return false;
  };

  return (
    <div ref={containerRef} className="architecture-container w-full min-h-screen blueprint-bg text-gray-300 p-4 md:p-12 flex flex-col items-center select-none overflow-x-hidden">
      <div className="text-center mb-16 z-10">
        <h2 className="text-2xl md:text-4xl font-mono font-bold tracking-widest text-white uppercase">
          Kubernetes Cluster <span className="text-[#E6501B]">Infrastructure</span>
        </h2>
        <p className="text-gray-400 mt-2 text-xs md:text-sm font-mono">High-Availability WordPress Deployment + Stateful Orchestration Mesh</p>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <marker id="k8s-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#E6501B" />
          </marker>
        </defs>

        <Connector container={containerRef} from="browser" to="np-svc" active={isConnected('browser', 'np-svc')} />
        <Connector container={containerRef} from="np-svc" to="wp-deploy" active={isConnected('np-svc', 'wp-deploy')} />
        <Connector container={containerRef} from="wp-deploy" to="wp-pod1" active={isConnected('wp-deploy', 'wp-pod1')} />
        <Connector container={containerRef} from="wp-deploy" to="wp-pod2" active={isConnected('wp-deploy', 'wp-pod2')} />
        <Connector container={containerRef} from="wp-pod1" to="hd-svc" active={isConnected('wp-pod1', 'hd-svc')} />
        <Connector container={containerRef} from="wp-pod2" to="hd-svc" active={isConnected('wp-pod2', 'hd-svc')} />
        <Connector container={containerRef} from="hd-svc" to="mysql-ss" active={isConnected('hd-svc', 'mysql-ss')} />
        <Connector container={containerRef} from="mysql-ss" to="mysql-pod" active={isConnected('mysql-ss', 'mysql-pod')} />
        <Connector container={containerRef} from="mysql-pod" to="pvc" active={isConnected('mysql-pod', 'pvc')} />
        <Connector container={containerRef} from="pvc" to="storage" active={isConnected('pvc', 'storage')} />
      </svg>

      <div className="w-full max-w-4xl flex flex-col items-center space-y-16 z-10">
        <NodeCard id="browser" title="Client Web Browser" subtitle="Public HTTP Traffic" Icon={FaGlobe} onHover={setHoveredNode} />
        <NodeCard id="np-svc" title="NodePort Service" subtitle="Port Ingress Layer" Icon={SiKubernetes} onHover={setHoveredNode} accent />
        <NodeCard id="wp-deploy" title="WordPress Deployment" subtitle="Replica Set Controller" Icon={SiKubernetes} onHover={setHoveredNode} />

        <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-xl justify-items-center py-2">
          <NodeCard id="wp-pod1" title="WordPress Pod 1" subtitle="Runtime Instance" Icon={FaWordpress} onHover={setHoveredNode} />
          <NodeCard id="wp-pod2" title="WordPress Pod 2" subtitle="Runtime Instance" Icon={FaWordpress} onHover={setHoveredNode} />
        </div>

        <NodeCard id="hd-svc" title="Headless Service" subtitle="Pod Network Domain" Icon={SiKubernetes} onHover={setHoveredNode} accent />
        <NodeCard id="mysql-ss" title="MySQL StatefulSet" subtitle="Ordered Unique Allocator" Icon={SiKubernetes} onHover={setHoveredNode} />
        <NodeCard id="mysql-pod" title="MySQL Pod" subtitle="Primary Core Node" Icon={SiMysql} onHover={setHoveredNode} />
        <NodeCard id="pvc" title="Persistent Volume Claim" subtitle="Abstract Allocation Link" Icon={FaHdd} onHover={setHoveredNode} />
        <NodeCard id="storage" title="Persistent Storage" subtitle="AWS EBS / Cloud Layer" Icon={FaDatabase} onHover={setHoveredNode} accent />
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
        const y1 = fRect.bottom - cRect.top + 4;
        const x2 = tRect.left + tRect.width / 2 - cRect.left;
        const y2 = tRect.top - cRect.top - 12; // Precise layout offset stop for K8s bounds

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
      <path d={pathD} className={`connection-line ${active ? 'highlighted' : ''}`} markerEnd="url(#k8s-arrow)" fill="none" />
      <path d={pathD} className="pulse-flow" fill="none" />
    </>
  );
}