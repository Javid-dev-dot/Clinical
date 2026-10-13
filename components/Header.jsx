"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const teamLinks = [
  { label: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
  { label: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
  { label: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
  { label: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
  { label: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
  { label: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
  { label: "Chad Flores, AMFT", href: "/chad-flores" },
  { label: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
  { label: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
];

const specialtiesLinks = [
  { label: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
  { label: "Trauma", href: "/trauma-counseling-newbury-park" },
  { label: "Special Needs Parenting", href: "/counseling-special-needs-parents-newbury-park" },
  { label: "Couples", href: "/couples-therapy" },
  { label: "Children & Teens", href: "/children-and-teens" },
  { label: "Anxiety & Depression", href: "/anxiety-depression" },
  { label: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
];

const methodsLinks = [
  { label: "EMDR", href: "/emdr-therapy-newbury-park" },
  { label: "Brainspotting", href: "/brainspotting" },
  { label: "Somatic Therapy", href: "/somatic-therapy" },
  { label: "Parts Work Therapy", href: "/parts-work-therapy" },
];

function Chevron({ open }) {
  return (
    <svg className={`h-2.5 w-2.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const menuId = `${label.toLowerCase().replace(/\W+/g, "-")}-menu`;

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button type="button" aria-expanded={open} aria-controls={menuId} className="nav-link nav-underline flex items-center gap-1.5 py-2 text-ink" onClick={() => setOpen((value) => !value)} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
        {label}
        <Chevron open={open} />
      </button>
      <div id={menuId} className={`absolute left-0 top-full z-50 min-w-64 origin-top bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.11)] transition duration-200 ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`} aria-hidden={!open}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} className="block px-6 py-3 text-sm font-light text-ink transition-colors hover:bg-cream-light hover:font-normal focus:bg-cream-light">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  const groupId = `${label.toLowerCase().replace(/\W+/g, "-")}-mobile-menu`;

  return (
    <li className="border-b border-black/5 py-1">
      <button type="button" className="nav-link flex w-full items-center justify-between py-3 text-left text-ink" aria-expanded={open} aria-controls={groupId} onClick={() => setOpen((value) => !value)}>
        {label}
        <Chevron open={open} />
      </button>
      <ul id={groupId} className={`grid overflow-hidden pl-4 text-sm font-light normal-case transition-[grid-template-rows,opacity] duration-200 ${open ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`} aria-hidden={!open}>
        {items.map((item) => <li key={item.href} className="min-h-0"><Link href={item.href} tabIndex={open ? 0 : -1} onClick={onNavigate} className="block py-1 hover:text-sage">{item.label}</Link></li>)}
      </ul>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream-light/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6 px-6 py-4 lg:px-10 lg:py-5">
        <Link href="/" className="shrink-0" aria-label="Conejo Valley Family Counseling home">
          <Image src="/images/logo.png" alt="Conejo Valley Family Counseling" width={300} height={88} className="h-[62px] w-auto lg:h-[75px]" priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <Link href="/therapists-newbury-park" className="nav-link nav-underline py-2 text-ink">About</Link>
          <Dropdown label="Our Team" items={teamLinks} />
          <Dropdown label="Specialties" items={specialtiesLinks} />
          <Dropdown label="Methods" items={methodsLinks} />
          <Link href="/faqs" className="nav-link nav-underline py-2 text-ink">FAQs</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-pill hidden lg:inline-block">Contact</Link>
          <button type="button" className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((value) => !value)}>
            {[0, 1, 2].map((line) => <span key={line} className={`block h-px w-6 bg-ink transition-transform duration-200 ${mobileOpen && line === 0 ? "translate-y-[6px] rotate-45" : ""} ${mobileOpen && line === 1 ? "opacity-0" : ""} ${mobileOpen && line === 2 ? "-translate-y-[6px] -rotate-45" : ""}`} />)}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" ref={mobileMenuRef} className={`overflow-hidden border-t border-black/5 bg-cream-light transition-[max-height,opacity] duration-300 lg:hidden ${mobileOpen ? "max-h-[calc(100vh-94px)] overflow-y-auto opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={!mobileOpen}>
        <nav className="px-6 pt-3 pb-8" aria-label="Mobile navigation">
          <ul className="text-ink">
            <li className="border-b border-black/5"><Link href="/therapists-newbury-park" onClick={closeMobileMenu} tabIndex={mobileOpen ? 0 : -1} className="nav-link block py-4">About</Link></li>
            <MobileGroup label="Our Team" items={teamLinks} onNavigate={closeMobileMenu} />
            <MobileGroup label="Specialties" items={specialtiesLinks} onNavigate={closeMobileMenu} />
            <MobileGroup label="Methods" items={methodsLinks} onNavigate={closeMobileMenu} />
            <li className="border-b border-black/5"><Link href="/faqs" onClick={closeMobileMenu} tabIndex={mobileOpen ? 0 : -1} className="nav-link block py-4">FAQs</Link></li>
            <li className="pt-6"><Link href="/contact" onClick={closeMobileMenu} tabIndex={mobileOpen ? 0 : -1} className="btn-pill">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
