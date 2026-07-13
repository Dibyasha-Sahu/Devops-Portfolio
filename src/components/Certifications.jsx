import { FaAws, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    provider: "IBM | Coursera",
    issued: "Issued May 2026",
    icon: FaCertificate,
    description:
      "Completed a 15-course professional certificate covering DevOps, Linux, Git, Docker, Kubernetes, CI/CD, security, automation, and cloud-native software engineering.",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/HVFXSJTQNILV",
  },
  {
    title: "DevOps and AI on AWS Specialization",
    provider: "AWS | Coursera",
    issued: "Issued May 2026",
    icon: FaAws,
    description:
      "Completed a 3-course specialization covering DevOps practices, CI/CD for generative AI applications, and AIOps on AWS.",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/IZYLJU53O13W",
  },
];

const achievements = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    provider: "AWS Training & Certification",
    completed: "Completed March 6, 2026",
    description:
      "Built foundational AWS Cloud knowledge and hands-on experience with compute, networking, databases, security, and basic solution building using AWS services.",
    certificate:
      "https://www.credly.com/badges/6f1284da-68d9-416d-bfff-9779ed47abd6/public_url",
  },
  {
    title: "AWS Cloud Quest: Solutions Architect",
    provider: "AWS Training & Certification",
    completed: "Completed March 30, 2026",
    description:
      "Gained hands-on experience designing secure, fault-tolerant, and highly available AWS solutions using a broad range of AWS services.",
    certificate:
      "https://www.credly.com/badges/5438854f-c0b6-4e49-8252-8484c867db3e/public_url",
  },
];

function CertificationCard({ certificate }) {
  const Icon = certificate.icon;

  return (
    <article className="flex flex-col rounded-xl border border-slate-800 bg-[#161b22] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E6501B]/70">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-[#E6501B]/10 p-3 text-2xl text-[#ff8b66]">
          <Icon />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {certificate.title}
          </h3>

          <p className="mt-1 text-sm text-[#ff8b66]">
            {certificate.provider}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {certificate.issued}
          </p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-300">
        {certificate.description}
      </p>

      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[#E6501B] px-4 py-2 text-sm font-semibold text-[#E6501B] transition hover:bg-[#E6501B] hover:text-white"
      >
        View Certificate <FaExternalLinkAlt className="text-xs" />
      </a>
    </article>
  );
}

function AchievementCard({ achievement }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-800 bg-[#161b22] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E6501B]/70">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-[#E6501B]/10 p-3 text-2xl text-[#ff8b66]">
          <FaAws />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {achievement.title}
          </h3>

          <p className="mt-1 text-sm text-[#ff8b66]">
            {achievement.provider}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {achievement.completed}
          </p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-300">
        {achievement.description}
      </p>

      <a
        href={achievement.certificate}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[#E6501B] px-4 py-2 text-sm font-semibold text-[#E6501B] transition hover:bg-[#E6501B] hover:text-white"
      >
        View Credential <FaExternalLinkAlt className="text-xs" />
      </a>
    </article>
  );
}

function Certifications() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-[#E6501B]">
        04. CERTIFICATIONS
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Certifications and continuous learning.
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {certifications.map((certificate) => (
          <CertificationCard
            key={certificate.title}
            certificate={certificate}
          />
        ))}
      </div>

      <div className="mt-16">
        <p className="font-mono text-sm text-[#E6501B]">
          05. AWS ACHIEVEMENTS
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          AWS Cloud Quest achievements.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;