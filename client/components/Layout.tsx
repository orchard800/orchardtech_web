import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getSiteSettings, type SiteNavItem } from "@/lib/cms";

const FALLBACK_NAV: SiteNavItem[] = [
  { label: "Capabilities", to: "/capabilities", sort: 1 },
  { label: "How We Partner", to: "/how-we-partner", sort: 2 },
  { label: "About", to: "/about", sort: 3 },
  { label: "Contact", to: "/contact", sort: 4 },
];

function Logo() {
  return (
    <Link to="/" className="font-semibold tracking-tight text-lg">
      Orchard <span className="text-primary">Tech</span>
    </Link>
  );
}

function Header() {
  const [nav, setNav] = useState<SiteNavItem[]>(FALLBACK_NAV);

  useEffect(() => {
    let mounted = true;

    getSiteSettings().then((settings) => {
      if (!mounted) return;
      if (settings?.navigation?.length) {
        setNav(settings.navigation);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const renderLink = (item: SiteNavItem, className?: string) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) =>
        cn("text-muted-foreground hover:text-foreground transition-colors", isActive && "text-foreground", className)
      }
    >
      {item.label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="container h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => renderLink(item))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full border border-white/10"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85%] max-w-xs border-l border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle className="font-semibold text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {nav.map((item) => renderLink(item, "rounded-md px-3 py-2 text-base hover:bg-white/5"))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-12">
      <div className="container flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:justify-between text-sm text-muted-foreground">
        <p>Orchard Tech — Specialist backend partner for digital agencies.</p>
        <p>hello@orchardtech.net</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(80%_60%_at_20%_0%,hsl(var(--primary)/0.2),transparent_65%),radial-gradient(70%_50%_at_90%_10%,hsl(var(--accent-glow)/0.18),transparent_70%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background-2)))]" />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
