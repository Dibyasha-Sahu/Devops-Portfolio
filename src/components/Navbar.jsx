const links = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0d1117]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-lg font-bold text-[#E6501B]">
          Dibyasha.dev
        </a>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition hover:text-[#E6501B]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;