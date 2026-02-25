import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";

function Logo() {
  return (
    <Link to="/" className="font-semibold tracking-tight text-lg">
      Orchard <span className="text-primary">Tech</span>
    </Link>
  );
}

function Header() {
  const nav = [
    { label: "Capabilities", to: "/capabilities" },
    { label: "How We Partner", to: "/how-we-partner" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn("text-muted-foreground hover:text-foreground", isActive && "text-foreground")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:justify-between text-sm text-muted-foreground">
        <p>Orchard Tech — Specialist backend partner for digital agencies.</p>
        <p>hello@orchardtech.net</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
