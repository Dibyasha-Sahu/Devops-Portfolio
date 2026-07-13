// src/App.jsx
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";
import { TypeAnimation } from "react-type-animation";

import { FaLinux, FaDocker, FaAws } from "react-icons/fa";
import { SiKubernetes, SiGithubactions } from "react-icons/si";

// 1. Premium Background Import Added Here
import Background from "./components/Background";

function App() {
  return (
    <>
      {/* 2. Background Mounted First at the Root Level */}
      <Background />
      
      <Navbar />

      <main id="home" className="min-h-screen bg-transparent text-[#f0f6fc] relative z-10">

        {/* Hero Section */}
        <FadeInSection>
          <section className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.4fr_0.6fr]">

            {/* Left Side */}
            <div>
              <p className="font-mono text-sm text-[#E6501B]">
                Hi, my name is
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
                Dibyasha Sahu.
              </h1>

              <TypeAnimation
                sequence={[
                  "Junior Cloud & DevOps Engineer",
                  999999,
                ]}
                wrapper="h2"
                speed={50}
                repeat={0}
                cursor={true}
                className="mt-4 block text-2xl font-semibold text-slate-400 sm:text-4xl"
              />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Passionate about building reliable CI/CD pipelines,
                containerized applications, and cloud-native infrastructure.
                I enjoy automating deployments and continuously improving
                software delivery using Linux, GitHub Actions, Docker,
                Kubernetes, and AWS.
              </p>

              {/* Tech Stack */}
              <div className="mt-10 flex flex-wrap gap-3">

                <span className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#161b22] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-[#E6501B] hover:text-white">
                  <FaLinux className="text-[#E6501B] text-lg" />
                  Linux
                </span>

                <span className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#161b22] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-[#E6501B] hover:text-white">
                  <FaDocker className="text-[#E6501B] text-lg" />
                  Docker
                </span>

                <span className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#161b22] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-[#E6501B] hover:text-white">
                  <SiKubernetes className="text-[#E6501B] text-lg" />
                  Kubernetes
                </span>

                <span className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#161b22] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-[#E6501B] hover:text-white">
                  <FaAws className="text-[#E6501B] text-lg" />
                  AWS
                </span>

                <span className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#161b22] px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-[#E6501B] hover:text-white">
                  <SiGithubactions className="text-[#E6501B] text-lg" />
                  GitHub Actions
                </span>

              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden rounded-2xl border border-[#E6501B]/40 bg-[#161b22] p-2 shadow-2xl shadow-[#E6501B]/20 transition duration-300 hover:scale-105">
                <img
                  src="/profile.jpg"
                  alt="Dibyasha Sahu"
                  className="h-[430px] w-[320px] rounded-2xl object-cover object-top"
                />
              </div>
            </div>

          </section>
        </FadeInSection>

        {/* About */}
        <FadeInSection>
          <About />
        </FadeInSection>

        {/* Skills */}
        <FadeInSection>
          <Skills />
        </FadeInSection>

        {/* Projects */}
        <FadeInSection>
          <Projects />
        </FadeInSection>

        {/* Certifications */}
        <FadeInSection>
          <Certifications />
        </FadeInSection>

        {/* Contact */}
        <FadeInSection>
          <Contact />
        </FadeInSection>

      </main>
    </>
  );
}

export default App;