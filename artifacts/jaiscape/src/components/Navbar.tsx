import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", path: "/explore" },
    { name: "Hidden Places", path: "/hidden-places" },
    { name: "Desert Camps", path: "/desert-camps" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#0B0B0B]/85 backdrop-blur-md py-4 border-b border-[#C8A96B]/10" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-1 z-50">
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-foreground">Jaiscape</span>
            <span className="text-[#C8A96B] transition-transform duration-500 group-hover:rotate-180">✦</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C8A96B] ${
                    location === link.path ? "text-[#C8A96B]" : "text-foreground/80"
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-3">
              <Link href="/partner">
                <Button
                  variant="ghost"
                  className={`text-sm font-medium tracking-wide border border-[#C8A96B]/30 text-[#C8A96B] hover:bg-[#C8A96B]/10 hover:border-[#C8A96B] transition-all duration-300 ${
                    location === "/partner" ? "bg-[#C8A96B]/10 border-[#C8A96B]" : ""
                  }`}
                  data-testid="button-partner"
                >
                  Partner With Jaiscape
                </Button>
              </Link>
              <Link href="/explore">
                <Button
                  variant="outline"
                  className="border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black font-medium tracking-wide transition-all duration-300"
                  data-testid="button-plan-trip"
                >
                  Plan Trip
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif tracking-widest transition-colors hover:text-[#C8A96B] ${
                    location === link.path ? "text-[#C8A96B]" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/partner" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="mt-2 border border-[#C8A96B]/40 text-[#C8A96B] hover:bg-[#C8A96B]/10 font-medium tracking-wide text-lg px-8 py-6"
                >
                  Partner With Jaiscape
                </Button>
              </Link>
              <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black font-medium tracking-wide transition-all duration-300 text-lg px-8 py-6"
                >
                  Plan Trip
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
