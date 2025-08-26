/*
  # Career Management System Database Schema

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text)
      - `role` (text, enum: Admin/Recruiter)
      - `created_at` (timestamp)
    
    - `job_postings`
      - `id` (uuid, primary key)
      - `title` (text)
      - `department` (text)
      - `type` (text, enum: Full-time/Part-time/Internship/Freelance)
      - `location` (text)
      - `experience` (text)
      - `salary` (text, optional)
      - `description` (text)
      - `responsibilities` (text)
      - `requirements` (text)
      - `deadline` (date)
      - `status` (text, enum: Active/Draft/Closed)
      - `is_visible` (boolean)
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
      - `status` (text, enum: Applied/Shortlisted/Rejected/Interviewed/Hired)
      - `notes` (text, optional)
      - `applied_at` (timestamp)
      - `updated_at` (timestamp)

  2. Storage
    - Create bucket for career files (resumes)

  3. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
    - Public read access for active job postings
    - Public insert access for applications
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL CHECK (role IN ('Admin', 'Recruiter')) DEFAULT 'Recruiter',
  created_at timestamptz DEFAULT now()
);

-- Create job_postings table
CREATE TABLE IF NOT EXISTS job_postings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  department text NOT NULL,
  type text NOT NULL CHECK (type IN ('Full-time', 'Part-time', 'Internship', 'Freelance')),
  location text NOT NULL,
  experience text NOT NULL,
  salary text,
  description text NOT NULL,
  responsibilities text NOT NULL,
  requirements text NOT NULL,
  deadline date NOT NULL,
  status text NOT NULL CHECK (status IN ('Active', 'Draft', 'Closed')) DEFAULT 'Draft',
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create applicants table
CREATE TABLE IF NOT EXISTS applicants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  resume_url text NOT NULL,
  cover_letter text,
  status text NOT NULL CHECK (status IN ('Applied', 'Shortlisted', 'Rejected', 'Interviewed', 'Hired')) DEFAULT 'Applied',
  notes text,
  applied_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create storage bucket for career files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('career-files', 'career-files', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE applicants ENABLE ROW LEVEL SECURITY;

-- Admin users policies
CREATE POLICY "Admin users can read own data"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admin users can update own data"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Job postings policies
CREATE POLICY "Anyone can read active visible job postings"
  ON job_postings
  FOR SELECT
  TO anon, authenticated
  USING (status = 'Active' AND is_visible = true);

CREATE POLICY "Admin users can manage job postings"
  ON job_postings
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

-- Applicants policies
CREATE POLICY "Anyone can submit applications"
  ON applicants
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin users can manage applicants"
  ON applicants
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

-- Storage policies
CREATE POLICY "Anyone can upload career files"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'career-files');

CREATE POLICY "Anyone can view career files"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'career-files');

CREATE POLICY "Admin users can delete career files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'career-files' AND
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_job_postings_status_visible ON job_postings(status, is_visible);
CREATE INDEX IF NOT EXISTS idx_applicants_job_id ON applicants(job_id);
CREATE INDEX IF NOT EXISTS idx_applicants_status ON applicants(status);
CREATE INDEX IF NOT EXISTS idx_applicants_applied_at ON applicants(applied_at DESC);

-- Insert sample admin user (optional - remove in production)
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'admin@mangosorange.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now()
) ON CONFLICT (email) DO NOTHING;

-- Insert corresponding admin profile
INSERT INTO admin_users (id, email, name, role)
SELECT 
  id,
  'admin@mangosorange.com',
  'Admin User',
  'Admin'
FROM auth.users 
WHERE email = 'admin@mangosorange.com'
ON CONFLICT (email) DO NOTHING;