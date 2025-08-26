import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import ServicePageLayout from '@/components/ServicePageLayout';
import heroImage from '@/assets/hero-team.jpg';

const ManagementConsulting = () => {
  const title = 'Management Consulting';
  const tagline = 'People strategy, org design, and change that sticks.';
  const description = (
    <>
      <p>
        Align your workforce with business goals through operating model design, competency frameworks, and performance systems that drive outcomes.
      </p>
    </>
  );
  const steps = [
    { title: 'Diagnose', description: 'Assess org design, roles, and KPIs.' },
    { title: 'Design', description: 'Target operating model and capability roadmap.' },
    { title: 'Implement', description: 'Change management and enablement.' },
    { title: 'Sustain', description: 'Governance, measurement, and iteration.' },
  ];
  const benefits = [
    'Clear role design and accountability',
    'Higher productivity and engagement',
    'Faster transformation outcomes',
  ];
  const caseStudies = [
    { title: 'Enterprise Realignment', result: '15% efficiency gain', description: 'Redesigned org structure and KPIs.' },
    { title: 'Sales Acceleration', result: '30% pipeline lift', description: 'Revamped territory, roles, and incentives.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Management Consulting for Staffing" description="Consulting for people strategy, org design, and operating model transformation." />
      <Header />
      <ServicePageLayout title={title} tagline={tagline} heroImage={heroImage} description={description} steps={steps} benefits={benefits} caseStudies={caseStudies} />
      <Footer />
    </div>
  );
};

export default ManagementConsulting;
