import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface AuthUser {
  id: string;
  email: string;
  role: 'Admin' | 'Recruiter';
}

export const authService = {
  async signIn(email: string, password: string): Promise<AuthUser | null> {
    try {
      // Get admin user from database
      const { data: profile, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .maybeSingle();

      if (error) {
        console.error('Database error:', error);
         console.log("SupaBase- Invalid credentials");
        throw new Error('SupaBase - Invalid credentials');
      }

      if (!profile) {
         console.log("Invalid credentials - profile");
        throw new Error('Invalid credentials - profile');
      }

      // Compare password with stored hash
      // For the default admin user, we'll use simple comparison
      // In production, you should use proper password hashing
      const isValidPassword = await bcrypt.compare(password, profile.password_hash);

      console.log("Kunal is OP");
      if (!isValidPassword) {
        console.log("Invalid credentials - password");
        throw new Error('Invalid credentials - password');
        
      }

      return {
        id: profile.id,
        email: profile.email,
        role: profile.role,
      };
    } catch (error) {
      console.error('Sign in error:', error);
      return null;
    }
  },

  async signUp(email: string, password: string, role: 'Admin' | 'Recruiter' = 'Recruiter'): Promise<AuthUser | null> {
    try {
      // Create admin profile directly in database
      const { data: profile, error } = await supabase
        .from('admin_users')
        .insert([
          {
            email,
            password_hash: password, // In production, hash this properly
            role,
          }
        ])
        .select()
        .single();

      if (error) throw error;

      return {
        id: profile.id,
        email: profile.email,
        role: profile.role,
      };
    } catch (error) {
      console.error('Sign up error:', error);
      return null;
    }
  },

  async signOut(): Promise<void> {
    // Clear any stored session data
    localStorage.removeItem('admin_user');
  },

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      // Check for stored session
      const stored = localStorage.getItem('admin_user');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  async resetPassword(email: string): Promise<boolean> {
    try {
      // For now, just return true as if email was sent
      // In production, implement proper password reset
      console.log('Password reset requested for:', email);
      return true;
    } catch (error) {
      console.error('Reset password error:', error);
      return false;
    }
  },
};