# Career Management System Documentation

## Overview
This system provides a comprehensive admin panel for managing job postings and applications, integrated with a modern career page for candidates.

## Features

### Admin Panel (/admin)
- **Authentication**: Secure login/signup with email and password
- **Dashboard**: Overview of job postings, applications, and key metrics
- **Job Management**: Create, edit, delete, and manage visibility of job postings
- **Applicant Management**: View applications, update status, add notes
- **Rich Text Editor**: Full-featured editor for job descriptions and requirements

### Career Page (/careers)
- **Dynamic Job Listings**: Automatically displays active job postings from admin panel
- **Advanced Filtering**: Search by title, filter by type and location
- **Application System**: Modal-based application form with resume upload
- **Responsive Design**: Mobile-friendly interface matching site branding

## Getting Started

### 1. Database Setup
The system uses Supabase for backend services. Make sure to:
1. Connect to Supabase using the "Connect to Supabase" button
2. Run the migration file to create necessary tables and policies

### 2. Admin Access
- Navigate to `/admin/login`
- Create an admin account or use existing credentials
- Default admin: `admin@mangosorange.com` / `admin123` (change in production)

### 3. Managing Job Postings
1. Go to `/admin/jobs`
2. Click "Add New Job" to create a posting
3. Fill in all required fields including rich text descriptions
4. Set status (Active/Draft/Closed) and visibility
5. Save and the job will appear on the career page if active and visible

### 4. Managing Applications
1. Go to `/admin/applicants`
2. View all applications with filtering options
3. Update applicant status and add notes
4. Download resumes directly from the interface

## Technical Details

### Database Schema
- `admin_users`: Admin/recruiter accounts
- `job_postings`: Job listings with full details
- `applicants`: Application submissions with status tracking
- `career-files` storage bucket: Resume uploads

### Security
- Row Level Security (RLS) enabled on all tables
- Admin-only access to management functions
- Public read access to active job postings
- Secure file upload with validation

### File Upload
- Supports PDF, DOC, DOCX formats
- 5MB file size limit
- Secure storage in Supabase bucket
- Public URLs for admin access

## Usage Guide

### For Admins/Recruiters:
1. **Creating Jobs**: Use the rich text editor for detailed descriptions
2. **Managing Applications**: Update status as candidates progress through hiring
3. **Visibility Control**: Toggle job visibility without deleting
4. **Status Management**: Use Draft for preparation, Active for live postings

### For Candidates:
1. **Browse Jobs**: Use search and filters to find relevant positions
2. **Apply**: Click "Apply Now" and fill out the modal form
3. **Upload Resume**: Drag and drop or click to upload resume
4. **Track Status**: Applications are tracked in the admin system

## Best Practices

### Job Posting:
- Use clear, descriptive titles
- Include specific requirements and qualifications
- Set realistic deadlines
- Use rich text formatting for better readability

### Application Management:
- Update applicant status promptly
- Add meaningful notes for team collaboration
- Use consistent status progression
- Download and review resumes regularly

## Troubleshooting

### Common Issues:
1. **Login Problems**: Ensure Supabase connection is active
2. **File Upload Errors**: Check file format and size limits
3. **Job Not Showing**: Verify status is "Active" and visibility is enabled
4. **Permission Errors**: Ensure user has admin/recruiter role

### Support:
For technical support or feature requests, contact the development team.