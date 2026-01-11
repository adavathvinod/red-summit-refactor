import { useEffect, useState, useRef } from "react";
import { Shield, Clock, Award, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: 6, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 100, suffix: "", label: "Professional Drivers" },
  { icon: Award, value: 80, suffix: "+", label: "Satisfied Clients" },
  { icon: Shield, value: 250, suffix: "+", label: "Trips Per Day" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16" style={{background: '#f3f4f6'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>

              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              <div className="text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
