-- Supabase RLS Policies for MSG91 Authentication
-- Run this in your Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON users;
DROP POLICY IF EXISTS "Users can update own profile" ON users;
DROP POLICY IF EXISTS "Users can insert own profile" ON users;

-- Create new policies that work with our auth flow

-- Allow anyone to check if user exists (for signup/login)
CREATE POLICY "Allow public read for user existence check" ON users
  FOR SELECT
  USING (true);

-- Allow authenticated users to update their own profile
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE
  USING (auth.uid() = id);

-- Allow service role to insert (for signup)
CREATE POLICY "Allow insert during signup" ON users
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to view their own profile
CREATE POLICY "Users can view own full profile" ON users
  FOR SELECT
  USING (auth.uid() = id);

-- Enable RLS on users table if not already enabled
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
