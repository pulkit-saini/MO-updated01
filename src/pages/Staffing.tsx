import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/professional-team-hero.jpg';
import { Users, Briefcase, Globe, Building2, FileText, Wallet, Lightbulb, ArrowRight, Shield, Link2 } from 'lucide-react';

const services = [
  { icon: FileText, title: 'RPO (Recruitment Process Outsourcing)', to: '/staffing/rpo', description: 'End-to-end recruitment as a managed service.' },
  { icon: Globe, title: 'Offshore Staffing', to: '/staffing/offshore-staffing', description: 'Build distributed teams with global talent.' },
  { icon: Building2, title: 'On-Premise Staffing', to: '/staffing/on-premise-staffing', description: 'Scalable on-site workforce for operations.' },
  { icon: Link2, title: 'Contract Solutions', to: '/staffing/contract-solutions', description: 'Flexible contract engagements for agility.' },
  { icon: Users, title: 'Staffing Solutions', to: '/staffing', description: 'Tailored hiring across roles and industries.' },
  { icon: Wallet, title: 'Payroll Outsourcing', to: '/staffing/payroll-outsourcing', description: 'Accurate, compliant payroll at scale.' },
  { icon: Lightbulb, title: 'Management Consulting', to: '/staffing/management-consulting', description: 'People strategy, org design, and transformation.' },
];

const Staffing = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'Service',
      name: s.title,
      position: i + 1,
      url: window.location.origin + s.to,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Staffing Services Hub | Your Workforce, Our Expertise"
        description="Explore our Staffing services: RPO, Offshore, On-Premise, Contract, Staffing Solutions, Payroll Outsourcing, and Management Consulting."
        jsonLd={jsonLd}
      />
      <Header />

      {/* Hero */}
      <section className="relative page-top-spacing pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Staffing services hero banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div ref={heroRef} className={`max-w-3xl fade-up ${heroVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Premium Staffing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Workforce, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
              Build high-performing teams with speed, precision, and compliance—on-site, offshore, or hybrid.
            </p>
            <div className="mt-8">
              <a href="#services">
                <Button size="lg" variant="premium" className="group">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div ref={aboutRef} className={`container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center fade-up ${aboutVisible ? 'visible' : ''}`}>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Our Staffing</h2>
            <p className="text-lg text-muted-foreground">
              We combine domain expertise with a process-led approach to deliver talent when and where you need it. From project-based spikes to ongoing team expansion, our models keep you flexible, compliant, and future-ready.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[{label:'Average time-to-hire', value:'48 hrs'},{label:'Roles filled',value:'500+'},{label:'Client retention',value:'95%'},{label:'Locations',value:'Pan-India'}].map((s, i) => (
              <Card key={i} className="bg-card/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{s.value}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{s.label}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="py-16 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Services Overview</h2>
          </div>
          <div ref={gridRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${gridVisible ? 'visible' : ''}`}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={i} to={s.to} className="group block">
                  <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">{s.description}</CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16">
        <div ref={whyRef} className={`container mx-auto px-4 fade-up ${whyVisible ? 'visible' : ''}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Speed. Precision. Compliance.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title:'Faster Hiring', desc:'Streamlined sourcing, screening, and onboarding.'},
              {title:'Deep Expertise', desc:'Domain specialists across functions and levels.'},
              {title:'Global Reach', desc:'Access to local and offshore talent pools.'},
              {title:'Full Compliance', desc:'Zero-risk contracts, policies, and payroll.'},
            ].map((w, i) => (
              <Card key={i} className="bg-card/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">{w.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{w.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Staffing;
