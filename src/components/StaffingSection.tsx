import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Search, 
  CheckCircle, 
  Clock,
  Target,
  Star,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const staffingServices = [
  {
    icon: Search,
    title: "Talent Acquisition",
    description: "Expert recruitment services to find the perfect candidates for your technology and business needs.",
    features: ["Technical Screening", "Cultural Fit Assessment", "Background Verification"]
  },
  {
    icon: Users,
    title: "Contract Staffing",
    description: "Flexible contract professionals to scale your team quickly for projects and peak workloads.",
    features: ["Project-Based", "Seasonal Support", "Rapid Deployment"]
  },
  {
    icon: Briefcase,
    title: "Permanent Placement",
    description: "Long-term hiring solutions to build your core team with top-tier permanent employees.",
    features: ["Full-Time Positions", "Leadership Roles", "Cultural Integration"]
  },
  {
    icon: Target,
    title: "Specialized Roles",
    description: "Access to niche specialists including AI/ML engineers, cybersecurity experts, and DevOps professionals.",
    features: ["AI/ML Specialists", "Cybersecurity Experts", "Cloud Architects"]
  }
];

const StaffingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="staffing" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Find the Right
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with pre-vetted professionals who fit your technical requirements and company culture. 
            From contract specialists to permanent team members.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up ${cardsVisible ? 'visible' : ''}`}
        >
          {staffingServices.map((service, index) => {
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
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/staffing">
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Professionals Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">48hrs</div>
                <div className="text-sm text-muted-foreground">Average Time to Match</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Client Retention Rate</div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Build Your Dream Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your staffing needs and find the perfect candidates for your organization.
            </p>
            <Link to="/staffing">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground"
              >
                Start Hiring Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffingSection;