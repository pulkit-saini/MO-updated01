import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import ServicePageLayout from '@/components/ServicePageLayout';
import heroImage from '@/assets/managed-services-hero.jpg';

const OnPremiseStaffing = () => {
  const title = 'On-Premise Staffing';
  const tagline = 'Reliable on-site teams for operations, support, and growth.';
  const description = (
    <>
      <p>
        We deliver pre-vetted professionals for your locations—across sales, operations, customer success, facilities, and more—so you stay focused on outcomes.
      </p>
    </>
  );
  const steps = [
    { title: 'Workforce Planning', description: 'Capacity planning, shifts, and coverage design.' },
    { title: 'Recruit & Verify', description: 'Screening, background checks, and onboarding.' },
    { title: 'Onsite Management', description: 'Attendance, performance, and HR coordination.' },
    { title: 'Scale Up/Down', description: 'Agile ramp-up and ramp-down as demand changes.' },
  ];
  const benefits = [
    'Single-window workforce management',
    'Pan-India presence and rapid deployment',
    'Full compliance and documentation',
  ];
  const caseStudies = [
    { title: 'Consumer Brand', result: '95% retention', description: 'Built field sales teams across 12 cities.' },
    { title: 'Logistics Leader', result: '10-day ramp-up', description: 'Deployed 150 associates for peak season.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="On-Premise Staffing Services" description="Deploy on-site staffing for sales, operations, customer service, and more with full compliance." />
      <Header />
      <ServicePageLayout title={title} tagline={tagline} heroImage={heroImage} description={description} steps={steps} benefits={benefits} caseStudies={caseStudies} />
      <Footer />
    </div>
  );
};

export default OnPremiseStaffing;
