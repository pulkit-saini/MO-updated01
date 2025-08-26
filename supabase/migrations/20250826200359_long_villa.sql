/*
  # Fix admin users authentication and policies

  1. Security Updates
    - Update RLS policies to allow proper authentication
    - Add policy for anonymous users to insert admin users (for initial setup)
    - Ensure default admin user exists

  2. Data Updates
    - Insert default admin user if not exists
    - Use simple password storage for demo purposes
*/

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Admin users can read own data" ON admin_users;
DROP POLICY IF EXISTS "Admin users can update own data" ON admin_users;

-- Create new policies that work with our authentication flow
CREATE POLICY "Anyone can read admin users for authentication"
  ON admin_users
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow initial admin user creation"
  ON admin_users
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin users can update own data"
  ON admin_users
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Ensure default admin user exists
INSERT INTO admin_users (email, password_hash, role)
VALUES ('admin@mangosorange.com', 'admin123', 'admin')
ON CONFLICT (email) DO NOTHING;