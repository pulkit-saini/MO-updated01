import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import cloudStrategyHero from '@/assets/cloud-strategy-hero.jpg';
import SEO from '@/components/SEO';

const CloudStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />


      {/* Hero Section */}
      <section className="page-top-spacing pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Cloud Strategy & Consulting
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At MangosOrange, we offer comprehensive cloud strategy and consulting services to help 
                businesses navigate their cloud journey effectively. Our services include a thorough cloud readiness 
                assessment to evaluate your current infrastructure and determine the best path forward. We also provide 
                detailed migration planning and execution to ensure a smooth transition to the cloud. Additionally, our team 
                designs robust cloud architectures tailored to your business needs, ensuring scalability, security, and 
                optimal performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Cloud readiness assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Migration planning and execution</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Cloud architecture design</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src={cloudStrategyHero} 
                alt="Cloud Strategy and Consulting hero image" 
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
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
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Readiness Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your current infrastructure and determine the best path forward for your cloud journey.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: '0.1s'}}>
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Migration Planning & Execution</h3>
              <p className="text-muted-foreground">
                Our team provides detailed migration planning and execution to ensure a smooth transition to the cloud.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: '0.2s'}}>
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Architecture Design</h3>
              <p className="text-muted-foreground">
                We design robust cloud architectures tailored to your business needs, ensuring scalability, security, and optimal performance.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-card rounded-2xl p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Why Choose <span className="md:hidden">MO</span><span className="hidden md:inline">MangosOrange</span>?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Expert Consultation</h4>
                  <p className="text-muted-foreground">Our cloud experts provide strategic guidance tailored to your business objectives.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cost Optimization</h4>
                  <p className="text-muted-foreground">We help you optimize cloud costs while maximizing performance and efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Security First</h4>
                  <p className="text-muted-foreground">Security and compliance are at the core of our cloud strategy recommendations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Scalable Solutions</h4>
                  <p className="text-muted-foreground">Our strategies ensure your cloud infrastructure can grow with your business.</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud strategy and consulting services can accelerate your digital transformation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-4 hover-scale">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudStrategy;