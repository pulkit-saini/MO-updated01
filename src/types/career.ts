export interface JobPosting {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance';
  location: string;
  experience: string;
  salary?: string;
  description: string;
  responsibilities: string;
  requirements: string;
  deadline: string;
  status: 'Active' | 'Draft' | 'Closed';
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
  applicantCount?: number;
}

export interface Applicant {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  coverLetter?: string;
  status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Interviewed' | 'Hired';
  notes?: string;
  appliedAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  email: string;
  name: string;
  role: 'Admin' | 'Recruiter';
  createdAt: string;
}

export interface DashboardStats {
  totalJobs: number;
  activeJobs: number;
  totalApplicants: number;
  pendingApplications: number;
  recentApplications: Applicant[];
}