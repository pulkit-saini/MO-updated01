import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import ServicePageLayout from '@/components/ServicePageLayout';
import heroImage from '@/assets/hero-team.jpg';

const OffshoreStaffing = () => {
  const title = 'Offshore Staffing';
  const tagline = 'Build distributed teams with global talent and local governance.';
  const description = (
    <>
      <p>
        Tap into specialized skill sets across regions while we handle compliance, payroll, and operations. Maintain quality and control with cost-effective models.
      </p>
    </>
  );
  const steps = [
    { title: 'Role Definition', description: 'Identify roles suited for offshore delivery.' },
    { title: 'Talent Mapping', description: 'Match skill, culture, and time-zone coverage.' },
    { title: 'Secure Setup', description: 'Environment, access, and compliance onboarding.' },
    { title: 'Governance', description: 'KPIs, cadence, and continuous improvement.' },
  ];
  const benefits = [
    'Significant cost optimization',
    'Access to rare and niche skills',
    '24/7 coverage and faster delivery',
  ];
  const caseStudies = [
    { title: 'SaaS Company', result: '50% cost saving', description: 'Formed an offshore QA and DevOps pod.' },
    { title: 'Healthcare ISV', result: '24/7 L1/L2 support', description: 'Round-the-clock operations with onshore governance.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Offshore Staffing Services" description="Build global teams with compliant offshore staffing models and robust governance." />
      <Header />
      <ServicePageLayout title={title} tagline={tagline} heroImage={heroImage} description={description} steps={steps} benefits={benefits} caseStudies={caseStudies} />
      <Footer />
    </div>
  );
};

export default OffshoreStaffing;
