import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, Award, Headphones, Globe, Target, Eye, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import teamImage from '@/assets/professional-team-hero.jpg';

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whyChooseRef, isVisible: whyChooseVisible } = useScrollAnimation();
  const { ref: strengthRef, isVisible: strengthVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const whyChooseUs = [
    {
      icon: Building,
      title: "Establishment",
      description: "Founded in 2022, backed by over 100 years of combined industry experience"
    },
    {
      icon: Award,
      title: "Top Quality IT Solutions",
      description: "Top-quality IT solutions and support across all kinds of industries"
    },
    {
      icon: Headphones,
      title: "Dedicated Support Units",
      description: "Dedicated Sales & Support Team. Relationships & Customer Satisfaction"
    },
    {
      icon: Globe,
      title: "Global Diversity",
      description: "100+ Customers Worldwide"
    }
  ];

  const keyStrengths = [
    "Industry Consolidated Experience Of more than 100 Years.",
    "CoreB Total 10 Years of Experience.",
    "Customer Relationships & Customer Satisfaction",
    "Dedicated Sales & Support Units.",
    "Customer Segments Extensive experience in delivering top quality IT Solutions for all kinds of Industry verticals and technology environments."
  ];

  const visionMission = {
    vision: {
      title: "Our Vision",
      points: [
        "CoreB vision is to become leading IT Solutions Company.",
        "The driving force behind CoreB is to add significant value to our customer and its business.",
        "Whether we assist our customers to implement state-of-the-art IT Solution or just an Simply Solutions, we pride ourselves on our ability to focus on our customer's needs, to understand and meet their expectation and ensure a rapid return on investment.",
        "We are confident to achieve our vision together with support of our Customers 'The Well Wishers' and our tireless team work!"
      ]
    },
    mission: {
      title: "Our Mission",
      points: [
        "Our mission is to enhance IT Operations of our customers by helping them to implement Premium IT Products and Services, which in turn help their end users to get,",
        "Simple and Easy of IT Computing,",
        "Accessible,",
        "Improved Communication and Exchange,",
        "Security,",
        "Last but not the least Value for Money."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="page-top-spacing">
      
      {/* Hero Section */}
      <section ref={heroRef} className={`pb-16 px-4 fade-up ${heroVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Where Technology 
                <span className="text-primary"> Meets Talent</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                At MangosOrange, we connect innovative businesses with top-tier tech talent and deliver tailored IT solutions that make a difference. We're not just another agency — we're your growth partner.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={teamImage}
                alt="Modern tech team collaborating in a bright office"
                loading="lazy"
                decoding="async"
                className="w-full max-w-2xl h-48 sm:h-64 lg:h-80 rounded-2xl object-cover shadow-lg ring-1 ring-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className={`py-16 px-4 bg-accent/30 fade-up ${whyChooseVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out bg-card/50 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <item.icon className="w-12 h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Key Strength & Qualities */}
      <section ref={strengthRef} className={`py-16 px-4 fade-up ${strengthVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Strength */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Key Strength</h2>
              <div className="space-y-4">
                {keyStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{strength}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Qualities */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Qualities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Qualities Are The Texture Of CoreB Systems & Services. They Tie Us Together Paying Little Mind To Where Or How We Work And Position Us To Prevail On Our Change Venture. Are The Texture Of CoreB Systems & Services. They Tie Us Together Paying Little Heed To Where Or How We Work And Position Us To Prevail On Our Change Venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionRef} className={`py-16 px-4 bg-accent/30 fade-up ${visionVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">{visionMission.vision.title}</h2>
              </div>
              <div className="space-y-4">
                {visionMission.vision.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">{visionMission.mission.title}</h2>
              </div>
              <div className="space-y-4">
                {visionMission.mission.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className={`py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 fade-up ${ctaVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build something amazing together.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-xl">
                👉 Get in Touch
              </Button>
            </Link>
            <Link to="/it-services">
              <Button variant="outline" size="lg" className="rounded-xl">
                📘 Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default About;