import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Settings, Clock, DollarSign, Shield, Users, Monitor, HeadphonesIcon } from 'lucide-react';
import managedServicesHero from '@/assets/managed-services-hero.jpg';

const ManagedServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="page-top-spacing pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Managed Services
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-lg text-muted-foreground">24/7 monitoring and support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-lg text-muted-foreground">Cost optimization and management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-lg text-muted-foreground">Security and compliance management</span>
                </div>
              </div>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-4">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src={managedServicesHero} 
                alt="Managed Services" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Monitoring & Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock monitoring of your cloud infrastructure with proactive issue detection and resolution.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: '0.1s'}}>
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cost Optimization & Management</h3>
              <p className="text-muted-foreground">
                Continuous cost analysis and optimization to ensure you get maximum value from your cloud investment.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: '0.2s'}}>
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security & Compliance Management</h3>
              <p className="text-muted-foreground">
                Comprehensive security monitoring and compliance management to protect your data and meet regulatory requirements.
              </p>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-card rounded-2xl p-12 shadow-xl mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">24/7 Operations</h4>
                <p className="text-muted-foreground">Continuous monitoring and support</p>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Expert Support</h4>
                <p className="text-muted-foreground">Access to cloud specialists</p>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Performance Tuning</h4>
                <p className="text-muted-foreground">Optimize system performance</p>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Security Updates</h4>
                <p className="text-muted-foreground">Regular security patches</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-card rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Managed Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Reduced Operational Burden</h4>
                  <p className="text-muted-foreground">Focus on your core business while we handle your cloud infrastructure management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Proactive Monitoring</h4>
                  <p className="text-muted-foreground">Identify and resolve issues before they impact your business operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cost Efficiency</h4>
                  <p className="text-muted-foreground">Optimize costs through continuous monitoring and resource management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Enhanced Security</h4>
                  <p className="text-muted-foreground">Comprehensive security management and compliance monitoring.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Scalable Solutions</h4>
                  <p className="text-muted-foreground">Scale your infrastructure management as your business grows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Expert Team</h4>
                  <p className="text-muted-foreground">Access to certified cloud professionals and specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-6">Let Us Manage Your Cloud</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Focus on growing your business while we take care of your cloud infrastructure with our comprehensive managed services.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-4 hover-scale">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedServices;