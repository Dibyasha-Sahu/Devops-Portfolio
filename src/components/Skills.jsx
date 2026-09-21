import {
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiKubernetes,
  SiLinux,
  SiPython,
  SiPrometheus,
  SiGrafana,
  SiTerraform,
  SiTrivy,
} from "react-icons/si";

import {
  FaShieldAlt,
  FaCode,
  FaKey,
  FaSearch,
} from "react-icons/fa";

import { VscTerminalBash } from "react-icons/vsc";

const skillGroups = [
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },

  {
    title: "Cloud & Automation",
    skills: [
      {
        name: "AWS",
        icon: () => <span className="font-bold">AWS</span>,
      },
      { name: "Bash", icon: VscTerminalBash },
      { name: "Python", icon: SiPython },
      { name: "Terraform", icon: SiTerraform },
    ],
  },

  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
    ],
  },

  {
    title: "Security & DevSecOps",
    skills: [
      { name: "Trivy", icon: SiTrivy },
      { name: "Semgrep", icon: FaCode },
      { name: "Gitleaks", icon: FaKey },
      { name: "SonarQube", icon: FaSearch },
      { name: "Checkov", icon: FaShieldAlt },
      { name: "Kubescape", icon: FaShieldAlt },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-[#E6501B]">
        03. TECH STACK
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Tools I work with.
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-800 bg-[#161b22] p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {group.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full border border-[#E6501B]/50 bg-[#E6501B]/10 px-4 py-2 text-sm font-medium text-[#ff8b66]"
                  >
                    <Icon className="text-base" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;