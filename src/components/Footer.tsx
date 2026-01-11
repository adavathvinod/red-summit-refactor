import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Shield, Clock, Award } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const footerLinks = {
  services: [
    { name: "Employee Commute", href: "#services" },
    { name: "Executive Travel", href: "#services" },
    { name: "Airport Transfers", href: "#services" },
    { name: "Event Logistics", href: "#services" },
    { name: "Outstation Trips", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
          <div className="border-b border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-corporate-green" />
              <span>100% Safety Record</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-corporate-sky" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-corporate-gold" />
              <span>ISO Certified Operations</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Aditya Travel"
              className="h-14 w-auto object-contain mb-6 bg-background rounded-lg p-2"
            />
            <p className="text-secondary-foreground/80 font-sans text-sm leading-relaxed mb-6">
              Your corporate travel partner for safe, smart & sustainable rides. 
              Trusted by leading corporations across India since 2019.
            </p>
            <p className="text-primary font-serif font-semibold italic">
              "On Time. Every Time. With Care"
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary font-sans text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary font-sans text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="tel:+918523880666"
                    className="text-secondary-foreground hover:text-primary font-sans text-sm transition-colors block"
                  >
                    +91 8523-880666
                  </a>
                  <a
                    href="tel:+918919543489"
                    className="text-secondary-foreground/80 hover:text-primary font-sans text-sm transition-colors block"
                  >
                    +91 89195 43489
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:at@adityatrav.com"
                  className="text-secondary-foreground hover:text-primary font-sans text-sm transition-colors"
                >
                  at@adityatrav.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 font-sans text-sm">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 font-sans text-sm">
              © {currentYear} Aditya Travels. All rights reserved.
            </p>
            <p className="text-secondary-foreground/60 font-sans text-sm">
              GSTIN: 36BOAPG5682R2ZA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
