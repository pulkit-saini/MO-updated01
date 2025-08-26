import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cloud, 
  Users, 
  Code, 
  Shield, 
  Database, 
  Smartphone,
  ArrowRight,
  Zap,
  Globe,
  Monitor,
  Github,
  Settings,
  ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web solutions and modern frameworks for responsive, scalable websites that drive business growth.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Development"]
  },
  {
    icon: Smartphone,
    title: "App Development", 
    description: "Mobile and desktop applications that connect with your users and deliver exceptional experiences.",
    features: ["Native iOS & Android", "Cross-Platform", "UI/UX Design"]
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Open source solutions and contributions to leverage cost-effective, customizable technologies.",
    features: ["Custom Solutions", "Community Support", "License Compliance"]
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Tailored software solutions designed specifically for your unique business requirements.",
    features: ["Enterprise Solutions", "Process Automation", "API Integration"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online store and e-commerce platforms that drive sales and enhance customer experience.",
    features: ["Payment Integration", "Inventory Management", "Mobile Commerce"]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Enterprise cloud solutions including strategy, migration, and managed services for scalable operations.",
    features: ["Cloud Strategy", "Data Migration", "Managed Services"]
  }
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const serviceRoutes = [
    '/web-development',
    '/app-development',
    '/open-source',
    '/custom-software',
    '/ecommerce',
    '/cloud-strategy'
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions &
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Service Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are an Integrated Service Provider Company specializing in cutting-edge IT solutions and comprehensive business services. From custom software development to staffing solutions, we deliver innovative technologies and quality services that drive business growth.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${cardsVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-card/50 backdrop-blur-sm card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={serviceRoutes[index]}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary transform transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                  </Link>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="it-services">
          <Button 
            size="lg" 
            variant="premium"
            className="group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;