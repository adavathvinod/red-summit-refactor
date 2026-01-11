import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8523-880666",
    href: "tel:+918523880666",
    secondary: "+91 89195 43489",
    secondaryHref: "tel:+918919543489",
  },
  {
    icon: Mail,
    label: "Email",
    value: "at@adityatrav.com",
    href: "mailto:at@adityatrav.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24/7 Available",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h2 className="heading-section text-foreground animate-fade-up">
                Ready to Transform Your Corporate Travel?
              </h2>
              <p className="text-body text-muted-foreground mt-4 animate-fade-up delay-100">
                Get a customized quote tailored to your company's specific
                transportation needs. Our team will respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6 animate-fade-up delay-200">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-sans">
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-serif font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-serif font-semibold text-foreground">
                        {item.value}
                      </div>
                    )}

                    {item.secondary && (
                      <a
                        href={item.secondaryHref}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
                      >
                        {item.secondary}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* BUSINESS INFO */}
            <div className="p-6 bg-muted rounded-xl border border-border animate-fade-up delay-500">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Aditya Travels
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                GSTIN: 36BOAPG5682R2ZA
              </p>
              <p className="text-sm text-muted-foreground font-sans">
                Website: www.adityatrav.com
              </p>
              <p className="text-primary font-serif font-semibold mt-4 italic">
                "Aditya Travels – On Time. Every Time. With Care"
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-card rounded-xl p-8 shadow-elevated border border-border animate-fade-up delay-300">
            <h3 className="heading-card text-foreground mb-6 animate-fade-up delay-400">
              Request Corporate Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                  { id: "email", label: "Email *", type: "email", placeholder: "Enter your email address" },
                ].map((field, index) => (
                  <div key={field.id} className="animate-fade-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-sans font-medium text-foreground mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      required
                      value={formData[field.id as keyof typeof formData] as string}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.id]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "phone", label: "Phone Number *", type: "tel", placeholder: "Enter your phone number" },
                  { id: "company", label: "Company Name", type: "text", placeholder: "Enter your company name" },
                ].map((field, index) => (
                  <div key={field.id} className="animate-fade-up" style={{ animationDelay: `${700 + index * 100}ms` }}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-sans font-medium text-foreground mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id as keyof typeof formData] as string}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.id]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="animate-fade-up delay-900">
                <label
                  htmlFor="message"
                  className="block text-sm font-sans font-medium text-foreground mb-2"
                >
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  placeholder="Tell us about your transportation needs..."
                />
              </div>

              <Button
                type="submit"
                variant="brand"
                size="xl"
                className="w-full animate-fade-up delay-1000"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request Quote
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
