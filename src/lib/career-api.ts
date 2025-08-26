import { supabase } from './auth';
import { JobPosting, Applicant, DashboardStats } from '@/types/career';

export const careerAPI = {
  // Job Postings
  async getJobPostings(includeHidden = false): Promise<JobPosting[]> {
    try {
      let query = supabase
        .from('job_postings')
        .select(`
          *,
          applicant_count:applicants(count)
        `)
        .order('created_at', { ascending: false });

      if (!includeHidden) {
        query = query.eq('is_visible', true).eq('status', 'Active');
      }

      const { data, error } = await query;
      if (error) throw error;

      return data.map(job => ({
        id: job.id,
        title: job.title,
        department: job.department,
        type: job.type,
        location: job.location,
        experience: job.experience,
        salary: job.salary,
        description: job.description,
        responsibilities: job.responsibilities,
        requirements: job.requirements,
        deadline: job.deadline,
        status: job.status,
        isVisible: job.is_visible,
        createdAt: job.created_at,
        updatedAt: job.updated_at,
        applicantCount: job.applicant_count?.[0]?.count || 0,
      }));
    } catch (error) {
      console.error('Error fetching job postings:', error);
      return [];
    }
  },

  async getJobPosting(id: string): Promise<JobPosting | null> {
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return {
        id: data.id,
        title: data.title,
        department: data.department,
        type: data.type,
        location: data.location,
        experience: data.experience,
        salary: data.salary,
        description: data.description,
        responsibilities: data.responsibilities,
        requirements: data.requirements,
        deadline: data.deadline,
        status: data.status,
        isVisible: data.is_visible,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };
    } catch (error) {
      console.error('Error fetching job posting:', error);
      return null;
    }
  },

  async createJobPosting(job: Omit<JobPosting, 'id' | 'createdAt' | 'updatedAt' | 'applicantCount'>): Promise<JobPosting | null> {
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .insert([{
          title: job.title,
          department: job.department,
          type: job.type,
          location: job.location,
          experience: job.experience,
          salary: job.salary,
          description: job.description,
          responsibilities: job.responsibilities,
          requirements: job.requirements,
          deadline: job.deadline,
          status: job.status,
          is_visible: job.isVisible,
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        title: data.title,
        department: data.department,
        type: data.type,
        location: data.location,
        experience: data.experience,
        salary: data.salary,
        description: data.description,
        responsibilities: data.responsibilities,
        requirements: data.requirements,
        deadline: data.deadline,
        status: data.status,
        isVisible: data.is_visible,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };
    } catch (error) {
      console.error('Error creating job posting:', error);
      return null;
    }
  },

  async updateJobPosting(id: string, updates: Partial<JobPosting>): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('job_postings')
        .update({
          title: updates.title,
          department: updates.department,
          type: updates.type,
          location: updates.location,
          experience: updates.experience,
          salary: updates.salary,
          description: updates.description,
          responsibilities: updates.responsibilities,
          requirements: updates.requirements,
          deadline: updates.deadline,
          status: updates.status,
          is_visible: updates.isVisible,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error updating job posting:', error);
      return false;
    }
  },

  async deleteJobPosting(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('job_postings')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting job posting:', error);
      return false;
    }
  },

  // Applicants
  async getApplicants(jobId?: string): Promise<Applicant[]> {
    try {
      let query = supabase
        .from('applicants')
        .select(`
          *,
          job_posting:job_postings(title)
        `)
        .order('applied_at', { ascending: false });

      if (jobId) {
        query = query.eq('job_id', jobId);
      }

      const { data, error } = await query;
      if (error) throw error;

      return data.map(applicant => ({
        id: applicant.id,
        jobId: applicant.job_id,
        name: applicant.name,
        email: applicant.email,
        phone: applicant.phone,
        resumeUrl: applicant.resume_url,
        coverLetter: applicant.cover_letter,
        status: applicant.status,
        notes: applicant.notes,
        appliedAt: applicant.applied_at,
        updatedAt: applicant.updated_at,
      }));
    } catch (error) {
      console.error('Error fetching applicants:', error);
      return [];
    }
  },

  async updateApplicantStatus(id: string, status: Applicant['status'], notes?: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('applicants')
        .update({
          status,
          notes,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error updating applicant status:', error);
      return false;
    }
  },

  async submitApplication(application: {
    jobId: string;
    name: string;
    email: string;
    phone?: string;
    resumeUrl: string;
    coverLetter?: string;
  }): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('applicants')
        .insert([{
          job_id: application.jobId,
          name: application.name,
          email: application.email,
          phone: application.phone,
          resume_url: application.resumeUrl,
          cover_letter: application.coverLetter,
          status: 'Applied',
        }]);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error submitting application:', error);
      return false;
    }
  },

  // Dashboard Stats
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      const [jobsResult, applicantsResult, recentApplicantsResult] = await Promise.all([
        supabase.from('job_postings').select('status'),
        supabase.from('applicants').select('status'),
        supabase
          .from('applicants')
          .select(`
            *,
            job_posting:job_postings(title)
          `)
          .order('applied_at', { ascending: false })
          .limit(5)
      ]);

      const jobs = jobsResult.data || [];
      const applicants = applicantsResult.data || [];
      const recentApplicants = recentApplicantsResult.data || [];

      return {
        totalJobs: jobs.length,
        activeJobs: jobs.filter(j => j.status === 'Active').length,
        totalApplicants: applicants.length,
        pendingApplications: applicants.filter(a => a.status === 'Applied').length,
        recentApplications: recentApplicants.map(applicant => ({
          id: applicant.id,
          jobId: applicant.job_id,
          name: applicant.name,
          email: applicant.email,
          phone: applicant.phone,
          resumeUrl: applicant.resume_url,
          coverLetter: applicant.cover_letter,
          status: applicant.status,
          notes: applicant.notes,
          appliedAt: applicant.applied_at,
          updatedAt: applicant.updated_at,
        })),
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return {
        totalJobs: 0,
        activeJobs: 0,
        totalApplicants: 0,
        pendingApplications: 0,
        recentApplications: [],
      };
    }
  },

  // File Upload
  async uploadResume(file: File): Promise<string | null> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('career-files')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('career-files')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading resume:', error);
      return null;
    }
  },
};