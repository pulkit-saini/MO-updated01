import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { JobPosting } from '@/types/career';
import { careerAPI } from '@/lib/career-api';
import { toast } from 'sonner';
import { Upload, FileText } from 'lucide-react';

const applicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface JobApplicationModalProps {
  job: JobPosting | null;
  open: boolean;
  onClose: () => void;
}

const JobApplicationModal = ({ job, open, onClose }: JobApplicationModalProps) => {
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload a PDF or Word document');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      
      setResumeFile(file);
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!job) return;
    
    if (!resumeFile) {
      toast.error('Please upload your resume');
      return;
    }

    setLoading(true);
    setUploading(true);

    try {
      // Upload resume
      const resumeUrl = await careerAPI.uploadResume(resumeFile);
      if (!resumeUrl) {
        toast.error('Failed to upload resume');
        return;
      }

      // Submit application
      const success = await careerAPI.submitApplication({
        jobId: job.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        resumeUrl,
        coverLetter: data.coverLetter,
      });

      if (success) {
        toast.success('Application submitted successfully!');
        form.reset();
        setResumeFile(null);
        onClose();
      } else {
        toast.error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('An error occurred while submitting your application');
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const handleClose = () => {
    form.reset();
    setResumeFile(null);
    onClose();
  };

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Apply for {job.title}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Resume Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Resume/CV *
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  {resumeFile ? (
                    <>
                      <FileText className="w-8 h-8 text-primary" />
                      <div className="text-sm font-medium text-foreground">
                        {resumeFile.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Click to change file
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-muted-foreground" />
                      <div className="text-sm font-medium text-foreground">
                        Upload your resume
                      </div>
                      <div className="text-xs text-muted-foreground">
                        PDF, DOC, or DOCX (max 5MB)
                      </div>
                    </>
                  )}
                </label>
              </div>
            </div>

            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you're interested in this role..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                disabled={loading || uploading} 
                className="flex-1"
              >
                {uploading ? 'Uploading...' : loading ? 'Submitting...' : 'Submit Application'}
              </Button>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;