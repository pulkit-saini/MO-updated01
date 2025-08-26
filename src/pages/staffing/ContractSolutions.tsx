import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import ServicePageLayout from '@/components/ServicePageLayout';
import heroImage from '@/assets/it-services-hero.jpg';

const ContractSolutions = () => {
  const title = 'Contract Solutions';
  const tagline = 'Flexible contract talent—from hours to months—on demand.';
  const description = (
    <>
      <p>
        Whether it’s a sprint, peak season, or transformation program, our contract models let you scale skills without long-term overheads.
      </p>
    </>
  );
  const steps = [
    { title: 'Need Assessment', description: 'Scope, duration, and outcomes.' },
    { title: 'Talent Shortlist', description: 'Pre-vetted profiles aligned to budget and timeline.' },
    { title: 'Fast Onboarding', description: 'Contracts, tooling, and kickoff.' },
    { title: 'Governance', description: 'Performance reviews and extensions as needed.' },
  ];
  const benefits = [
    'Rapid access to expertise',
    'No long-term commitment',
    'Clear SLAs and visibility',
  ];
  const caseStudies = [
    { title: 'Ecommerce Peak Season', result: 'Zero downtime', description: 'Scaled warehouse and support teams for 90 days.' },
    { title: 'ERP Migration', result: 'On-time delivery', description: 'Deployed specialists for a 6-month program.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Contract Staffing Solutions" description="Flexible contract staffing to scale for projects, peaks, and specialized skills." />
      <Header />
      <ServicePageLayout title={title} tagline={tagline} heroImage={heroImage} description={description} steps={steps} benefits={benefits} caseStudies={caseStudies} />
      <Footer />
    </div>
  );
};

export default ContractSolutions;
