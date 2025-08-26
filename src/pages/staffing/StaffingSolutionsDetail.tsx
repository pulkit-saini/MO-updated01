import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import ServicePageLayout from '@/components/ServicePageLayout';
import heroImage from '@/assets/professional-team-hero.jpg';

const StaffingSolutionsDetail = () => {
  const title = 'Staffing Solutions';
  const tagline = 'End-to-end hiring for contract, C2H, and permanent roles.';
  const description = (
    <>
      <p>
        We deliver comprehensive staffing solutions across industries and job levels—entry, mid, and leadership. From role intake and sourcing to onboarding and post-placement support, our recruiters manage the complete hiring lifecycle so your teams can focus on core outcomes.
      </p>
      <p>
        Choose the engagement model that fits your timeline and budget: Contract, Contract-to-Hire, and Permanent. We combine domain-specialized recruiters, a robust assessment framework, and pan-India reach to maintain quality, speed, and compliance.
      </p>
      <ul>
        <li><strong>Contract:</strong> Flexible ramp-up and ramp-down for projects and peak seasons.</li>
        <li><strong>Contract-to-Hire (C2H):</strong> Try before you hire to ensure a perfect fit.</li>
        <li><strong>Permanent:</strong> Build strong, long-term teams with culture-aligned talent.</li>
      </ul>
    </>
  );

  const steps = [
    { title: 'Discovery & Role Intake', description: 'Define scope, success metrics, competencies, budget, and timeline.' },
    { title: 'Targeted Sourcing', description: 'Multi-channel sourcing from networks, referrals, and talent platforms.' },
    { title: 'Screening & Assessment', description: 'Skill-based evaluations, culture-fit checks, and background filtering.' },
    { title: 'Shortlist & Interviews', description: 'Curated profiles, interview coordination, and feedback loops.' },
    { title: 'Offer, BGV & Onboarding', description: 'Offer management, documentation, compliance, and Day-1 readiness.' },
    { title: 'Success Review', description: 'Post-placement check-ins with replacement guarantee as per SLA.' },
  ];

  const benefits = [
    'Faster time-to-hire with pre-vetted pipelines',
    'Domain-specialized recruiters across industries',
    'Quality assurance via structured assessments',
    'Compliance-first documentation and BGV',
    'Flexible models: contract, C2H, and permanent',
    'Pan-India coverage and quick deployment',
  ];

  const caseStudies = [
    { title: 'Retail Expansion Program', result: '220 hires in 6 weeks', description: 'Built store ops and field sales teams across 14 cities with <2% early attrition.' },
    { title: 'Product Engineering Scale-up', result: '45 days to full team', description: 'Deployed a blended team of FE, BE, QA, and DevOps via C2H model.' },
    { title: 'Shared Services Center', result: '30% cost saving', description: 'Centralized support functions with staggered onboarding and 100% compliance.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Staffing Solutions',
    description:
      'End-to-end staffing solutions for contract, contract-to-hire, and permanent roles with pan-India coverage and compliance.',
    serviceType: 'Staffing',
    areaServed: 'IN',
    provider: { '@type': 'Organization', name: 'MangosOrange' },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Staffing Solutions Services"
        description="End-to-end staffing for contract, C2H, and permanent roles with fast hiring, compliance, and pan-India coverage."
        canonical={typeof window !== 'undefined' ? `${window.location.origin}/staffing/staffing-solutions` : '/staffing/staffing-solutions'}
        jsonLd={jsonLd}
      />
      <Header />
      <ServicePageLayout
        title={title}
        tagline={tagline}
        heroImage={heroImage}
        description={description}
        steps={steps}
        benefits={benefits}
        caseStudies={caseStudies}
      />
      <Footer />
    </div>
  );
};

export default StaffingSolutionsDetail;
