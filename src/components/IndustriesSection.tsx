import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Banknote, 
  Factory,
  Plane,
  Truck
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const industries = [
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Banks, fintech startups, and investment firms trust us with their mission-critical technology needs.",
    projects: "150+ Projects"
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Supporting healthcare providers and biotech companies with HIPAA-compliant solutions.",
    projects: "80+ Projects"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Scaling online platforms and modernizing retail technology for seamless customer experiences.",
    projects: "120+ Projects"
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description: "Empowering educational institutions and startups with innovative learning management systems.",
    projects: "90+ Projects"
  },
  {
    icon: Factory,
    title: "Manufacturing & IoT",
    description: "Digital transformation for smart factories and industrial automation solutions.",
    projects: "110+ Projects"
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description: "Helping SaaS companies and enterprises build scalable, cloud-native applications.",
    projects: "200+ Projects"
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Booking platforms, property management, and customer experience solutions.",
    projects: "65+ Projects"
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Optimizing operations with real-time tracking, inventory management, and route optimization.",
    projects: "75+ Projects"
  }
];

const IndustriesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Industries We
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our deep industry expertise helps us understand your unique challenges and deliver 
            solutions that drive real business results across diverse sectors.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up ${cardsVisible ? 'visible' : ''}`}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border border-border/50 hover:border-primary/30 bg-card hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl card-hover"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {industry.projects}
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/50 to-primary/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with companies across all sectors. Our adaptable approach and 
              diverse talent pool means we can support your unique industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Discuss Your Needs
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;