import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, Building2, Link2, Users, Wallet, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Offshore Staffing', to: '/staffing/offshore-staffing', description: 'Build distributed teams with global talent.' },
  { icon: Building2, title: 'On-Premise Staffing', to: '/staffing/on-premise-staffing', description: 'Scalable on-site workforce for operations.' },
  { icon: Link2, title: 'Contract Solutions', to: '/staffing/contract-solutions', description: 'Flexible contract engagements for agility.' },
  { icon: Users, title: 'Staffing Solutions', to: '/staffing/staffing-solutions', description: 'Tailored hiring across roles and industries.' },
  { icon: Wallet, title: 'Payroll Outsourcing', to: '/staffing/payroll-outsourcing', description: 'Accurate, compliant payroll at scale.' },
  { icon: Lightbulb, title: 'Management Consulting', to: '/staffing/management-consulting', description: 'People strategy, org design, and transformation.' },
];

const StaffingIncludesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            It Includes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Staffing Services Included</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Explore our comprehensive offerings designed to fit every hiring model and timeline.
          </p>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${isVisible ? 'visible' : ''}`}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link key={i} to={s.to} className="group block" aria-label={s.title}>
                <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground flex items-end justify-between">
                    <span>{s.description}</span>
                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform" aria-hidden>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StaffingIncludesSection;
