const highlights = [
  "MCA student specializing in Artificial Intelligence",
  "Building a career in DevOps and Cloud Engineering",
  "Hands-on with Linux, Git, GitHub Actions, Docker, Kubernetes, and AWS",
  "Focused on CI/CD pipelines, containerization, and cloud-native deployments",
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-[#E6501B]">01. ABOUT ME</p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Building reliable delivery workflows.
      </h2>

      <div className="mt-8 max-w-3xl rounded-xl border border-slate-800 bg-[#161b22] p-6">
        <p className="leading-8 text-slate-300">
          I am an MCA student building practical DevOps skills through hands-on
          projects. My focus is automating software delivery, containerizing
          applications, deploying workloads on Kubernetes, and learning AWS
          cloud fundamentals.
        </p>

        <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#E6501B]">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;