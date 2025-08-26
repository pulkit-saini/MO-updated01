import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, CreditCard, Truck, CheckCircle, Store, TrendingUp, Package, Users, BarChart3, Shield, Zap, Target, Clock, Globe, Settings, Database, Smartphone, Lock, Search, MessageSquare, Headphones, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ecommerceHero from '@/assets/ecommerce-hero.jpg';
import ecommercePlatform from '@/assets/ecommerce-platform.jpg';
import ecommerceAnalytics from '@/assets/ecommerce-analytics.jpg';

const Ecommerce = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: workflowRef, isVisible: workflowVisible } = useScrollAnimation();

  const coreCapabilities = [
    {
      icon: Package,
      title: "Advanced Product Management",
      description: "Comprehensive product catalog management with AI-powered categorization, advanced inventory tracking, and automated stock management.",
      features: [
        "Real-time product catalog updates with bulk operations",
        "AI-powered product categorization and tagging",
        "Advanced inventory tracking with predictive analytics",
        "Multi-variant product management with attributes",
        "Automated stock alerts and reordering system",
        "Product performance analytics and recommendations"
      ],
      metric: "99.9% inventory accuracy"
    },
    {
      icon: ShoppingCart,
      title: "Smart Shopping Experience",
      description: "Intelligent shopping cart solution with personalized recommendations, seamless checkout process, and advanced recovery systems.",
      features: [
        "AI-powered product recommendations",
        "One-click checkout and guest options",
        "Smart abandoned cart recovery with analytics",
        "Wishlist and favorites management",
        "Multi-currency and multi-language support",
        "Mobile-optimized shopping experience"
      ],
      metric: "40% increase in conversions"
    },
    {
      icon: CreditCard,
      title: "Secure Payment Gateway",
      description: "Enterprise-grade payment processing with multiple gateways, advanced fraud protection, and PCI DSS compliance.",
      features: [
        "Multiple payment gateway integration (Stripe, PayPal, etc.)",
        "Advanced fraud detection and prevention",
        "PCI DSS Level 1 compliance",
        "Cryptocurrency payment support",
        "Recurring billing and subscription management",
        "Real-time payment analytics and reporting"
      ],
      metric: "99.99% payment uptime"
    },
    {
      icon: Truck,
      title: "Intelligent Shipping Solutions",
      description: "Multi-carrier shipping integration with real-time rates, automated label generation, and comprehensive tracking systems.",
      features: [
        "Multi-carrier integration (FedEx, UPS, DHL, USPS)",
        "Real-time shipping calculations and comparisons",
        "Automated shipping label generation",
        "Advanced order tracking with notifications",
        "International shipping and customs management",
        "Delivery route optimization"
      ],
      metric: "95% on-time delivery"
    },
    {
      icon: Settings,
      title: "Automated Order Processing",
      description: "Complete order management system with AI-powered automation, workflow optimization, and customer communication.",
      features: [
        "AI-powered order processing automation",
        "Advanced order status management",
        "Automated customer notifications and updates",
        "Intelligent return and refund processing",
        "Order analytics and performance tracking",
        "Custom workflow configuration"
      ],
      metric: "80% faster processing"
    },
    {
      icon: BarChart3,
      title: "Advanced Inventory Intelligence",
      description: "AI-driven inventory management with predictive analytics, multi-location support, and supplier integration.",
      features: [
        "Predictive inventory analytics and forecasting",
        "Real-time stock tracking across locations",
        "Automated low stock alerts and reordering",
        "Multi-location and multi-warehouse support",
        "Supplier integration and management",
        "Inventory optimization recommendations"
      ],
      metric: "60% reduction in stockouts"
    }
  ];

  const businessBenefits = [
    {
      icon: Globe,
      title: "Global Market Expansion",
      description: "E-commerce provides the most cost-effective way to reach international markets, expand your customer base, and tap into niche markets with 24/7 availability.",
      highlight: "Reach 4.9+ billion global internet users",
      stats: "300% average market expansion"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth & Optimization",
      description: "Advanced e-commerce platforms with AI-powered analytics can exponentially grow your company's sales and revenue through data-driven optimization.",
      highlight: "AI-driven sales optimization and personalization",
      stats: "Average 150% revenue increase"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Trust",
      description: "Our e-commerce solutions provide bank-level security, SSL encryption, and compliance frameworks ensuring a safe and trusted shopping experience.",
      highlight: "Enterprise-grade security with 99.9% uptime",
      stats: "Zero security breaches record"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Requirement & Planning",
      description: "We understand your business purpose, primary goals, and target audience to suggest the right e-commerce plan for your project.",
      icon: Target,
      details: "Comprehensive business analysis and e-commerce strategy development"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Based on gathered information, we design optimal page layouts, color combinations, and implement required frameworks and CMS.",
      icon: Settings,
      details: "Modern e-commerce design with robust development practices"
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "Before launch, we rigorously test all forms and scripts. Post-launch, we provide opinion monitoring and regular updates.",
      icon: Zap,
      details: "Quality assurance and ongoing maintenance support"
    }
  ];

  const serviceHighlights = [
    {
      icon: Clock,
      title: "Innovation & Expertise",
      description: "Creating better e-commerce futures through cutting-edge technology, AI integration, and accumulated expertise spanning 500+ successful projects.",
      metric: "500+ projects delivered"
    },
    {
      icon: Users,
      title: "Long-term Partnership",
      description: "We cultivate lasting partnerships with clients through comprehensive support, ongoing optimization, and dedicated account management for mutual growth.",
      metric: "95% client retention rate"
    },
    {
      icon: Database,
      title: "Complete E-commerce Ecosystem",
      description: "We provide end-to-end e-commerce solutions spanning design, development, marketing integration, analytics, and annual maintenance services.",
      metric: "360° solution coverage"
    },
    {
      icon: Shield,
      title: "Performance & Standards",
      description: "Our e-commerce platforms are built with W3C standards, mobile-first design, and performance optimization achieving 99.9% uptime reliability.",
      metric: "99.9% uptime guarantee"
    }
  ];

  const industries = [
    { name: "Fashion & Apparel", icon: Store, focus: "Luxury and fast-fashion online stores", growth: "45% growth" },
    { name: "Electronics & Tech", icon: Smartphone, focus: "Consumer electronics and gadgets marketplace", growth: "60% growth" },
    { name: "Health & Beauty", icon: Shield, focus: "Cosmetics, skincare, and wellness products", growth: "35% growth" },
    { name: "Food & Beverage", icon: Package, focus: "Gourmet foods, beverages, and meal delivery", growth: "80% growth" },
    { name: "Home & Garden", icon: Settings, focus: "Furniture, decor, and home improvement", growth: "40% growth" },
    { name: "Sports & Fitness", icon: Target, focus: "Athletic gear, equipment, and supplements", growth: "55% growth" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`page-top-spacing pb-12 relative overflow-hidden fade-up ${heroVisible ? 'visible' : ''}`}
      >
        <div className="absolute inset-0">
          <img 
            src={ecommerceHero} 
            alt="E-commerce Development Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/90 to-secondary/10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Advanced E-Commerce Platform with
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI-Powered Features</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                MangosOrange E-Commerce delivers enterprise-grade online retail solutions with complete control over every aspect of your digital storefront. From AI-powered product recommendations to advanced analytics, we provide the tools and capabilities needed to dominate your market and achieve exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Start Your Store
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 p-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <ShoppingCart className="w-20 h-20 text-primary mx-auto animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">E-Commerce Ready</h3>
                  <p className="text-muted-foreground">Complete Control & Management</p>
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

      {/* Core Capabilities Section */}
      <section 
        ref={featuresRef}
        className={`py-20 fade-up ${featuresVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive E-Commerce Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access real-time information about product categories with our sophisticated online stock and inventory management system
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {capability.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-xs font-medium text-primary">{capability.metric}</p>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose E-Commerce for Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              E-commerce provides the most affordable way to reach new markets and grow your business exponentially
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="pb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {benefit.description}
                    </CardDescription>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <p className="text-xs font-medium text-primary">{benefit.highlight}</p>
                      </div>
                      <div className="p-3 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                        <p className="text-xs font-medium text-secondary">{benefit.stats}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section 
        ref={processRef}
        className={`py-20 fade-up ${processVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Build Your E-Commerce Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful e-commerce deployment from concept to ongoing success
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

      {/* Service Highlights Section */}
      <section 
        ref={workflowRef}
        className={`py-20 bg-muted/30 fade-up ${workflowVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create and preserve lasting connections with our customers through comprehensive e-commerce solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{highlight.description}</p>
                    <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{highlight.metric}</div>
                  </CardContent>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We manage various domains from different sectors with dynamic e-commerce solutions
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
                          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">{industry.growth}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{industry.focus}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Delight Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Customer Delight Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our years of involvement in IT services have given us the ability to comprehend and value the needs of businesses today. We develop dynamic e-commerce websites with W3C Standards and Client Hints Technology, designating a Project Coordinator for comprehensive project information.
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
                  <p className="text-muted-foreground">Each project gets a dedicated coordinator providing comprehensive information on tasks, timelines, and deliverables.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">W3C Standards & Technology</h3>
                  <p className="text-muted-foreground">All our e-commerce solutions follow W3C standards and implement Client Hints Technology for optimal performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Support & Maintenance</h3>
                  <p className="text-muted-foreground">Annual maintenance and consulting services plus regular updates to ensure your e-commerce platform performs optimally.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <Store className="w-20 h-20 text-primary mx-auto" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">E-Commerce Excellence</h3>
                  <p className="text-muted-foreground">Complete Development Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Platform Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced E-Commerce Platform
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our e-commerce platform provides complete control over every aspect of your online business, from product management to customer analytics.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Mobile-First", icon: Smartphone },
                  { name: "SEO Optimized", icon: Search },
                  { name: "Analytics", icon: BarChart3 },
                  { name: "Live Chat", icon: MessageSquare },
                  { name: "Security", icon: Lock },
                  { name: "24/7 Support", icon: Headphones }
                ].map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg hover:shadow-md transition-shadow">
                      <FeatureIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{feature.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img 
                src={ecommercePlatform} 
                alt="E-commerce Platform Interface" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Performance Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={ecommerceAnalytics} 
                alt="E-commerce Analytics Dashboard" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Data-Driven Business Intelligence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Gain deep insights into your e-commerce performance with advanced analytics, customer behavior tracking, and predictive business intelligence.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Real-time Sales Analytics", desc: "Track sales performance and trends in real-time" },
                  { title: "Customer Behavior Analysis", desc: "Understand customer journey and optimize conversions" },
                  { title: "Inventory Optimization", desc: "AI-powered inventory forecasting and management" },
                  { title: "Performance Monitoring", desc: "Monitor site performance and user experience metrics" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Launch Your E-Commerce Store?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's create an e-commerce platform that provides complete control over your business processes. Complete our request form and our consulting representative will get in touch shortly.
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

export default Ecommerce;