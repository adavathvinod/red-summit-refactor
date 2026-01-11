import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Users, 
  Calendar, 
  Plane, 
  ArrowRight, 
  CheckCircle2,
  Shield,
  Clock,
  Award
} from "lucide-react";

const services = [
  {
    id: "employee-commute",
    category: "Daily Pick-up & Drop Solutions",
    icon: Car,
    title: "Employee Commute Services",
    description: "Reliable daily transportation for your workforce with technology-enabled operations. Our employee commute services ensure your team arrives on time, every time.",
    features: [
      "OTP-verified rides for security",
      "Real-time GPS tracking",
      "Route optimization for efficiency",
      "Daily reports and analytics"
    ],
    benefits: [
      "Reduced absenteeism",
      "Improved employee satisfaction",
      "Cost-effective fleet management",
      "Seamless MoveInSync integration"
    ],
    ctaText: "Request Quote for Employee",
    layout: "left"
  },
  {
    id: "executive-travel",
    category: "Premium Chauffeur Experience",
    icon: Users,
    title: "Executive Travel Services",
    description: "Exclusive travel solutions for your leadership team. Our executive service combines luxury vehicles with professionally trained chauffeurs.",
    features: [
      "Luxury sedan and SUV options",
      "Professional, uniformed drivers",
      "In-car amenities available",
      "24/7 availability"
    ],
    benefits: [
      "Confidential & discreet service",
      "Background-verified chauffeurs",
      "Flexible scheduling",
      "Dedicated account manager"
    ],
    ctaText: "Request Quote for Executive",
    layout: "right"
  },
  {
    id: "event-logistics",
    category: "Corporate Event Transportation",
    icon: Calendar,
    title: "Event Logistics",
    description: "End-to-end transportation management for corporate events, conferences, team outings, and large-scale gatherings.",
    features: [
      "Large fleet capacity",
      "Multi-point coordination",
      "Event-specific scheduling",
      "On-ground support team"
    ],
    benefits: [
      "Buses & coaches (15-50 seaters)",
      "Synchronized vehicle dispatch",
      "Custom branding available",
      "Dedicated event coordinator"
    ],
    ctaText: "Request Quote for Event",
    layout: "left"
  },
  {
    id: "airport-transfers",
    category: "Seamless Airport Pick-up & Drop",
    icon: Plane,
    title: "Airport Transfer Services",
    description: "Professional airport transfer services with flight tracking, meet-and-greet options, and reliable punctuality.",
    features: [
      "Domestic & international terminals",
      "Waiting time flexibility",
      "Corporate billing options",
      "Premium vehicle options"
    ],
    benefits: [
      "Real-time flight tracking",
      "Meet & greet service",
      "24/7 availability",
      "Luggage assistance"
    ],
    ctaText: "Request Quote for Airport",
    layout: "right"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="section-container">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h1 className="heading-hero text-foreground max-w-3xl">
              Comprehensive Corporate Transportation Solutions
            </h1>
            <p className="text-body text-muted-foreground mt-4 max-w-2xl">
              From daily employee commute to executive travel and event logistics — we provide tailored solutions for every corporate transportation need.
            </p>
          </div>
        </section>

        {/* Services List */}
        <div className="py-16 md:py-24">
          {services.map((service, index) => (
            <section 
              key={service.id} 
              id={service.id}
              className={`py-12 md:py-16 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
            >
              <div className="section-container">
                {/* Category Label */}
                <div className={`flex items-center gap-3 mb-6 ${service.layout === 'right' ? 'md:justify-end' : ''}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{service.category}</span>
                </div>

                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${service.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className={service.layout === 'right' ? 'lg:order-2' : ''}>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button variant="brand" asChild>
                      <a href="/contact">
                        {service.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  {/* Benefits Side */}
                  <div className={`bg-card rounded-2xl p-6 md:p-8 border border-border ${service.layout === 'right' ? 'lg:order-1' : ''}`}>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Need a Custom Transportation Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team will work with you to design a transportation plan that fits your specific requirements and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="brand" size="xl" asChild>
                <a href="/contact">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/contact">Talk to an Expert</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-foreground py-6">
          <div className="section-container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-background">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">100% Safety Record</span>
              </div>
              <div className="flex items-center gap-2 text-background">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-background">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ISO Certified Operations</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
