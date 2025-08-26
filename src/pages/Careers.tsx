import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobApplicationModal from '@/components/JobApplicationModal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { careerAPI } from '@/lib/career-api';
import { JobPosting } from '@/types/career';
import { useEffect, useState } from 'react';
import { 
  CalendarClock, 
  MapPin, 
  Briefcase, 
  Clock, 
  Search,
  Users,
  Award,
  Heart,
  Coffee,
  Zap,
  Shield,
  Globe
} from 'lucide-react';


const Careers = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation();
  const { ref: cultureRef, isVisible: cultureVisible } = useScrollAnimation();

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const jobPostings = await careerAPI.getJobPostings();
      setJobs(jobPostings);
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (job: JobPosting) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || job.type === typeFilter;
    const matchesLocation = locationFilter === 'all' || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesType && matchesLocation;
  });

  const uniqueLocations = Array.from(new Set(jobs.map(job => job.location)));
  const uniqueTypes = Array.from(new Set(jobs.map(job => job.type)));

  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: Award,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement programs"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented teams on exciting projects"
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Competitive salary, health benefits, and more"
    }
  ];

  const description = 'Careers at MangosOrange: We will post job openings soon. Join our talent network and stay updated.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Careers at MangosOrange',
    description,
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Careers at MangosOrange | Jobs Coming Soon" description={description} jsonLd={jsonLd} />
      <Header />
      
      <main className="page-top-spacing">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 fade-up ${heroVisible ? 'visible' : ''}`}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Amazing Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals 
              who want to make a real impact in the world of IT services and staffing solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore exciting opportunities to grow your career with us
              </p>
            </div>

            {/* Filters */}
            {jobs.length > 0 && (
              <Card className="mb-8">
                <CardContent className="p-4">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-full lg:w-48">
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {uniqueTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={locationFilter} onValueChange={setLocationFilter}>
                      <SelectTrigger className="w-full lg:w-48">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {uniqueLocations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Jobs List */}
            <div 
              ref={jobsRef}
              className={`fade-up ${jobsVisible ? 'visible' : ''}`}
            >
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : filteredJobs.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <CalendarClock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {jobs.length === 0 ? 'No openings right now' : 'No jobs match your filters'}
                    </h3>
                    <p className="text-muted-foreground">
                      {jobs.length === 0 
                        ? 'Check back soon—we update this page regularly when new positions go live.'
                        : 'Try adjusting your search or filters to find more opportunities.'
                      }
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {filteredJobs.map((job, index) => (
                    <Card 
                      key={job.id} 
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {job.title}
                              </CardTitle>
                              <Badge variant="outline">
                                {job.type}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{job.department}</span>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-3 h-3" />
                                {job.experience}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {job.salary && (
                              <Badge className="bg-primary/10 text-primary">
                                {job.salary}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div 
                          className="text-sm text-muted-foreground line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            Apply by {new Date(job.deadline).toLocaleDateString()}
                          </div>
                          <Button 
                            onClick={() => handleApply(job)}
                            className="group"
                          >
                            Apply Now
                            <Users className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section 
          ref={cultureRef}
          className={`py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 fade-up ${cultureVisible ? 'visible' : ''}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We build reliable, human-centered software and cloud solutions in a supportive environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index}
                    className="group text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* What We Look For */}
            <div className="mt-16 grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">What We Look For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Strong fundamentals in your craft (engineering, design, product, or operations)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Clear communication and a collaborative mindset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Pragmatism, curiosity, and a focus on outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Passion for technology and continuous learning</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Hiring Process</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
                    <span className="text-muted-foreground">Application review and initial screening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
                    <span className="text-muted-foreground">Intro chat about your goals and experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
                    <span className="text-muted-foreground">Technical/role-focused conversation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">4</div>
                    <span className="text-muted-foreground">Final culture fit and team conversation</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        open={showApplicationModal}
        onClose={() => {
          setShowApplicationModal(false);
          setSelectedJob(null);
        }}
      />
      
      <Footer />
    </div>
  );
};

export default Careers;