import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaffingIncludesSection from '@/components/StaffingIncludesSection';
import Seo from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight,
  CheckCircle,
  Zap,
  Building,
  UserCheck,
  Search,
  FileText,
  UserPlus,
  Settings,
  Globe,
  Clock,
  Award,
  Target,
  Star,
  Quote
} from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';

const industries = [
  {
    name: "Consumer Retail and Services",
    description: "Retail workforce solutions for customer-focused businesses"
  },
  {
    name: "Manufacturing & Engineering", 
    description: "Technical talent for industrial and engineering sectors"
  },
  {
    name: "Pharma, Healthcare and Life Science",
    description: "Specialized professionals for healthcare organizations"
  },
  {
    name: "Logistics Industry",
    description: "Supply chain and logistics workforce solutions"
  },
  {
    name: "Energy and Infrastructure",
    description: "Power sector and infrastructure project staffing"
  },
  {
    name: "Banking, Financial Services and Insurance",
    description: "Financial sector talent and compliance experts"
  },
  {
    name: "Hospitality Industry",
    description: "Service industry professionals and management"
  },
  {
    name: "Education Industry",
    description: "Academic and administrative education professionals"
  }
];

const processSteps = [
  {
    icon: Search,
    title: "Understand Your Needs",
    description: "We analyze your requirements, culture, and specific skill needs"
  },
  {
    icon: Users,
    title: "Source & Screen Talent",
    description: "Our experts identify and evaluate candidates from our extensive network"
  },
  {
    icon: FileText,
    title: "Share Curated Profiles",
    description: "Receive carefully selected profiles that match your exact criteria"
  },
  {
    icon: UserPlus,
    title: "Onboarding & Documentation",
    description: "Complete paperwork and compliance with seamless onboarding"
  },
  {
    icon: Settings,
    title: "Deployment & Support",
    description: "Ongoing support and performance monitoring for optimal results"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Flexible Hiring",
    description: "Scale your workforce up or down based on project demands and business needs"
  },
  {
    icon: Clock,
    title: "Faster Turnaround",
    description: "Quick deployment of pre-vetted professionals to meet urgent requirements"
  },
  {
    icon: Award,
    title: "Reduced HR Load",
    description: "We handle recruitment, compliance, and administrative tasks for you"
  },
  {
    icon: Target,
    title: "Quality Assurance",
    description: "Rigorous screening process ensures only top-tier candidates reach you"
  }
];

const whyChooseUs = [
  {
    icon: Globe,
    title: "Pan India Presence",
    description: "Nationwide coverage to serve your business across all locations"
  },
  {
    icon: Clock,
    title: "Quick Talent Deployment",
    description: "Rapid placement with our extensive talent pool and streamlined processes"
  },
  {
    icon: Award,
    title: "Performance Monitoring Support",
    description: "Continuous support and performance tracking for lasting success"
  },
  {
    icon: Users,
    title: "Expertise Across Domains",
    description: "Deep industry knowledge and specialized recruitment expertise"
  },
  {
    icon: CheckCircle,
    title: "End-to-End HR Solutions",
    description: "Complete workforce management from hiring to deployment"
  }
];

const StaffingSolutions = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Staffing Solutions',
    description: 'Tailored hiring across roles and industries with contract and permanent placements, fast turnaround, and pan-India coverage.',
    areaServed: 'IN',
    serviceType: 'Staffing',
    provider: { '@type': 'Organization', name: 'MangosOrange' }
  };

  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      <main role="main">
      
      {/* Hero Section */}
      <section className="relative page-top-spacing pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div 
            ref={heroRef}
            className={`text-center space-y-8 max-w-4xl mx-auto fade-up ${heroVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Expert Staffing Solutions
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tailored for Your Industry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Empowering your workforce with top-tier talent – on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
                  Talk to Our Expert
                </Button>
              </Link>
            </div>
            </div>
          </div>
        </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div 
            ref={overviewRef}
            className={`grid lg:grid-cols-2 gap-16 items-center fade-up ${overviewVisible ? 'visible' : ''}`}
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Custom Workforce Solutions
                  <span className="block text-primary">Across All Levels</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We provide qualified and experienced professionals capable of driving your business growth. From contractual placements to permanent hires, we handle all your staffing needs.
                  </p>
                  <p>
                    Our domain-specific recruiters bring profound market insights and tailor-made solutions to match your exact requirements, whether you need entry-level talent or senior leadership.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Professionals Placed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-secondary">48hrs</div>
                  <div className="text-sm text-muted-foreground">Average Turnaround</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src={heroImage} 
                alt="Professional team collaboration" 
                className="relative w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <StaffingIncludesSection />

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined 5-step process ensures you get the right talent quickly and efficiently
            </p>
          </div>

          <div 
            ref={processRef}
            className={`grid md:grid-cols-2 lg:grid-cols-5 gap-8 fade-up ${processVisible ? 'visible' : ''}`}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">Step {index + 1}</div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Benefits of Partnering With Us
            </h2>
          </div>

          <div 
            ref={benefitsRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up ${benefitsVisible ? 'visible' : ''}`}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized staffing solutions across diverse sectors and industries
            </p>
          </div>

          <div 
            ref={industriesRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up ${industriesVisible ? 'visible' : ''}`}
          >
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Solutions
            </h2>
          </div>

          <div 
            ref={whyUsRef}
            className={`grid md:grid-cols-2 lg:grid-cols-5 gap-6 fade-up ${whyUsVisible ? 'visible' : ''}`}
          >
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
              <div className="relative">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "Their expertise in finding the right talent for our specialized roles has been exceptional. The team understands our industry requirements and consistently delivers quality candidates."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">HR Director, TechCorp Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your staffing needs and find the perfect candidates for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:scale-105 transition-transform duration-300 group">
                  Contact Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default StaffingSolutions;