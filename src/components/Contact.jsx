import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-[#E6501B]">06. CONTACT</p>

      <div className="mt-3 rounded-2xl border border-slate-800 bg-[#161b22] px-6 py-12 text-center md:px-12">
        <p className="font-mono text-sm text-[#ff8b66]">
          LET&apos;S CONNECT
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Ready to contribute to your next deployment.
        </h2>

       <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
        I build practical DevOps projects around CI/CD, containerization, and
        Kubernetes deployments. I am ready to contribute, learn quickly, and
        work with teams building reliable cloud-native systems.
       </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="https://www.linkedin.com/in/dibyasha-sahu-0810432a6/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#E6501B] hover:text-[#ff8b66]"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/Dibyasha-Sahu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#E6501B] hover:text-[#ff8b66]"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      <footer className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Dibyasha Sahu. Built with React, Vite, and
        Tailwind CSS.
      </footer>
    </section>
  );
}

export default Contact;