import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Star, Facebook } from "lucide-react";

const navItems = [
  { label: "HOME", to: "/" },
  {
    label: "IKC STELLA NOVA",
    to: "/ikc",
    children: [
      { label: "Wat is een IKC", to: "/ikc" },
      { label: "Over Stella Nova", to: "/over-stella-nova" },
      { label: "Missie & visie", to: "/missie-visie" },
      { label: "Team", to: "/team" },
      { label: "Oriëntatiegesprekken", to: "/kennismaken" },
      { label: "Oudercommissie, MR & OR", to: "/mr-or" },
      { label: "Klachtenregeling", to: "/ouders" },
      { label: "Werken of stage lopen", to: "/ikc" },
    ],
  },
  {
    label: "INFORMATIE",
    to: "/informatieboekjes",
    children: [
      { label: "Informatieboekjes", to: "/informatieboekjes" },
      { label: "Dagopvang", to: "/opvang" },
      { label: "Buitenschoolse opvang", to: "/bso" },
      { label: "Basisschool", to: "/basisschool" },
      { label: "Stichting Leergeld", to: "https://www.leergeld.nl/" },
    ],
  },
  {
    label: "OUDERS",
    to: "/ouders",
    children: [
      { label: "Ouderparticipatie", to: "/ouders" },
      { label: "Ouderbetrokkenheid", to: "/ouders" },
    ],
  },
  { label: "CONTACT", to: "/contact" },
];

function DesktopDropdown({ item, open, setOpen }) {
  const timer = useRef(null);
  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(item.label);
  };
  const leave = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `nav-link px-3 py-2 text-sm font-semibold uppercase tracking-tight transition ${
            isActive ? "nav-link-active text-brand-accent" : "text-slate-800 hover:text-brand-accent"
          }`
        }
      >
        {item.label}
      </NavLink>
      {open === item.label && item.children && (
        <div className="absolute left-0 mt-2 min-w-[220px] rounded-md border border-slate-200 bg-white shadow-lg">
          <div className="py-2">
            {item.children.map((child) => {
              const isExternal = child.to.startsWith("http");
              const classes =
                "block px-4 py-2 text-sm text-slate-800 hover:bg-brand-light hover:text-brand-primary";
              return isExternal ? (
                <a key={child.label} href={child.to} target="_blank" rel="noreferrer" className={classes}>
                  {child.label}
                </a>
              ) : (
                <NavLink key={child.label} to={child.to} className={classes}>
                  {child.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-brand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="IKC Stella Nova" className="h-12 w-auto" />
        </Link>

        {/* Left contact */}
        <a href="tel:0793169184" className="hidden md:flex items-center gap-2 text-slate-700 font-semibold">
          <Phone className="w-5 h-5 text-brand-accent" /> 079 316 91 84
        </a>

        {/* CTA */}
        <Link
          to="/kennismaken"
          className="hidden md:inline-flex items-center gap-2 bg-brand-accent text-white font-bold px-4 py-2 rounded-sm shadow hover:-translate-y-0.5 transition"
        >
          <Star className="w-5 h-5 text-[#c94d00]" /> Kennismaken
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-end">
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} open={desktopOpen} setOpen={setDesktopOpen} />
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 text-sm font-semibold uppercase tracking-tight transition ${
                    isActive ? "nav-link-active text-brand-accent" : "text-slate-800 hover:text-brand-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-brand-accent hover:opacity-80">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg border border-brand-light text-brand-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-brand-light bg-white mobile-menu ${
          mobileOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 py-3 space-y-2">
          <a href="tel:0793169184" className="flex items-center gap-2 text-slate-700 font-semibold">
            <Phone className="w-5 h-5 text-brand-accent" /> 079 316 91 84
          </a>
          <Link to="/kennismaken" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
            <Star className="w-4 h-4" /> Kennismaken
          </Link>
          {navItems.map((item) => (
             <div key={item.label} className="border border-brand-light rounded-lg">
               <button
                 className="w-full text-left px-3 py-2 font-semibold flex justify-between items-center"
                 onClick={() => setMobileDropdown((v) => (v === item.label ? null : item.label))}
               >
                 {item.label}
                 {item.children && <span className="text-brand-primary">{mobileDropdown === item.label ? "–" : "+"}</span>}
               </button>
                {item.children && mobileDropdown === item.label && (
                  <div className="flex flex-col">
                    {item.children.map((child) => {
                      const isExternal = child.to.startsWith("http");
                      const close = () => {
                        setMobileOpen(false);
                        setMobileDropdown(null);
                      };
                      return isExternal ? (
                        <a
                          key={child.label}
                          href={child.to}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 text-sm text-slate-700 hover:bg-brand-light"
                          onClick={close}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          className="px-4 py-2 text-sm text-slate-700 hover:bg-brand-light"
                          onClick={close}
                        >
                          {child.label}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
}
