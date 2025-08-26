import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, GitBranch, Users, CheckCircle, Code, Heart, Shield, Zap, Globe, Star, Download, Coffee, Wrench, Database, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/open-source-service.jpg';

const OpenSource = () => {
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const technologiesRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const services = [
    {
      title: "Open Source Development",
      description: "Custom development using open source technologies and frameworks for scalable, cost-effective solutions",
      icon: Code,
      features: ["Custom Development", "Framework Integration", "API Development", "Microservices Architecture"]
    },
    {
      title: "Community Contributions",
      description: "Active participation in open source communities, contributing code, documentation, and bug fixes",
      icon: Users,
      features: ["Code Contributions", "Documentation", "Bug Fixes", "Feature Enhancements"]
    },
    {
      title: "License Management",
      description: "Comprehensive license compliance auditing and management for open source software usage",
      icon: Shield,
      features: ["License Auditing", "Compliance Management", "Risk Assessment", "Legal Consultation"]
    },
    {
      title: "Migration Services",
      description: "Seamless migration from proprietary to open source solutions with minimal downtime",
      icon: GitBranch,
      features: ["System Migration", "Data Transfer", "Testing & Validation", "Staff Training"]
    },
    {
      title: "Support & Maintenance",
      description: "Enterprise-grade support and maintenance for open source solutions and deployments",
      icon: Wrench,
      features: ["24/7 Support", "Performance Monitoring", "Security Updates", "System Optimization"]
    },
    {
      title: "Training & Consultation",
      description: "Expert training and consultation services for open source technologies and best practices",
      icon: Coffee,
      features: ["Technical Training", "Best Practices", "Architecture Review", "Performance Optimization"]
    }
  ];

  const technologies = [
    { 
      name: "Linux & Unix Systems", 
      description: "Enterprise-grade Linux distributions, system administration, and server management",
      icon: Server,
      details: "Ubuntu, CentOS, Red Hat, SUSE"
    },
    { 
      name: "Web Technologies", 
      description: "Modern web frameworks and technologies for scalable applications",
      icon: Globe,
      details: "React, Angular, Vue.js, Node.js"
    },
    { 
      name: "Database Solutions", 
      description: "Open source database management and optimization services",
      icon: Database,
      details: "PostgreSQL, MySQL, MongoDB, Redis"
    },
    { 
      name: "Cloud & DevOps", 
      description: "Container orchestration, CI/CD pipelines, and cloud infrastructure",
      icon: Cloud,
      details: "Docker, Kubernetes, Jenkins, Terraform"
    },
    { 
      name: "Security Tools", 
      description: "Open source security solutions for comprehensive protection",
      icon: Shield,
      details: "OpenSSL, Nginx, Apache, Security Scanning"
    },
    { 
      name: "Development Tools", 
      description: "Version control, collaboration, and development environment setup",
      icon: Code,
      details: "Git, GitLab, VS Code, Eclipse"
    }
  ];

  const benefits = [
    { 
      icon: Heart, 
      title: "Cost Effectiveness", 
      description: "Eliminate expensive licensing fees while maintaining enterprise-quality solutions",
      metric: "Up to 60% cost reduction"
    },
    { 
      icon: Users, 
      title: "Global Community", 
      description: "Leverage the power of worldwide developer communities for support and innovation",
      metric: "Millions of contributors"
    },
    { 
      icon: Zap, 
      title: "Rapid Innovation", 
      description: "Faster development cycles with continuous updates and feature enhancements",
      metric: "Faster time-to-market"
    },
    { 
      icon: Shield, 
      title: "Enhanced Security", 
      description: "Transparent code review by global communities ensures robust security",
      metric: "Community-verified security"
    },
    { 
      icon: Star, 
      title: "Flexibility & Control", 
      description: "Complete customization capabilities without vendor lock-in constraints",
      metric: "100% customizable"
    },
    { 
      icon: Download, 
      title: "Easy Scalability", 
      description: "Scale solutions seamlessly from startup to enterprise level",
      metric: "Unlimited scalability"
    }
  ];

  const portfolioProjects = [
    {
      name: "E-Commerce Platform",
      technology: "MEAN Stack",
      description: "Complete e-commerce solution built with MongoDB, Express.js, Angular, and Node.js"
    },
    {
      name: "Healthcare Management",
      technology: "LAMP Stack",
      description: "Patient management system using Linux, Apache, MySQL, and PHP"
    },
    {
      name: "Financial Dashboard",
      technology: "React + PostgreSQL",
      description: "Real-time financial analytics dashboard with React frontend and PostgreSQL backend"
    },
    {
      name: "IoT Data Platform",
      technology: "Docker + Kubernetes",
      description: "Scalable IoT data processing platform using containerized microservices"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="page-top-spacing pb-12 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div 
            ref={heroRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Enterprise Open Source
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Harness the power of open source technologies to build scalable, cost-effective, and innovative solutions. 
                Our expert team specializes in developing, deploying, and maintaining enterprise-grade open source applications 
                that drive business growth while reducing operational costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Open Source Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src={heroImage} 
                alt="Open Source Web Development Services - Professional Solutions by MangoOrange" 
                className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={featuresRef.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Open Source Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From development to deployment, we provide end-to-end open source solutions 
              tailored to your business requirements and technical specifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary/20 hover:border-l-primary cursor-pointer ${
                    featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={technologiesRef.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              technologiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Advanced Open Source Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mastery in cutting-edge open source platforms, frameworks, and tools that power 
              modern enterprise applications and digital transformation initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center border-2 border-transparent hover:border-primary/20 ${
                    technologiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {tech.description}
                    </CardDescription>
                    <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-3 h-3" />
                      {tech.details}
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Recent Open Source Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of our latest open source implementations and custom solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {project.technology}
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={benefitsRef.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              benefitsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Open Source Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the strategic advantages and business benefits of adopting open source 
              technologies for your enterprise applications and digital infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/50 ${
                    benefitsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-3">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {benefit.description}
                    </CardDescription>
                    <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Zap className="w-3 h-3" />
                      {benefit.metric}
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-secondary overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPgo=')] opacity-20"></div>
        <div 
          ref={ctaRef.ref}
          className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
            ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform with Open Source?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have reduced costs, increased flexibility, and accelerated 
              innovation with our expert open source solutions. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Project Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-white/80">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-white/80">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-sm text-white/80">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenSource;