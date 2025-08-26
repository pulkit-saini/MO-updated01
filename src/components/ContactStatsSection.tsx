import { FileText, Users, Clock, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: FileText,
    value: "10+",
    label: "Years Experience",
    description: "Delivering excellence since inception"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: Clock,
    value: "24hrs",
    label: "Response Time",
    description: "Quick turnaround guaranteed"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Proven track record of excellence"
  }
];

export default function ContactStatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-16 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'fade-up visible' : 'fade-up'
      }`}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Why Choose <span className="text-white/90">MangosOrange</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Your trusted staffing solutions partner. Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center group transition-all duration-500 ${
                  isVisible 
                    ? 'slide-in-left visible' 
                    : 'slide-in-left'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-full w-20 h-20 mx-auto animate-ping opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground/90">
                    {stat.label}
                  </div>
                  <div className="text-sm text-primary-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-primary-foreground/90 text-sm font-medium">
              🚀 Ready to transform your business? Let's connect!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}