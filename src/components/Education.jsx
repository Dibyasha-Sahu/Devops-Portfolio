import {
  FaSchool,
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa6";

const education = [
  {
    year: "2019",
    level: "10th",
    title: "Secondary Education",
    institution: "Vikash Convent School",
    icon: FaSchool,
    quote: "Built my foundation.",
  },
  {
    year: "2021",
    level: "12th",
    title: "Higher Secondary Education",
    institution: "St. Xavier High School",
    icon: FaGraduationCap,
    quote: "Explored new possibilities.",
  },
  {
    year: "2024",
    level: "BCA",
    title: "Bachelor of Computer Applications",
    institution: "MPC Autonomous College",
    icon: FaLaptopCode,
    quote: "Turned curiosity into skills.",
  },
  {
    year: "2026",
    level: "MCA",
    title: "Master of Computer Applications",
    institution: "Parul University",
    specialization: "Artificial Intelligence",
    icon: FaBrain,
    quote: "Building for a bigger tomorrow.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-6 py-12"
    >
      {/* ========================= */}
      {/* SECTION HEADING */}
      {/* ========================= */}

      <div className="mb-6">
        <p className="font-mono text-sm text-[#E6501B]">
          02. EDUCATION
        </p>

        <h2 className="mt-1 text-3xl font-bold text-white">
          Academic Journey
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Every milestone has been a step forward in building the
          skills and mindset I have today.
        </p>
      </div>

      {/* ========================= */}
      {/* MAIN EDUCATION CARD */}
      {/* ========================= */}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#161b22]">

        {/* ========================= */}
        {/* CARD HEADER */}
        {/* ========================= */}

        <div className="flex items-start justify-between px-5 pt-5 md:px-6">
          <div>
            <p className="font-mono text-xs text-[#E6501B]">
              &gt; A JOURNEY OF LEARNING
            </p>

            <p className="mt-1 text-sm text-slate-400">
              From school to university, each step shaped who I am.
            </p>
          </div>

          <div className="hidden text-right md:block">
            <p className="font-mono text-xs italic text-slate-500">
              Same learner,
            </p>

            <p className="font-mono text-xs italic text-slate-500">
              bigger goals...
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* JOURNEY AREA */}
        {/* ========================= */}

        <div className="relative px-5 pb-6 pt-2 md:px-6">

          <div className="relative h-36 md:h-40">

            {/* ========================= */}
            {/* SVG ROAD + PERSON */}
            {/* ========================= */}

            <svg
              className="absolute left-0 top-0 h-full w-full"
              viewBox="0 0 1000 150"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* ========================= */}
              {/* JOURNEY PATH */}
              {/* ========================= */}

              <path
                id="journeyPath"
                d="
                  M 30 95
                  C 110 120, 160 120, 240 90
                  C 320 60, 370 60, 450 92
                  C 530 120, 580 120, 660 90
                  C 740 60, 790 60, 860 92
                  C 910 112, 950 90, 980 50
                "
                stroke="#0d1117"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* ========================= */}
              {/* ORANGE DASHED ROAD */}
              {/* ========================= */}

              <path
                d="
                  M 30 95
                  C 110 120, 160 120, 240 90
                  C 320 60, 370 60, 450 92
                  C 530 120, 580 120, 660 90
                  C 740 60, 790 60, 860 92
                  C 910 112, 950 90, 980 50
                "
                stroke="#E6501B"
                strokeWidth="2"
                strokeDasharray="9 9"
                strokeLinecap="round"
              />

              {/* ========================= */}
              {/* MOVING PERSON */}
              {/* ========================= */}

              <g>

                {/* Person glow */}
                <circle
                  cx="0"
                  cy="0"
                  r="18"
                  fill="#E6501B"
                  opacity="0.12"
                />

                {/* Head */}
                <circle
                  cx="0"
                  cy="-10"
                  r="4"
                  fill="#E6501B"
                />

                {/* Body */}
                <line
                  x1="0"
                  y1="-5"
                  x2="0"
                  y2="7"
                  stroke="#E6501B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Left arm */}
                <line
                  x1="0"
                  y1="-2"
                  x2="-6"
                  y2="4"
                  stroke="#E6501B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Right arm */}
                <line
                  x1="0"
                  y1="-2"
                  x2="6"
                  y2="-6"
                  stroke="#E6501B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Left leg */}
                <line
                  x1="0"
                  y1="7"
                  x2="-5"
                  y2="15"
                  stroke="#E6501B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Right leg */}
                <line
                  x1="0"
                  y1="7"
                  x2="6"
                  y2="14"
                  stroke="#E6501B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* ========================= */}
                {/* WALKING ANIMATION */}
                {/* ========================= */}

                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  rotate="auto"
                  calcMode="linear"
                  keyPoints="
                    0;
                    0.17;
                    0.17;
                    0.42;
                    0.42;
                    0.64;
                    0.64;
                    0.86;
                    0.86
                  "
                  keyTimes="
                    0;
                    0.15;
                    0.25;
                    0.40;
                    0.50;
                    0.65;
                    0.75;
                    0.90;
                    1
                  "
                >
                  <mpath href="#journeyPath" />
                </animateMotion>

              </g>

              {/* ========================= */}
              {/* MILESTONE 1 — 2019 */}
              {/* ========================= */}

              <g>
                <circle
                  cx="200"
                  cy="105"
                  r="14"
                  fill="#0d1117"
                  stroke="#E6501B"
                  strokeWidth="2"
                />

                <circle
                  cx="200"
                  cy="105"
                  r="4"
                  fill="#E6501B"
                />
              </g>

              {/* ========================= */}
              {/* MILESTONE 2 — 2021 */}
              {/* ========================= */}

              <g>
                <circle
                  cx="450"
                  cy="92"
                  r="14"
                  fill="#0d1117"
                  stroke="#E6501B"
                  strokeWidth="2"
                />

                <circle
                  cx="450"
                  cy="92"
                  r="4"
                  fill="#E6501B"
                />
              </g>

              {/* ========================= */}
              {/* MILESTONE 3 — 2024 */}
              {/* ========================= */}

              <g>
                <circle
                  cx="660"
                  cy="90"
                  r="14"
                  fill="#0d1117"
                  stroke="#E6501B"
                  strokeWidth="2"
                />

                <circle
                  cx="660"
                  cy="90"
                  r="4"
                  fill="#E6501B"
                />
              </g>

              {/* ========================= */}
              {/* MILESTONE 4 — 2026 */}
              {/* ========================= */}

              <g>
                <circle
                  cx="860"
                  cy="92"
                  r="14"
                  fill="#0d1117"
                  stroke="#E6501B"
                  strokeWidth="2"
                />

                <circle
                  cx="860"
                  cy="92"
                  r="4"
                  fill="#E6501B"
                />
              </g>
            </svg>

            {/* ========================= */}
            {/* MILESTONE NUMBERS */}
            {/* ========================= */}

            <div className="absolute left-[19%] top-[105px] font-mono text-[10px] text-slate-600">
              01
            </div>

            <div className="absolute left-[44%] top-[91px] font-mono text-[10px] text-slate-600">
              02
            </div>

            <div className="absolute left-[65%] top-[90px] font-mono text-[10px] text-slate-600">
              03
            </div>

            <div className="absolute left-[85%] top-[91px] font-mono text-[10px] text-slate-600">
              04
            </div>
          </div>

          {/* ========================= */}
          {/* EDUCATION CARDS */}
          {/* ========================= */}

          <div className="grid gap-4 md:grid-cols-4">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className={`education-card education-card-${index + 1} rounded-xl border border-slate-800 bg-[#0d1117] p-4`}
                >

                  {/* Year + Level */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-[#E6501B]">
                      {item.year}
                    </span>

                    <span className="rounded-md border border-slate-700 px-2 py-1 font-mono text-[10px] text-slate-400">
                      {item.level}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6501B]/20 bg-[#E6501B]/10">
                    <Icon className="text-base text-[#E6501B]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-base font-bold leading-tight text-white">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="mt-2 text-sm text-slate-400">
                    {item.institution}
                  </p>

                  {/* Specialization */}
                  {item.specialization && (
                    <p className="mt-3 text-sm font-medium leading-tight text-[#ff8b66]">
                      Specialization: {item.specialization}
                    </p>
                  )}

                  {/* Quote */}
                  <p className="mt-4 font-mono text-[10px] italic text-slate-600">
                    "{item.quote}"
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================= */}
          {/* BOTTOM LABEL */}
          {/* ========================= */}

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-800" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-slate-600">
              SAME LEARNER / HIGHER GOALS
            </span>

            <div className="h-px w-12 bg-slate-800" />
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* CARD GLOW ANIMATION */}
      {/* ========================= */}

      <style>{`
        .education-card {
          animation-duration: 20s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        /* 2019 — 2 second glow */
        .education-card-1 {
          animation-name: educationGlow1;
        }

        @keyframes educationGlow1 {
          0%,
          15% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }

          15%,
          25% {
            border-color: #E6501B;
            box-shadow:
              0 0 12px rgba(230, 80, 27, 0.18),
              0 0 28px rgba(230, 80, 27, 0.10);
            transform: translateY(-4px);
          }

          25%,
          100% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }
        }

        /* 2021 — 2 second glow */
        .education-card-2 {
          animation-name: educationGlow2;
        }

        @keyframes educationGlow2 {
          0%,
          40% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }

          40%,
          50% {
            border-color: #E6501B;
            box-shadow:
              0 0 12px rgba(230, 80, 27, 0.18),
              0 0 28px rgba(230, 80, 27, 0.10);
            transform: translateY(-4px);
          }

          50%,
          100% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }
        }

        /* 2024 — 2 second glow */
        .education-card-3 {
          animation-name: educationGlow3;
        }

        @keyframes educationGlow3 {
          0%,
          65% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }

          65%,
          75% {
            border-color: #E6501B;
            box-shadow:
              0 0 12px rgba(230, 80, 27, 0.18),
              0 0 28px rgba(230, 80, 27, 0.10);
            transform: translateY(-4px);
          }

          75%,
          100% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }
        }

        /* 2026 — 2 second glow */
        .education-card-4 {
          animation-name: educationGlow4;
        }

        @keyframes educationGlow4 {
          0%,
          90% {
            border-color: rgb(30 41 59);
            box-shadow: none;
            transform: translateY(0);
          }

          90%,
          100% {
            border-color: #E6501B;
            box-shadow:
              0 0 12px rgba(230, 80, 27, 0.18),
              0 0 28px rgba(230, 80, 27, 0.10);
            transform: translateY(-4px);
          }
        }

        /* Respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .education-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;