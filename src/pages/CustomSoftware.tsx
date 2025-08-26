import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Cog, Layers, CheckCircle, Code, Zap, Database, Users, Monitor, BarChart3, Target, Rocket, Clock, Shield, Lightbulb, Building, Cpu, Cloud, Lock, Workflow, Brain, LineChart, UserCheck, FileText, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import customSoftwareHero from '@/assets/custom-software-hero.jpg';
import customSoftwareDev from '@/assets/custom-software-development.jpg';
import softwareTeamCollaboration from '@/assets/software-team-collaboration.jpg';

const CustomSoftware = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  const coreServices = [
    {
      icon: Database,
      title: "Enterprise CRM/ERP Solutions",
      description: "Comprehensive customer relationship and enterprise resource planning solutions that operate seamlessly across all platforms - mobile, tablet, and desktop with real-time synchronization.",
      features: [
        "Multi-platform compatibility (iOS, Android, Web)",
        "Real-time sales tracking and performance monitoring",
        "Advanced reporting with closed-loop analytics",
        "Third-party API integration and data migration",
        "Cloud-based hosting with 99.9% uptime guarantee",
        "Custom dashboard and role-based access control"
      ],
      highlight: "Boost sales performance by 40% with streamlined CRM processes",
      stats: "500+ CRM implementations"
    },
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Strategic marketing plan analysis and learning management systems powered by AI to maximize your marketing ROI and provide predictive business insights.",
      features: [
        "AI-driven marketing spend optimization (10%-50% budget allocation)",
        "Predictive lead scoring and conversion analytics",
        "Machine learning sales-ratio conversion models",
        "Intelligent educational content management",
        "Real-time performance monitoring and alerts",
        "Advanced data visualization and reporting"
      ],
      highlight: "Increase conversion rates by 35% with data-driven insights",
      stats: "95% accuracy in lead scoring"
    },
    {
      icon: Building,
      title: "Legacy System Modernization",
      description: "Transform outdated legacy systems into modern, scalable enterprise applications with zero downtime migration and enhanced security frameworks.",
      features: [
        "Zero-downtime legacy system migration",
        "Modern API-first architecture design",
        "Enhanced security and compliance frameworks",
        "Automated business process workflows",
        "Microservices architecture implementation",
        "Progressive modernization approach"
      ],
      highlight: "Reduce operational costs by 60% with modernized systems",
      stats: "100+ successful migrations"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Requirement & Planning",
      description: "We begin by understanding your business purpose, primary goals, and target audience to suggest the optimal project plan.",
      icon: Target,
      details: "Comprehensive business analysis and strategic planning phase"
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Based on gathered insights, we design optimal page layouts, color combinations, and implement required frameworks and CMS.",
      icon: Code,
      details: "Modern design principles with robust development practices"
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "Rigorous testing of all forms and scripts before launch, followed by continuous monitoring and regular updates.",
      icon: Rocket,
      details: "Quality assurance and ongoing maintenance support"
    }
  ];

  const keyBenefits = [
    {
      icon: Clock,
      title: "9+ Years of Excellence",
      description: "Over 9 years of specialized experience in IT industry serving 200+ clients across diverse sectors including Real Estate, Healthcare, and Finance.",
      metric: "200+ clients served"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security", 
      description: "Complete lifecycle solutions with SOC 2 compliance, end-to-end encryption, and enterprise-grade security protocols for data protection.",
      metric: "100% security compliance"
    },
    {
      icon: UserCheck,
      title: "Dedicated Project Management",
      description: "Each project gets a certified project manager providing comprehensive updates, timeline tracking, and milestone deliverables with 24/7 support.",
      metric: "98% on-time delivery"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Quality Assurance",
      description: "W3C Standards compliance, Client Hints Technology, and cutting-edge frameworks for dynamic websites and robust web applications.",
      metric: "99.9% uptime guarantee"
    }
  ];

  const industries = [
    { name: "Real Estate", icon: Building, specialty: "Property management and CRM solutions", projects: "50+ projects" },
    { name: "Healthcare", icon: Shield, specialty: "HIPAA-compliant patient management systems", projects: "30+ projects" },
    { name: "Education", icon: Monitor, specialty: "Learning management and assessment platforms", projects: "40+ projects" },
    { name: "Finance", icon: Database, specialty: "Secure financial and trading applications", projects: "25+ projects" },
    { name: "Manufacturing", icon: Settings, specialty: "IoT-enabled process automation solutions", projects: "35+ projects" },
    { name: "Retail", icon: Users, specialty: "E-commerce and omnichannel inventory systems", projects: "45+ projects" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`page-top-spacing pb-12 px-4 relative overflow-hidden fade-up ${heroVisible ? 'visible' : ''}`}
      >
        <div className="absolute inset-0">
          <img 
            src={customSoftwareHero} 
            alt="Custom Software Development" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/90 to-secondary/10"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Enterprise Custom Software with
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 9+ Years Expertise</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                MangosOrange delivers enterprise-grade custom software solutions with proven expertise across 200+ successful projects. From AI-powered business intelligence to legacy system modernization, we provide complete lifecycle solutions that transform your business operations and drive measurable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 p-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Database className="w-20 h-20 text-primary mx-auto animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Enterprise Ready</h3>
                  <p className="text-muted-foreground">Complete Lifecycle Solutions</p>
                  <div className="flex justify-center gap-4">
                    <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section 
        ref={servicesRef}
        className={`py-20 px-4 fade-up ${servicesVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Custom Software Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software development services designed for your unique business requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-xs font-medium text-primary">{service.highlight}</p>
                      </div>
                      <div className="p-3 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                        <p className="text-xs font-medium text-secondary">{service.stats}</p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section 
        ref={processRef}
        className={`py-20 px-4 bg-muted/30 fade-up ${processVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Structured Development Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from concept to deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card 
                  key={index} 
                  className="group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-6">
                    <div className="relative mx-auto mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {process.step}
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <Icon className="w-8 h-8 text-primary bg-background rounded-full p-1.5 shadow-lg" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {process.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {process.description}
                    </CardDescription>
                    <div className="text-sm text-primary font-medium">
                      {process.details}
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section 
        ref={featuresRef}
        className={`py-20 px-4 fade-up ${featuresVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Custom Software Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create and preserve lasting connections with our customers through comprehensive solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="group text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{benefit.description}</p>
                    <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{benefit.metric}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We manage various domains from diverse sectors with dynamic websites and web applications using W3C Standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-foreground">{industry.name}</h3>
                          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">{industry.projects}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{industry.specialty}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We leverage the latest technologies and frameworks to build scalable, secure, and future-ready applications that drive business growth.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { name: "React/Vue.js", icon: Code },
                  { name: "Node.js/Python", icon: Cpu },
                  { name: "AWS/Azure", icon: Cloud },
                  { name: "Microservices", icon: Workflow },
                  { name: "AI/ML", icon: Brain },
                  { name: "Blockchain", icon: Lock }
                ].map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg hover:shadow-md transition-shadow">
                      <TechIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img 
                src={customSoftwareDev} 
                alt="Software Development Technology Stack" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Delight Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={softwareTeamCollaboration} 
                alt="Software Development Team Collaboration" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Customer Delight Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We develop dynamic websites and web applications with W3C Standards and Client Hints Technology. Each project gets a dedicated Project Coordinator providing comprehensive information on tasks, timelines, and deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Maintenance Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Support & Maintenance
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We promise to provide incredibly useful online solutions spanning the entire development and design process with ongoing support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Dedicated Project Coordination</h3>
                  <p className="text-muted-foreground">Each project gets a dedicated coordinator for comprehensive project updates and timeline management.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">W3C Standards Compliance</h3>
                  <p className="text-muted-foreground">All our solutions follow W3C standards and implement Client Hints Technology for optimal performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Support & Maintenance</h3>
                  <p className="text-muted-foreground">Annual maintenance and consulting services to ensure your software continues to perform optimally.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <Lightbulb className="w-20 h-20 text-primary mx-auto" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Innovation Driven</h3>
                  <p className="text-muted-foreground">Complete Development Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's create custom software solutions that perfectly match your business requirements. Complete our request form and our consulting representative will get in touch shortly.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="group shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftware;