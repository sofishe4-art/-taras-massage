"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Про мене" },
  { href: "#philosophy", label: "Філософія" },
  { href: "#services", label: "Напрямки" },
  { href: "#process", label: "Сеанс" },
  { href: "#principles", label: "Принципи" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#faq", label: "Питання" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-page px-6 md:px-10 flex items-center justify-between h-20">
        <a
          href="#top"
          className="text-lg font-medium tracking-tightest2 text-walnut"
        >
          Тарас Шевельов
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-[15px] text-charcoal/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-clay transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-walnut text-ivory px-6 py-2.5 text-[15px] hover:bg-charcoal transition-colors duration-300"
        >
          Записатися
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-px bg-walnut" />
          <span className="w-6 h-px bg-walnut" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-beige px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-charcoal/85 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-walnut text-ivory px-6 py-3 text-base"
          >
            Записатися
          </a>
        </div>
      )}
    </header>
  );
}
