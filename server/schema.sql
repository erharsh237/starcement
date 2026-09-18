-- Star Cement Ghana Ltd - Enterprise PostgreSQL Relational Schema

-- Enable UUID extension if supported
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Admins Table
CREATE TABLE IF NOT EXISTS admins (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(64) NOT NULL DEFAULT 'Super Admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    grade VARCHAR(32) NOT NULL,
    class_type VARCHAR(64) NOT NULL,
    standard VARCHAR(64) NOT NULL,
    tagline TEXT,
    theme VARCHAR(32) DEFAULT 'red',
    compressive_two_day VARCHAR(128) NOT NULL,
    compressive_twenty_eight_day VARCHAR(128) NOT NULL,
    initial_setting_time VARCHAR(128) NOT NULL,
    soundness VARCHAR(64) NOT NULL,
    fineness_blaine VARCHAR(128) NOT NULL,
    summary TEXT NOT NULL,
    applications JSONB NOT NULL DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sales Representatives Table
CREATE TABLE IF NOT EXISTS sales_reps (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    corridor VARCHAR(255) NOT NULL,
    region VARCHAR(64) NOT NULL,
    hub VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(64) NOT NULL,
    direct_mobile VARCHAR(64) NOT NULL,
    email VARCHAR(255) NOT NULL,
    whatsapp_number VARCHAR(64) NOT NULL,
    lat NUMERIC(9, 6) NOT NULL,
    lng NUMERIC(9, 6) NOT NULL,
    coverage_cities JSONB NOT NULL DEFAULT '[]'::jsonb,
    specialization TEXT NOT NULL,
    bio TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Plants & Terminals Table
CREATE TABLE IF NOT EXISTS plants (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_flagship BOOLEAN DEFAULT FALSE,
    region VARCHAR(64) NOT NULL,
    city VARCHAR(128) NOT NULL,
    address TEXT NOT NULL,
    type TEXT NOT NULL,
    annual_capacity VARCHAR(128) NOT NULL,
    capacity_highlight VARCHAR(64) NOT NULL,
    capacity_sub VARCHAR(128) NOT NULL,
    silos VARCHAR(128) NOT NULL,
    silos_highlight VARCHAR(64) NOT NULL,
    silos_sub VARCHAR(128) NOT NULL,
    packing_capacity VARCHAR(128) NOT NULL,
    packing_highlight VARCHAR(64) NOT NULL,
    packing_sub VARCHAR(128) NOT NULL,
    bulk_dispatch VARCHAR(128) NOT NULL,
    dispatch_highlight VARCHAR(64) NOT NULL,
    dispatch_sub VARCHAR(128) NOT NULL,
    lab TEXT NOT NULL,
    phone VARCHAR(64) NOT NULL,
    status VARCHAR(64) NOT NULL,
    service_radius TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Dispatch Quotes & Customer Inquiries Table
CREATE TABLE IF NOT EXISTS quotes (
    id VARCHAR(64) PRIMARY KEY,
    ref VARCHAR(64) UNIQUE NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    phone VARCHAR(64) NOT NULL,
    email VARCHAR(255),
    product_grade VARCHAR(64) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    order_format VARCHAR(64) NOT NULL,
    quantity VARCHAR(64) NOT NULL,
    quantity_unit VARCHAR(64) NOT NULL,
    region VARCHAR(64) NOT NULL,
    delivery_site TEXT NOT NULL,
    target_date VARCHAR(64),
    notes TEXT,
    status VARCHAR(32) NOT NULL DEFAULT 'New',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON quotes(status);
CREATE INDEX IF NOT EXISTS idx_sales_reps_region ON sales_reps(region);
