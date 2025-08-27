/*
  # Career Management System Database Schema

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `password_hash` (text)
      - `role` (text, default 'admin')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `job_postings`
      - `id` (uuid, primary key)
      - `title` (text)
      - `department` (text)
      - `type` (text)
      - `location` (text)
      - `experience` (text)
      - `salary` (text, optional)
      - `description` (text)
      - `responsibilities` (text)
      - `requirements` (text)
      - `deadline` (date)
      - `status` (text, default 'Draft')
      - `is_visible` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `applicants`
      - `id` (uuid, primary key)
      - `job_id` (uuid, foreign key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `resume_url` (text)
      - `cover_letter` (text, optional)
      - `status` (text, default 'Applied')
      - `notes` (text, optional)
      - `applied_at` (timestamp)
      - `updated_at` (timestamp)

  2. Storage
    - Create `career-files` bucket for resume uploads

  3. Security
    - Enable RLS on all tables
    - Add policies for admin access to all tables
    - Add public read access to active job postings
    - Add public insert access to applicants table
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  role text DEFAULT 'admin',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create job_postings table
CREATE TABLE IF NOT EXISTS job_postings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  department text NOT NULL,
  type text NOT NULL,
  location text NOT NULL,
  experience text NOT NULL,
  salary text,
  description text NOT NULL,
  responsibilities text NOT NULL,
  requirements text NOT NULL,
  deadline date NOT NULL,
  status text DEFAULT 'Draft',
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create applicants table
CREATE TABLE IF NOT EXISTS applicants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES job_postings(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  resume_url text NOT NULL,
  cover_letter text,
  status text DEFAULT 'Applied',
  notes text,
  applied_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create storage bucket for career files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('career-files', 'career-files', true)
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE applicants ENABLE ROW LEVEL SECURITY;

-- Admin users policies
CREATE POLICY "Admin users can read own data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Admin users can update own data"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Job postings policies
CREATE POLICY "Anyone can read active visible job postings"
  ON job_postings
  FOR SELECT
  TO anon, authenticated
  USING (status = 'Active' AND is_visible = true);

CREATE POLICY "Authenticated users can read all job postings"
  ON job_postings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert job postings"
  ON job_postings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update job postings"
  ON job_postings
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete job postings"
  ON job_postings
  FOR DELETE
  TO authenticated
  USING (true);

-- Applicants policies
CREATE POLICY "Anyone can insert applications"
  ON applicants
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all applicants"
  ON applicants
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update applicants"
  ON applicants
  FOR UPDATE
  TO authenticated
  USING (true);

-- Storage policies for career-files bucket
CREATE POLICY "Anyone can upload files to career-files"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'career-files');

CREATE POLICY "Anyone can read files from career-files"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'career-files');

CREATE POLICY "Authenticated users can update files in career-files"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'career-files');

CREATE POLICY "Authenticated users can delete files from career-files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'career-files');

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (email, password_hash, role)
VALUES ('admin@mangosorange.com', '$2a$10$X9cBpUxxi9RZkTCL5fTjqeXcDZ8K4E8m3nC3s8hYtqGZVtDFT1u8O', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample job postings for testing
INSERT INTO job_postings (
  title, 
  department, 
  type, 
  location, 
  experience, 
  salary,
  description, 
  responsibilities, 
  requirements, 
  deadline, 
  status, 
  is_visible
) VALUES 
(
  'Senior Full Stack Developer',
  'Engineering',
  'Full-time',
  'Remote',
  '5+ years',
  '$80,000 - $120,000',
  '<p>We are looking for a talented Senior Full Stack Developer to join our growing engineering team. You will be responsible for developing and maintaining web applications using modern technologies.</p>',
  '<ul><li>Design and develop scalable web applications</li><li>Collaborate with cross-functional teams</li><li>Write clean, maintainable code</li><li>Participate in code reviews</li></ul>',
  '<ul><li>5+ years of experience in full stack development</li><li>Proficiency in React, Node.js, and TypeScript</li><li>Experience with cloud platforms (AWS, Azure, or GCP)</li><li>Strong problem-solving skills</li></ul>',
  CURRENT_DATE + INTERVAL '30 days',
  'Active',
  true
),
(
  'DevOps Engineer',
  'Engineering',
  'Full-time',
  'New York, NY',
  '3+ years',
  '$70,000 - $100,000',
  '<p>Join our DevOps team to help build and maintain our cloud infrastructure. You will work on automation, monitoring, and deployment pipelines.</p>',
  '<ul><li>Manage cloud infrastructure and deployments</li><li>Implement CI/CD pipelines</li><li>Monitor system performance and reliability</li><li>Collaborate with development teams</li></ul>',
  '<ul><li>3+ years of DevOps experience</li><li>Experience with Docker, Kubernetes, and cloud platforms</li><li>Knowledge of infrastructure as code (Terraform, CloudFormation)</li><li>Strong scripting skills (Python, Bash)</li></ul>',
  CURRENT_DATE + INTERVAL '45 days',
  'Active',
  true
),
(
  'UI/UX Designer',
  'Design',
  'Full-time',
  'San Francisco, CA',
  '2+ years',
  '$60,000 - $90,000',
  '<p>We are seeking a creative UI/UX Designer to create intuitive and engaging user experiences for our web and mobile applications.</p>',
  '<ul><li>Design user interfaces and experiences</li><li>Create wireframes, prototypes, and mockups</li><li>Conduct user research and usability testing</li><li>Collaborate with developers and product managers</li></ul>',
  '<ul><li>2+ years of UI/UX design experience</li><li>Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)</li><li>Understanding of user-centered design principles</li><li>Portfolio demonstrating design skills</li></ul>',
  CURRENT_DATE + INTERVAL '60 days',
  'Active',
  true
)
ON CONFLICT DO NOTHING;