-- Create registrations table for Cyberconverge conference
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  registration_type VARCHAR(20) NOT NULL CHECK (registration_type IN ('day1', 'day2', 'both')),
  amount_paid DECIMAL(10,2) DEFAULT 0,
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create an index on registration_type for analytics
CREATE INDEX IF NOT EXISTS idx_registrations_type ON registrations(registration_type);
