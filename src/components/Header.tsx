import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground py-2">
        <div className="section-container flex justify-between items-center text-sm">
          <span className="font-sans">Safe. Reliable. 24×7 Commute.</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+918523880666"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 8523-880666
            </a>
            <a
              href="mailto:at@adityatrav.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              at@adityatrav.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
         <a href="#home" className="flex flex-col items-start leading-tight">
  <img
    src={logo}
    alt="Aditya Travel"
    className="h-12 w-auto object-contain"
  />
  <span className="text-xs text-muted-foreground mt-1 tracking-wide">
    On Time. Every Time. With Care.
  </span>
</a>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground font-sans font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="brandOutline" size="lg" asChild>
              <a href="#contact">Get Quote</a>
            </Button>
            <Button variant="brand" size="lg" asChild>
              <a href="tel:+918523880666">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground font-sans font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="brand" size="lg" asChild>
                  <a href="tel:+918523880666">
                    <Phone className="w-4 h-4" />
                    +91 8523-880666
                  </a>
                </Button>
                <Button variant="brandOutline" size="lg" asChild>
                  <a href="#contact">Get Quote</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
