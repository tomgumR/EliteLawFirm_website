"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  target: string;
};

export function SiteHeader({ navItems }: { navItems: NavItem[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavigate() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? "rgba(15, 31, 58, 0.95)"
          : "rgba(30, 58, 95, 0.98)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="header-content mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 text-left">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
            <Image
              src="/Elite_official_logo.jpeg"
              alt="Elite Legal Consultancy logo"
              width={92}
              height={92}
              className="h-[4.8rem] w-[4.8rem] max-w-none object-cover object-center scale-[1.18]"
              priority
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-xl font-bold tracking-[0.03em] text-white">
              ELITE LEGAL CONSULTANCY
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className="text-base font-medium text-white transition hover:text-[color:var(--navy-gold)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-button rounded-md bg-[color:var(--navy-gold)] px-6 py-3 text-sm font-semibold text-[color:var(--navy-primary)]"
          >
            Get Consultation
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          className="rounded-md p-2 text-white md:hidden"
          aria-label="Toggle mobile navigation"
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[color:var(--navy-dark)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={handleNavigate}
                className="border-b border-white/10 py-3 text-left text-lg font-medium text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavigate}
              className="mt-3 rounded-md bg-[color:var(--navy-gold)] px-5 py-3 text-center text-sm font-semibold text-[color:var(--navy-primary)]"
            >
              Get Consultation
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
