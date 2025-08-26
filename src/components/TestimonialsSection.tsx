import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "MangosOrange found us the perfect DevOps engineer in just 2 weeks. Their technical screening process is exceptional, and the candidate has been instrumental in our cloud migration success.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "Their cloud consulting team helped us reduce our AWS costs by 40% while improving performance. The expertise and attention to detail exceeded our expectations.",
    author: "Michael Rodriguez",
    role: "Head of Infrastructure",
    company: "DataVault Inc",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "We needed a full-stack development team quickly for a critical project. MangosOrange delivered talented developers who integrated seamlessly with our existing team.",
    author: "Emily Thompson",
    role: "Product Director",
    company: "InnovateLabs",
    rating: 5,
    avatar: "ET"
  },
  {
    quote: "The cybersecurity audit they conducted revealed vulnerabilities we didn't know existed. Their team implemented comprehensive solutions that gave us peace of mind.",
    author: "David Park",
    role: "Security Officer",
    company: "FinSecure",
    rating: 5,
    avatar: "DP"
  },
  {
    quote: "From AI/ML engineers to data scientists, MangosOrange consistently delivers top-tier talent. They understand our technical requirements and company culture perfectly.",
    author: "Lisa Wang",
    role: "VP of Engineering",
    company: "SmartAnalytics",
    rating: 5,
    avatar: "LW"
  },
  {
    quote: "Their digital transformation strategy helped us modernize legacy systems and improve efficiency by 60%. The project management and execution were flawless.",
    author: "James Mitchell",
    role: "Operations Director",
    company: "ManufacturingPlus",
    rating: 5,
    avatar: "JM"
  }
];

const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the companies and leaders who trust 
            MangosOrange with their most critical technology and talent needs.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up ${cardsVisible ? 'visible' : ''}`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-card/50 backdrop-blur-sm card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how MangosOrange can help you achieve your technology and talent goals.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;