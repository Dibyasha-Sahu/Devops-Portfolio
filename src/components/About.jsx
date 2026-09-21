function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      {/* Section Header */}
      <div className="mb-7">
        <p className="font-mono text-sm text-[#E6501B]">
          01. ABOUT ME
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          From Deployments to Infrastructure
        </h2>
      </div>

      {/* Main About Card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#161b22]">

        {/* Top accent line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E6501B] to-transparent opacity-70" />

        <div className="grid md:grid-cols-[155px_1fr]">

          {/* LEFT - JOURNEY */}
          <div className="border-b border-slate-800 p-5 md:border-b-0 md:border-r">
            <p className="font-mono text-xs text-[#E6501B]">
              MY JOURNEY
            </p>

            <div className="mt-6 space-y-6">

              {/* Step 1 */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-[#E6501B] bg-[#161b22]" />

                <div className="absolute left-[5px] top-4 h-12 w-px bg-slate-700" />

                <p className="font-mono text-[10px] text-slate-500">
                  01
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Code
                </p>

                <p className="mt-1 text-xs leading-4 text-slate-500">
                  Building applications
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-[#E6501B] bg-[#161b22]" />

                <div className="absolute left-[5px] top-4 h-12 w-px bg-slate-700" />

                <p className="font-mono text-[10px] text-slate-500">
                  02
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Deploy
                </p>

                <p className="mt-1 text-xs leading-4 text-slate-500">
                  Automating delivery
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-[#E6501B] bg-[#161b22]" />

                <p className="font-mono text-[10px] text-slate-500">
                  03
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Operate
                </p>

                <p className="mt-1 text-xs leading-4 text-slate-500">
                  Monitor & secure
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT - STORY */}
          <div className="p-6 md:p-8">

            {/* Question */}
            <div className="mb-6">
              <p className="font-mono text-xs text-[#E6501B]">
                // THE QUESTION THAT STARTED IT
              </p>

              <h3 className="mt-2 max-w-3xl text-lg font-semibold leading-7 text-white md:text-xl">
                How does an application go from{" "}
                <span className="text-[#E6501B]">code</span> to a reliable
                running system?
              </h3>
            </div>

            {/* Story */}
            <div className="max-w-4xl space-y-4 text-sm leading-6 text-slate-300 md:text-base md:leading-7">

              <p>
                My journey into DevOps started with a simple curiosity:
                <span className="font-semibold text-white">
                  {" "}how does an application go from code to a reliable
                  running system?
                </span>
              </p>

              <p>
                Since then, I’ve been building hands-on projects around{" "}
                <span className="font-semibold text-white">
                  AWS, Linux, Docker, Kubernetes, GitHub Actions, and CI/CD
                </span>
                , learning how to automate deployments, manage
                containerized workloads, and troubleshoot infrastructure.
              </p>

              <p>
                Today, I’m focused on growing as a{" "}
                <span className="font-semibold text-[#E6501B]">
                  DevOps Engineer
                </span>
                , while exploring{" "}
                <span className="font-semibold text-white">
                  Terraform, Prometheus, and Grafana
                </span>{" "}
                to build a stronger foundation in Infrastructure as Code
                and observability.
              </p>

            </div>

            {/* Bottom Cards */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">

              {/* Automate */}
              <div className="rounded-lg border border-slate-800 bg-[#0d1117] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#E6501B]/60">
                <p className="font-mono text-[10px] text-[#E6501B]">
                  01
                </p>

                <h4 className="mt-1 text-sm font-semibold text-white">
                  Automate
                </h4>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  CI/CD pipelines and automated workflows
                </p>
              </div>

              {/* Deploy */}
              <div className="rounded-lg border border-slate-800 bg-[#0d1117] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#E6501B]/60">
                <p className="font-mono text-[10px] text-[#E6501B]">
                  02
                </p>

                <h4 className="mt-1 text-sm font-semibold text-white">
                  Deploy
                </h4>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Containers and Kubernetes workloads
                </p>
              </div>

              {/* Observe */}
              <div className="rounded-lg border border-slate-800 bg-[#0d1117] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#E6501B]/60">
                <p className="font-mono text-[10px] text-[#E6501B]">
                  03
                </p>

                <h4 className="mt-1 text-sm font-semibold text-white">
                  Observe
                </h4>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Monitoring, metrics and observability
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;