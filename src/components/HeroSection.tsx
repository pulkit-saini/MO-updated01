import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import heroImage from '@/assets/professional-team-hero.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden page-top-spacing">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional business team collaborating in modern office"
          className="w-full h-full object-cover transition-transform duration-20000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div 
          ref={contentRef}
          className={`text-center max-w-4xl mx-auto fade-up ${contentVisible ? 'visible' : ''}`}
        >
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              Your Workforce.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Our Expertise.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
              We help you build high-performing teams with speed, accuracy, and confidence. 
              Connecting companies with the right talent, when it matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full group transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                
              >
                Hire Top Talent
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button></Link>
              <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full group transform transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-black/20"
              >
                <Users className="mr-3 w-5 h-5 transition-all duration-300" />
                Read More
              </Button></Link>
            </div>

            {/* Stats - Moved to bottom */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/70">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-glow">50+</div>
                <div className="text-sm text-white/70">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;