import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSectionHome() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <span className="text-sm font-sans font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
          </div>
          
          <h2 className="heading-section text-foreground mt-4">
            Your Corporate Travel Partner for{" "}
            <span className="text-primary">Safe, Smart & Sustainable</span> Rides
          </h2>
          
          <p className="text-body text-muted-foreground mt-6 max-w-3xl mx-auto">
            Aditya Travels began its journey with a vision to simplify corporate employee 
            transportation, starting with cab services for Hyderabad's IT industry. With over 
            6 years of trusted service, we've partnered with reputed clients like Mitratech 
            and iCIMS, ensuring timely, reliable, and secure travel experiences for thousands 
            of professionals every day.
          </p>

          <div className="mt-8">
            <Button variant="brand" size="xl" asChild>
              <a href="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
