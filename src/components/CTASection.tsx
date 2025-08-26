import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={headerRef}
            className={`fade-up ${headerVisible ? 'visible' : ''}`}
          >
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build Something
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Amazing Together</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Whether you need top tech talent or cutting-edge IT solutions, MangosOrange is here to help. 
              Get in touch today and discover how we can accelerate your success.
            </p>
          </div>

          <div 
            ref={cardsRef}
            className={`grid md:grid-cols-2 gap-8 mb-12 fade-up ${cardsVisible ? 'visible' : ''}`}
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl card-hover"
              style={{ animationDelay: '0ms' }}
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Staffing Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Need skilled developers, DevOps engineers, or tech leaders? We'll find the perfect fit for your team.
              </p>
              <Link to="/staffing">
              <Button 
                size="lg" 
                variant="premium"
                className="w-full group"
              >
                View Staffing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button></Link>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl card-hover"
              style={{ animationDelay: '100ms' }}
            >
              <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">IT Services</h3>
              <p className="text-muted-foreground mb-6">
                Transform your technology with cloud solutions, security, and digital transformation expertise.
              </p>
              <Link to="/it-services">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group"
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button></Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Not Sure Where to Start?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation with our experts. We'll discuss your challenges and 
              recommend the best approach for your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="premium"
                className="group"
                onClick={() => window.location.href = 'tel:+911204164821'}
              >
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Schedule Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-primary hover:text-primary-foreground group"
                onClick={() => window.location.href = 'mailto:info@mangosorange.com?subject=Schedule Request&body=Hello, I would like to schedule a consultation.'}
              >
                <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Send Message
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Quick response guaranteed • Free consultation • No commitment required
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>24h Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Expert Team Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;