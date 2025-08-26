import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Users, 
  CreditCard, 
  Calendar, 
  Package, 
  FlaskConical, 
  BarChart3, 
  Play, 
  Clock, 
  Shield, 
  Cloud, 
  TrendingUp,
  Star,
  CheckCircle,
  Phone,
  ArrowRight,
  Hospital,
  Activity,
  Database,
  Zap
} from 'lucide-react';
import hmisHeroImage from '@/assets/hmis-hero.jpg';
import { Link } from 'react-router-dom';

const HMIS = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();



  const features = [
    {
      icon: Users,
      title: "Patient Registration & EMR",
      description: "Complete electronic medical records with patient registration, history tracking, and digital documentation."
    },
    {
      icon: CreditCard,
      title: "Billing & Insurance Integration",
      description: "Automated billing systems with insurance claim processing and payment gateway integration."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Smart scheduling system with automated reminders and doctor availability management."
    },
    {
      icon: Package,
      title: "Pharmacy & Inventory Management",
      description: "Real-time inventory tracking, automated reordering, and pharmacy integration."
    },
    {
      icon: FlaskConical,
      title: "Lab Reports & Diagnostics",
      description: "Digital lab management with result tracking, report generation, and diagnostic workflows."
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards & Analytics",
      description: "Comprehensive analytics with KPI tracking, performance metrics, and business intelligence."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Operations",
      description: "Reduce administrative time by 60% with automated workflows",
      stat: "60%"
    },
    {
      icon: TrendingUp,
      title: "Improved Patient Experience",
      description: "Enhanced patient satisfaction with streamlined processes",
      stat: "85%"
    },
    {
      icon: Shield,
      title: "Reduced Manual Errors",
      description: "Minimize human errors with automated data validation",
      stat: "90%"
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "HIPAA-compliant cloud infrastructure with 99.9% uptime",
      stat: "99.9%"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      hospital: "Metropolitan General Hospital",
      content: "The HMIS platform transformed our operations completely. Patient wait times decreased by 40% and our staff productivity increased significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      hospital: "Regional Medical Center",
      content: "Implementation was seamless and the support team was exceptional. The analytics dashboard gives us insights we never had before.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Department Head",
      hospital: "City Healthcare Network",
      content: "The EMR system is intuitive and saves us hours daily. The integration with lab systems is flawless.",
      rating: 5
    }
  ];

  const techStack = [
    { name: "React & TypeScript", description: "Modern frontend development" },
    { name: "AWS Cloud Infrastructure", description: "Scalable and secure hosting" },
    { name: "Node.js Backend", description: "High-performance server architecture" },
    { name: "PostgreSQL Database", description: "Reliable data management" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden page-top-spacing">
        <div className="absolute inset-0">
          <img 
            src={hmisHeroImage} 
            alt="Healthcare professionals in modern hospital setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent"></div>
        </div>
        
        <div 
          ref={heroRef.ref}
          className={`relative z-10 container mx-auto px-4 lg:px-6 ${
            heroRef.isVisible ? 'fade-up visible' : 'fade-up'
          }`}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Smarter Healthcare.{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Seamless Operations.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground mb-8 max-w-3xl leading-relaxed">
              Our HMIS platform streamlines patient care, billing, inventory, and records in one centralized dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
              <Button 
                variant="premium" 
                size="lg"
                className="group"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div 
            ref={featuresRef.ref}
            className={`text-center mb-16 ${
              featuresRef.isVisible ? 'fade-up visible' : 'fade-up'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Healthcare Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline every aspect of your healthcare operations with our integrated platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 card-hover ${
                  featuresRef.isVisible ? 'fade-up visible' : 'fade-up'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              See HMIS in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Watch how our platform transforms healthcare operations
            </p>
            
            <div className="relative group cursor-pointer" onClick={() => setShowVideoModal(true)}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl flex items-end p-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Demo</h3>
                  <p className="text-muted-foreground">See how easy it is to manage your hospital operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div 
            ref={benefitsRef.ref}
            className={`text-center mb-16 ${
              benefitsRef.isVisible ? 'fade-up visible' : 'fade-up'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Measurable Results for Your Hospital
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of healthcare providers already transforming their operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`text-center group ${
                  benefitsRef.isVisible ? 'fade-up visible' : 'fade-up'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div 
            ref={testimonialsRef.ref}
            className={`text-center mb-16 ${
              testimonialsRef.isVisible ? 'fade-up visible' : 'fade-up'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what healthcare professionals are saying about our HMIS platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 ${
                  testimonialsRef.isVisible ? 'fade-up visible' : 'fade-up'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.hospital}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Built on Modern Technology
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our HMIS platform leverages cutting-edge technology for reliability and scalability
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 lg:px-6">
          <div 
            ref={ctaRef.ref}
            className={`max-w-4xl mx-auto text-center ${
              ctaRef.isVisible ? 'fade-up visible' : 'fade-up'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-8">
              Ready to Transform Your Hospital Operations?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              Join leading healthcare providers who trust MangosOrange HMIS for their critical operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              className="absolute -top-12 right-0 text-foreground hover:text-primary"
              onClick={() => setShowVideoModal(false)}
            >
              ✕ Close
            </Button>
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">
                <video
                  src="/HMIS_Platform_Video_Creation_Request.mp4" // put your video in public/videos or replace with a URL
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                />
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HMIS;