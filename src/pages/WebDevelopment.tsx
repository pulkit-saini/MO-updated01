import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Smartphone, Zap, CheckCircle, Code, Monitor, Layers, Users, Target, Lightbulb, FileText, Rocket, Shield, Eye, Settings, Search, Database, Layout, Palette, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/web-development-service.jpg';

const WebDevelopment = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();

  const services = [
    {
      icon: Layout,
      title: "Custom Website Development",
      description: "Fully-functional, contemporary websites built with cutting-edge web development approaches to expand your online presence and provide a competitive edge.",
      features: ["Custom Design & Development", "Responsive Web Design", "W3C Standards Compliance", "Cross-Browser Compatibility"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Modern websites optimized for all devices with mobile-first approach ensuring exceptional user experience across smartphones, tablets, and desktops.",
      features: ["Progressive Web Apps", "Mobile Optimization", "Touch-Friendly Interface", "App-Like Experience"]
    },
    {
      icon: Shield,
      title: "E-commerce Solutions",
      description: "Robust online stores and e-commerce platforms with secure payment gateways, inventory management, and user-friendly shopping experiences.",
      features: ["Payment Gateway Integration", "Inventory Management", "Order Processing", "Customer Management"]
    },
    {
      icon: Settings,
      title: "CMS Development",
      description: "Content Management Systems that empower you to easily update and manage your website content without technical knowledge.",
      features: ["WordPress Development", "Custom CMS", "Content Management", "User-Friendly Admin Panel"]
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Search engine optimized websites with lightning-fast loading speeds and performance optimization for better user experience and search rankings.",
      features: ["SEO Optimization", "Performance Tuning", "Speed Optimization", "Core Web Vitals"]
    },
    {
      icon: Database,
      title: "API Integration & Backend",
      description: "Seamless API integrations and robust backend development to connect your website with third-party services and databases.",
      features: ["RESTful APIs", "Database Design", "Third-party Integrations", "Backend Development"]
    }
  ];

  const workProcess = [
    {
      icon: Target,
      step: "01",
      title: "Requirement & Planning",
      description: "Understanding your business purpose, primary goals, and target audience to suggest the right plan for your project.",
      details: ["Business Analysis", "Goal Definition", "Target Audience Research", "Project Planning"]
    },
    {
      icon: Palette,
      step: "02", 
      title: "Design & Development",
      description: "Designing the right page layouts, color combinations & screens. Implementing content, design screens and required frameworks.",
      details: ["UI/UX Design", "Responsive Layouts", "Framework Implementation", "Content Integration"]
    },
    {
      icon: Eye,
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing to ensure all forms, scripts, and functionality work correctly before launch.",
      details: ["Functionality Testing", "Cross-Browser Testing", "Performance Testing", "Security Testing"]
    },
    {
      icon: Rocket,
      step: "04",
      title: "Launch & Maintenance",
      description: "Launching your website and providing ongoing monitoring, updates, and maintenance for optimal performance.",
      details: ["Website Launch", "Performance Monitoring", "Regular Updates", "Technical Support"]
    }
  ];

  const technologies = [
    { 
      icon: Code,
      name: "React & Next.js", 
      description: "Modern frontend frameworks for dynamic, interactive web applications",
      category: "Frontend"
    },
    { 
      icon: Database,
      name: "Node.js & Express", 
      description: "Powerful backend development for scalable server-side applications",
      category: "Backend"
    },
    { 
      icon: Layers,
      name: "PHP & Laravel", 
      description: "Robust server-side scripting and enterprise-grade framework",
      category: "Backend"
    },
    { 
      icon: Monitor,
      name: "WordPress & CMS", 
      description: "Content management systems for easy website maintenance",
      category: "CMS"
    },
    { 
      icon: Database,
      name: "MySQL & MongoDB", 
      description: "Reliable database solutions for data storage and management",
      category: "Database"
    },
    { 
      icon: Globe,
      name: "Cloud Hosting", 
      description: "Scalable cloud hosting solutions for optimal performance",
      category: "Infrastructure"
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
                  Custom Web Solutions & 
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Modern Development</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We specialize in creating web-based solutions focused on user needs. Our natural ability to combine appropriate strategy, technology, and design guarantees solutions that exceed client standards. Build powerful, scalable web applications with cutting-edge technologies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Fully-functional, contemporary websites for online presence expansion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cutting-edge web development approaches with complete attention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>W3C Standards and Client Hints Technology implementation</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="premium" className="group">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src={heroImage} 
                alt="Professional Web Development Services" 
                className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide a variety of services to our clients in the online web arena, spanning the entire development and design process with cutting-edge approaches.
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

      {/* Work Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our web development process includes developing comprehensive strategy, planning design workshops, building website maps, and creating dynamic user interfaces.
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
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center pb-4">
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

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Modern Technologies & Frameworks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement the most cutting-edge web development approaches using modern tools and frameworks for robust, scalable solutions.
            </p>
          </div>
          
          <div 
            ref={techRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${techVisible ? 'visible' : ''}`}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Delight Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Creating Lasting Connections
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We create and preserve lasting connections with our customers. We promise to provide you with online solutions that are incredibly useful. We can manage various domains from various sectors thanks to our capabilities. We develop dynamic websites and web applications with W3C Standards and Client Hints Technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Project Coordination</h3>
                <p className="text-sm text-muted-foreground">Dedicated Project Coordinator for comprehensive project information and task management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Domain Expertise</h3>
                <p className="text-sm text-muted-foreground">Managing various domains from different sectors with specialized knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Annual Maintenance</h3>
                <p className="text-sm text-muted-foreground">Ongoing maintenance, consulting, and support for optimal website performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your project and create a web solution that drives results for your business. Complete our request information form and our consulting representative will get in touch with you shortly.
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
                <div className="text-2xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Websites Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;