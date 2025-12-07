import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, MapPin } from "lucide-react";
import driverImage from "@/assets/driver-professional.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fade-up">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-sans font-medium text-primary">
                Trusted by 19+ Leading Corporations
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-foreground animate-fade-up delay-100">
              Your Premier{" "}
              <span className="text-primary">Corporate Travel</span> Partner
            </h1>

            {/* Subheadline */}
            <p className="text-body text-muted-foreground max-w-xl animate-fade-up delay-200">
              Technology-driven employee commute and executive transportation solutions. 
              Safe, reliable, and available 24×7 across India.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 animate-fade-up delay-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-sans font-medium">Background Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-sans font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-sans font-medium">GPS Tracked</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Request Corporate Quote</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+918523880666">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground animate-fade-up delay-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-sans">Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={driverImage}
                alt="Professional chauffeur providing executive transportation"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-xl p-6 shadow-elevated border border-border animate-fade-up delay-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-foreground">6+ Years</div>
                  <div className="text-sm text-muted-foreground font-sans">Trusted Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
