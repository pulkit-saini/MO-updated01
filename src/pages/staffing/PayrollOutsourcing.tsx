import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import ServicePageLayout from '@/components/ServicePageLayout';
import heroImage from '@/assets/software-team-collaboration.jpg';

const PayrollOutsourcing = () => {
  const title = 'Payroll Outsourcing';
  const tagline = 'Accurate, compliant payroll processing at scale.';
  const description = (
    <>
      <p>
        From time & attendance to tax and statutory compliance, we run a secure, automated payroll engine with transparent reporting and SLAs.
      </p>
    </>
  );
  const steps = [
    { title: 'Setup & Data Migration', description: 'Policies, pay components, and historical data.' },
    { title: 'Payroll Run', description: 'Automated calculations and multi-level checks.' },
    { title: 'Payouts & Compliance', description: 'Payslips, filings, and statutory reporting.' },
    { title: 'Support', description: 'Employee helpdesk and query resolution.' },
  ];
  const benefits = [
    'Error-free, on-time payroll',
    'Statutory compliance assurance',
    'Reports and analytics for leadership',
  ];
  const caseStudies = [
    { title: 'Manufacturing Firm', result: '99.9% accuracy', description: 'Processed 2,000+ employees across sites.' },
    { title: 'IT Services', result: 'Audit-ready', description: 'Streamlined complex pay structures and benefits.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Payroll Outsourcing Services" description="Reliable payroll outsourcing with automation, compliance, and transparent reporting." />
      <Header />
      <ServicePageLayout title={title} tagline={tagline} heroImage={heroImage} description={description} steps={steps} benefits={benefits} caseStudies={caseStudies} />
      <Footer />
    </div>
  );
};

export default PayrollOutsourcing;
