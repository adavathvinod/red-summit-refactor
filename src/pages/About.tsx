import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Banner */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="section-container text-center">
            <h1 className="heading-hero text-foreground">About Us</h1>
            <p className="text-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Learn about our journey, mission, and the team behind Aditya Travels.
            </p>
          </div>
        </section>
        
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
