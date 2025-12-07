import { Car, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Car,
    number: "60+",
    label: "Daily Trips",
    description: "Seamless commutes every day",
  },
  {
    icon: Users,
    number: "100%",
    label: "Client Retention",
    description: "Contracts renewed year after year",
  },
  {
    icon: Award,
    number: "0",
    label: "Breakdowns",
    description: "Zero vehicle breakdowns since inception",
  },
  {
    icon: Clock,
    number: "98.5%",
    label: "On-Time Rate",
    description: "Punctuality you can rely on",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="text-lg font-serif font-semibold text-secondary-foreground mt-2">
                {stat.label}
              </div>
              <div className="text-sm text-secondary-foreground/70 font-sans mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
