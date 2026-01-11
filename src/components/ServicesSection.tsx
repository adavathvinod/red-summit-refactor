import { Car, Users, MapPin, Plane, Bus, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import carSuperb from "@/assets/car-superb.png";
import carToyota from "@/assets/car-toyota.png";

const services = [
  {
    icon: Car,
    title: "Employee Commute",
    subtitle: "MoveInSync Powered",
    description:
      "Daily pick-up and drop services for your workforce with OTP-verified rides and real-time tracking.",
    features: ["OTP Verified Rides", "Real-time GPS Tracking", "Route Optimization", "Daily Reports"],
  },
  {
    icon: Users,
    title: "Executive Travel",
    subtitle: "Premium Chauffeur Service",
    description:
      "Premium chauffeur services for your leadership team with luxury vehicles and professionally trained drivers.",
    features: ["Luxury Fleet", "Trained Chauffeurs", "Confidential Service", "Flexible Booking"],
  },
  {
    icon: Bus,
    title: "Mini & Large Buses",
    subtitle: "15-35 Seaters",
    description:
      "Ideal for group employee commutes, corporate events, or team outings with comfortable seating.",
    features: ["Large Fleet Capacity", "Event Coordination", "Multi-vehicle Sync", "On-ground Support"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    subtitle: "24/7 Availability",
    description:
      "Reliable airport pick-up and drop services with flight tracking and meet-and-greet options.",
    features: ["Flight Tracking", "Meet & Greet", "24/7 Availability", "Luggage Assistance"],
  },
  {
    icon: MapPin,
    title: "Outstation & Sightseeing",
    subtitle: "Beyond Hyderabad",
    description:
      "Comfortable rides beyond Hyderabad for leisure or business tours with experienced drivers.",
    features: ["Pan-India Coverage", "Tourist Guides", "Flexible Itinerary", "Comfortable Vehicles"],
  },
  {
    icon: Globe,
    title: "Foreign Guest Support",
    subtitle: "English-Speaking Chauffeurs",
    description:
      "English-speaking chauffeurs and professional tourist guides available on request for international guests.",
    features: ["Bilingual Drivers", "Cultural Assistance", "Airport Protocol", "Custom Packages"],
  },
];

const fleetImages = [
  { src: carSuperb, alt: "Skoda Superb - Executive Sedan" },
  { src: carToyota, alt: "Toyota Corolla - Reliable Comfort" },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-section text-foreground mt-4">
            Comprehensive Corporate Travel Solutions
          </h2>
          <p className="text-body text-muted-foreground mt-4">
            From daily employee commute to executive travel and event logistics, we provide 
            end-to-end transportation solutions tailored for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-card text-foreground">{service.title}</h3>
                  <span className="text-sm font-sans text-primary">{service.subtitle}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground font-sans mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-sans font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="brand" size="xl" asChild>
            <a href="#contact">Get Custom Quote for Your Business</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
