import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Settings, 
  Boxes, 
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Zap,
  Star,
  Users,
  Award,
  Shield
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import heroImage from '@/assets/it-services-hero.jpg';
import webDevImage from '@/assets/web-development-service.jpg';
import appDevImage from '@/assets/app-development-service.jpg';
import cloudImage from '@/assets/cloud-infrastructure-service.jpg';
import openSourceImage from '@/assets/open-source-service.jpg';
import ecommerceImage from '@/assets/ecommerce-service.jpg';
import customSoftwareImage from '@/assets/custom-software-development.jpg';
const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance websites and web apps using modern frameworks. SEO-ready, accessible, and optimized for Core Web Vitals.",
    image: webDevImage,
    features: [
      "Responsive UX & accessibility",
      "SSR/SPA architectures",
      "Performance tuning & SEO"
    ]
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps with delightful UX, robust APIs, and secure data handling.",
    image: appDevImage,
    features: [
      "iOS & Android (native/cross)",
      "Offline-first & push notifications",
      "App store compliance & CI/CD"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Cloud strategy, migration, and managed services for scalable, cost-efficient operations.",
    image: cloudImage,
    features: [
      "Cloud strategy & architecture",
      "Secure migration & backup",
      "24/7 monitoring & SRE"
    ]
  },
  {
    icon: Boxes,
    title: "Open Source Customization",
    description: "Tailor open-source platforms to your needs with custom modules, integrations, and long-term support.",
    image: openSourceImage,
    features: [
      "Module/plugin development",
      "Upgrades & security hardening",
      "3rd‑party integrations"
    ]
  },
  {
    icon: Settings,
    title: "Custom Software Development",
    description: "End-to-end product engineering: discovery, design, development, QA, and ongoing evolution.",
    image: customSoftwareImage,
    features: [
      "Domain-driven design",
      "API-first & microservices",
      "Automated testing"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Conversion-focused storefronts and headless commerce with secure payments and analytics.",
    image: ecommerceImage,
    features: [
      "Headless & CMS integrations",
      "Payments, taxes, fulfilment",
      "Analytics & CRO"
    ]
  }
];

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Star, value: "12+", label: "States of India" },
  { icon: Award, value: "15+", label: "Cities of India" },
  { icon: Zap, value: "10,000+", label: "Beneficiaries" }
];

const routes = ['/web-development', '/app-development', '/cloud-strategy', '/open-source', '/custom-software', '/ecommerce'];

const ITServices = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const navigate = useNavigate();

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
                  IT Services for Modern Enterprises
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> — Strategy to Scale</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We deliver end-to-end software engineering—from discovery and design to build, deploy, and manage. Drawing on the reference blueprint, we’ve elevated every service with enterprise-grade practices and measurable outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Web & Mobile Engineering with performance, accessibility, and SEO baked in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cloud Strategy, Migration, Security, and Managed Services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Open Source Customization and Custom Software Development</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                <Button size="lg" variant="premium" className="group" >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button></Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src={heroImage} 
                alt="IT Services Hero" 
                className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 fade-up ${statsVisible ? 'visible' : ''}`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are constantly upgrading our services and our goal is to make the service standards to the levels to which you can expect us to perform when delivering our services.
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
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
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
                    <Link to={routes[index]}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button></Link>
                  </CardContent>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our IT services can help accelerate your digital transformation 
              and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <Button size="lg" variant="premium" className="group">
                Contact Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServices;