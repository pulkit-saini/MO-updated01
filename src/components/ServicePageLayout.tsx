import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

interface Step { title: string; description: string }
interface CaseStudy { title: string; result: string; description: string }

interface ServicePageLayoutProps {
  title: string;
  tagline: string;
  heroImage: string;
  description: ReactNode;
  steps: Step[];
  benefits: string[];
  caseStudies: CaseStudy[];
}

const ServicePageLayout = ({ title, tagline, heroImage, description, steps, benefits, caseStudies }: ServicePageLayoutProps) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation();

  return (
    <main className="bg-background">
      {/* Hero */}
      <header className="relative page-top-spacing pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`${title} hero banner`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
        </div>
        <div className="container mx-auto max-w-6xl px-4 relative">
          <div ref={heroRef} className={`max-w-3xl fade-up ${heroVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>Staffing Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mt-4">
              {tagline}
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" variant="premium" className="group">
                  Talk to an Expert
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <section ref={bodyRef} className={`py-16 px-4 container mx-auto max-w-6xl fade-up ${bodyVisible ? 'visible' : ''}`}>
        {/* Description */}
        <article className="prose prose-invert max-w-none text-muted-foreground">
          {description}
        </article>

        {/* Process */}
        {steps?.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How We Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Card key={i} className="bg-card/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center font-bold">{i + 1}</div>
                    <CardTitle className="mt-4 text-foreground">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{s.description}</CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Benefits */}
        {benefits?.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Benefits</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Case Studies */}
        {caseStudies?.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((c, i) => (
                <Card key={i} className="bg-card/60 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-foreground">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p className="font-medium text-foreground">Outcome: {c.result}</p>
                    <p>{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
              Start Your Hiring
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicePageLayout;
