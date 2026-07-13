// src/components/Background.jsx
import { useEffect, useState, useRef } from 'react';
import { FaDocker, FaGithub, FaAws, FaLinux, FaCloud } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiHelm, SiGithubactions } from 'react-icons/si';
import './Background.css';

export default function Background() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const cursorRef = useRef({ x: -200, y: -200 });
  const requestRef = useRef(null);

  useEffect(() => {
    // 1. Optimized Scroll Tracking Loop
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 2. Smooth Interpolated Mouse Follower Loop
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const updateMouseFrame = () => {
      setMousePos((prev) => {
        const dx = cursorRef.current.x - prev.x;
        const dy = cursorRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.08, // Linear dampening speed coefficient
          y: prev.y + dy * 0.08,
        };
      });
      requestRef.current = requestAnimationFrame(updateMouseFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    requestRef.current = requestAnimationFrame(updateMouseFrame);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Parallax Layer Coordinates Multipliers
  const gridTransform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
  const layerSlowTransform = `translate3d(0, ${scrollY * 0.07}px, 0)`;
  const layerFastTransform = `translate3d(0, ${scrollY * 0.22}px, 0)`;

  return (
    <div className="bg-container fixed inset-0 w-full h-full pointer-events-none z-0">
      
      {/* Blueprint Grid Layer */}
      <div 
        className="blueprint-grid-mesh absolute inset-0 w-full h-[120%] will-change-transform"
        style={{ transform: gridTransform }}
      />

      {/* Edge Blur Glows */}
      <div className="ambient-glow-tr absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full will-change-transform" />
      <div className="ambient-glow-bl absolute bottom-0 left-0 w-[60vw] h-[60vw] rounded-full will-change-transform" />

      {/* Smooth Mouse Spotlight Ingress */}
      <div 
        className="absolute w-64 h-64 rounded-full pointer-events-none opacity-40 will-change-transform hidden md:block"
        style={{
          left: `${mousePos.x - 128}px`,
          top: `${mousePos.y - 128}px`,
          background: 'radial-gradient(circle, rgba(230, 80, 27, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Automated Deployment Pipeline Traffic Paths */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <path d="M -50,150 Q 200,60 450,220 T 900,120 T 1500,300" className="traffic-path" />
        <path d="M -50,150 Q 200,60 450,220 T 900,120 T 1500,300" className="traffic-pulse" />
        
        <path d="M 100,900 C 400,750 600,1100 900,850 G 1400,950" className="traffic-path" />
        <path d="M 100,900 C 400,750 600,1100 900,850 G 1400,950" className="traffic-pulse" />
      </svg>

      {/* Infrastructure Floating Symbols Layer */}
      <div className="absolute inset-0 w-full h-full will-change-transform" style={{ transform: layerSlowTransform }}>
        <div className="float-slow absolute top-[15%] left-[8%] opacity-[0.08] text-[#E6501B]"><FaDocker size={44} /></div>
        <div className="float-delayed absolute top-[40%] right-[12%] opacity-[0.09] text-[#E6501B]"><SiKubernetes size={52} /></div>
        <div className="float-slow absolute top-[70%] left-[15%] opacity-[0.08] text-[#E6501B]"><FaGithub size={40} /></div>
        <div className="float-delayed absolute top-[25%] right-[35%] opacity-[0.08] text-[#E6501B]"><FaAws size={48} /></div>
        <div className="float-slow absolute bottom-[15%] right-[22%] opacity-[0.09] text-[#E6501B]"><SiTerraform size={42} /></div>
        <div className="float-delayed absolute top-[55%] left-[45%] opacity-[0.07] text-[#E6501B]"><SiHelm size={46} /></div>
        <div className="float-slow absolute bottom-[40%] left-[8%] opacity-[0.08] text-[#E6501B]"><FaLinux size={38} /></div>
        <div className="float-delayed absolute top-[85%] right-[40%] opacity-[0.08] text-[#E6501B]"><SiGithubactions size={40} /></div>
        <div className="float-slow absolute top-[8%] left-[55%] opacity-[0.07] text-[#E6501B]"><FaCloud size={46} /></div>
      </div>

      {/* Floating System Terminal Command Outputs */}
      <div className="absolute inset-0 w-full h-full font-mono text-[11px] font-bold text-[#E6501B] tracking-wider select-none pointer-events-none will-change-transform opacity-[0.08]" style={{ transform: layerSlowTransform }}>
        <span className="absolute top-[12%] left-[40%] blur-[0.2px]">docker build -t app:latest .</span>
        <span className="absolute top-[32%] left-[75%] blur-[0.2px]">kubectl apply -f deployment.yaml</span>
        <span className="absolute top-[62%] left-[5%] blur-[0.2px]">terraform apply --auto-approve</span>
        <span className="absolute top-[82%] right-[15%] blur-[0.2px]">helm install stable/wordpress</span>
        <span className="absolute top-[48%] left-[22%] blur-[0.2px]">git push origin main</span>
        <span className="absolute bottom-[28%] left-[42%] blur-[0.2px]">aws eks update-kubeconfig --name cluster</span>
        <span className="absolute top-[22%] left-[15%] blur-[0.2px]">kubectl get pods -n production</span>
        <span className="absolute bottom-[8%] left-[18%] blur-[0.2px]">docker push registry.hub.docker.com</span>
      </div>

      {/* Floating Spatial Micro-Particles Layer */}
      <div className="absolute inset-0 w-full h-full will-change-transform" style={{ transform: layerFastTransform }}>
        <div className="particle-flash absolute top-[18%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#E6501B]/40 blur-[0.5px]" />
        <div className="particle-flash absolute top-[52%] left-[80%] w-1 h-1 rounded-full bg-[#E6501B]/50" />
        <div className="particle-flash absolute top-[78%] left-[30%] w-2 h-2 rounded-full bg-[#E6501B]/30 blur-[1px]" />
        <div className="particle-flash absolute top-[38%] left-[60%] w-1 h-1 rounded-full bg-[#E6501B]/60" />
        <div className="particle-flash absolute top-[88%] left-[70%] w-1.5 h-1.5 rounded-full bg-[#E6501B]/40" />
        <div className="particle-flash absolute top-[65%] left-[18%] w-1 h-1 rounded-full bg-[#E6501B]/50" />
      </div>

    </div>
  );
}