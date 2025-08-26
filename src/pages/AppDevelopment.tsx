import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Tablet, Monitor, CheckCircle, Code, Zap, Settings, Users, Target, FileText, Bug, TrendingUp, Shield, Clock, Wrench, Eye, Rocket, Database, Layers, Palette, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/app-development-service.jpg';

const AppDevelopment = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: platformsRef, isVisible: platformsVisible } = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Reasonably priced custom software services that are perfectly 'fit' with your needs to produce decisive outcomes that immediately increase your bottom line.",
      features: ["Custom Application Development", "Legacy System Modernization", "Enterprise Software Solutions", "ROI-Focused Development"]
    },
    {
      icon: Settings,
      title: "Application Portfolio Management",
      description: "Solutions to support, bolster, and manage an application portfolio with variety of development options in established and cutting-edge technologies.",
      features: ["Portfolio Assessment", "Technology Modernization", "Application Lifecycle Management", "Performance Optimization"]
    },
    {
      icon: Users,
      title: "End-to-End Solutions",
      description: "Comprehensive suite of solutions including consulting, smooth cutover, followed by technical and functional support for complete project success.",
      features: ["Consulting Services", "Seamless Migration", "Technical Support", "Functional Support"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Preventive, adaptive, and remedial maintenance services ensuring seamless transition of functional and technological improvements.",
      features: ["Preventive Maintenance", "Adaptive Solutions", "Remedial Services", "Knowledge Transfer"]
    },
    {
      icon: Bug,
      title: "Quality Assurance & Support",
      description: "Bug fixes, error diagnosis and correction, improvement suggestions, technical documentation upkeep, and 24x7 Helpdesk operation.",
      features: ["Bug Fixes & Error Correction", "Performance Monitoring", "Technical Documentation", "24x7 Helpdesk Support"]
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Guaranteed Continuous Productivity Improvement through established strategies, innovations, and best practices for sustained growth.",
      features: ["Performance Evaluation", "Strategy Implementation", "Innovation Integration", "Best Practices Application"]
    }
  ];

  const platforms = [
    { 
      icon: Smartphone,
      name: "Native Mobile Apps", 
      description: "iOS and Android applications with platform-specific optimizations",
      technologies: ["Swift/iOS", "Kotlin/Android", "React Native", "Flutter"]
    },
    { 
      icon: Monitor,
      name: "Desktop Applications", 
      description: "Cross-platform desktop solutions for Windows, Mac, and Linux",
      technologies: ["Electron", ".NET", "Java", "Python"]
    },
    { 
      icon: Database,
      name: "Web Applications", 
      description: "Dynamic web applications with modern frameworks and technologies",
      technologies: ["React", "Angular", "Vue.js", "Node.js"]
    }
  ];

  const workProcess = [
    {
      icon: Target,
      step: "01",
      title: "Requirement & Planning",
      description: "Understanding your business purpose, primary goals, and target audience to suggest the right plan for your project.",
      details: ["Business Analysis", "Goal Definition", "Target Audience Research", "Project Planning", "FREE Examination"]
    },
    {
      icon: Palette,
      step: "02", 
      title: "Design & Development",
      description: "Designing the right layouts, color combinations & screens. Implementing content, design screens and required frameworks.",
      details: ["UI/UX Design", "Screen Layouts", "Color Schemes", "Framework Implementation", "Content Integration"]
    },
    {
      icon: Eye,
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing to ensure all forms, scripts, and functionality work correctly before launch.",
      details: ["Functionality Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
    },
    {
      icon: Rocket,
      step: "04",
      title: "Launch & Support",
      description: "Launching your application with ongoing monitoring, updates, and maintenance for optimal performance.",
      details: ["Application Launch", "Performance Monitoring", "Regular Updates", "Continuous Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative page-top-spacing pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div 
            ref={heroRef}
            className={`grid lg:grid-cols-2 gap-12 items-center fade-up ${heroVisible ? 'visible' : ''}`}
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Custom Software &
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Application Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  At MangosOrange, we offer reasonably priced custom software services that are perfectly "fit" with your needs. We design and build technologies to produce decisive outcomes that immediately increase your ROI following a FREE examination of your particular demands and business processes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>End-to-end comprehensive suite of solutions with consulting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Established and cutting-edge technology development options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Technical and functional support with smooth cutover</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="premium" className="group">
                    Start Your App Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src={heroImage} 
                alt="Custom Application Development Services" 
                className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Application Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer solutions to support, bolster, and manage an application portfolio with a variety of development options in both established and cutting-edge technologies.
            </p>
          </div>
          
          <div 
            ref={servicesRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${servicesVisible ? 'visible' : ''}`}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm"
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
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Multi-Platform Application Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide clients with a variety of development options in both established and cutting-edge technologies across all major platforms.
            </p>
          </div>
          
          <div 
            ref={platformsRef}
            className={`grid md:grid-cols-3 gap-8 fade-up ${platformsVisible ? 'visible' : ''}`}
          >
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {platform.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {platform.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We make sure that existing development team's knowledge is seamlessly transferred. We collaborate with client's business and IT teams to ensure smooth transition of functional and technological improvements.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up ${processVisible ? 'visible' : ''}`}
          >
            {workProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {process.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                      {process.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {process.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Delight Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Lasting Connections & Continuous Support
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We create and preserve lasting connections with our customers. We promise to provide you with application solutions that are incredibly useful. We can manage various domains from various sectors thanks to our capabilities with dedicated Project Coordinators providing comprehensive project information.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24x7 Helpdesk</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock support with dedicated helpdesk for immediate assistance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Improvement</h3>
                <p className="text-sm text-muted-foreground">Guaranteed productivity improvement through established strategies and innovations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">Data integrity monitoring, performance tracking, and documentation maintenance</p>
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
              Ready to Build Your Custom Application?
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your ideas into powerful applications that increase your ROI. Complete our request information form and our consulting representative will get in touch with you shortly for a FREE examination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="premium" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">ROI+</div>
                <div className="text-sm text-muted-foreground">Immediate Bottom Line Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">FREE</div>
                <div className="text-sm text-muted-foreground">Business Process Examination</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Technical Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;