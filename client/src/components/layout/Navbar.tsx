import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Director", href: "#director" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <span className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Ranker's Point
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-slate-700" : "text-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled ? 'text-white' : ''} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-2">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-700 font-medium py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
