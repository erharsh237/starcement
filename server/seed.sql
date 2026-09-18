-- Star Cement Ghana Ltd - Initial Seed Data Script for PostgreSQL
-- Run this script in your PostgreSQL Query Tool (Supabase, Neon, pgAdmin, psql) after running schema.sql

-- 1. Seed Super Admin (Default Login: admin@starcement.com.gh / starcement2026)
INSERT INTO admins (id, email, password_hash, name, role)
VALUES (
    'admin-1',
    'admin@starcement.com.gh',
    '$2a$12$e6q6qJd1qF1k1x6Qz5h1uOB4YgE10jE7Llh5R5D3g8T7F0A8f8KqK', -- starcement2026 bcrypt hash
    'Star Cement Commercial Operations Director',
    'Super Admin'
)
ON CONFLICT (id) DO NOTHING;

-- 2. Seed Cement Products
INSERT INTO products (
    id, name, grade, class_type, standard, tagline, theme,
    compressive_two_day, compressive_twenty_eight_day,
    initial_setting_time, soundness, fineness_blaine, summary, applications
)
VALUES
(
    'star-42-5r',
    'Star Cement 42.5R',
    '42.5R',
    'CEM II / A-L',
    'GS 1118-1 : 2024',
    'High Early Strength Rapid Hardening Portland Limestone Cement',
    'red',
    '≥ 20.0 MPa (Typically 24-28 MPa)',
    '≥ 42.5 MPa (Typically 48-54 MPa)',
    '≥ 60 min (Typically 110-140 min)',
    '≤ 10 mm (Typically 1.0-2.0 mm)',
    '≥ 340 m²/kg (Typically 380-410 m²/kg)',
    'Engineered for high early load bearing and heavy reinforced structural engineering. Meets GS 1118-1:2024 with high-purity reactive limestone intergrinding.',
    '["Reinforced concrete frames, suspended slabs, beams & heavy columns", "High-rise foundations, raft footings & cast-in-place retaining walls", "Precast bridge girders, culverts, prestressed concrete elements & spun poles", "Ready-mix batching plants requiring rapid slump retention & early demoulding"]'::jsonb
),
(
    'star-32-5r',
    'Star Cement 32.5R',
    '32.5R',
    'CEM II / B-L',
    'GS 1118-1 : 2024',
    'Superior Cohesion & High-Yield Commercial Masonry Cement',
    'blue',
    '≥ 10.0 MPa (Typically 13-16 MPa)',
    '≥ 32.5 MPa (Typically 35-39 MPa)',
    '≥ 75 min (Typically 130-170 min)',
    '≤ 10 mm (Typically 1.0-2.5 mm)',
    '≥ 320 m²/kg (Typically 350-380 m²/kg)',
    'Formulated for exceptional sandcrete block adhesion, masonry mortar, and smooth exterior plastering with maximum plastic workability.',
    '["Commercial hollow & solid sandcrete block manufacturing (high yield/bag)", "Structural masonry mortar, load-bearing bricklaying & jointing", "Internal wall plastering, smooth external rendering & floor screeds", "Residential floor slabs, non-critical lintels, surface aprons & drainage drains"]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- 3. Seed Regional Sales Territory Leads
INSERT INTO sales_reps (
    id, name, title, corridor, region, hub, address,
    phone, direct_mobile, email, whatsapp_number, lat, lng,
    coverage_cities, specialization, bio
)
VALUES
(
    'rep-accra-tema',
    'Kwame Mensah',
    'Commercial Infrastructure Lead',
    'Greater Accra & Eastern Corridor',
    'Greater Accra',
    'Tema Finish Grinding Terminal',
    'Heavy Industrial Area, Meridian Road, Plot 14/B, Tema',
    '+233 30 320 4401',
    '+233 24 411 9021',
    'k.mensah@starcement.com.gh',
    '233244119021',
    5.6698,
    -0.0166,
    '["Accra", "Tema", "Kasoa", "Nsawam", "Koforidua", "Prampram", "Ada"]'::jsonb,
    '42.5R Bulk Tanker Deliveries, Heavy Civil Rafts & High-Rise Slabs',
    '14 years managing commercial procurement for major contractors across the Accra-Tema industrial hub. Specializes in custom mix batching schedules and continuous pneumatic tanker logistics.'
),
(
    'rep-ashanti-kumasi',
    'Akua Agyemang',
    'Regional Distribution & Precast Lead',
    'Ashanti, Bono & Central Belt',
    'Ashanti',
    'Kumasi Central Depot',
    'Kaase Industrial Enclave, Plot 8, Kumasi',
    '+233 32 208 9110',
    '+233 20 892 3341',
    'a.agyemang@starcement.com.gh',
    '233208923341',
    6.6885,
    -1.6244,
    '["Kumasi", "Obuasi", "Ejisu", "Sunyani", "Techiman", "Mampong"]'::jsonb,
    '32.5R Sandcrete Block Manufacturing & 42.5R Precast Infrastructure',
    'Coordinates high-yield supply agreements for commercial blockyards, precast fabricators, and regional building material distributors throughout the middle belt.'
),
(
    'rep-western-takoradi',
    'Emmanuel Osei',
    'Maritime & Mining Logistics Lead',
    'Western & Central Coastal Corridor',
    'Western',
    'Takoradi Maritime Depot',
    'Harbour Commercial Bypass, Sekondi-Takoradi',
    '+233 31 204 7720',
    '+233 24 330 1184',
    'e.osei@starcement.com.gh',
    '233243301184',
    4.8967,
    -1.7554,
    '["Takoradi", "Sekondi", "Tarkwa", "Cape Coast", "Elmina", "Axim", "Bogoso"]'::jsonb,
    'Sulfate-Resistant Marine Concrete & Deep-Mine Grouting Cements',
    'Specialist in marine civil engineering specifications, port quay reinforcement, and continuous bulk supply routes for Western Region gold and manganese mining enclaves.'
),
(
    'rep-northern-tamale',
    'Fatima Alhassan',
    'Savanna & Trans-Sahel Supply Lead',
    'Northern, Savanna & Upper Corridor',
    'Northern',
    'Tamale Strategic Inland Depot',
    'Industrial Area, Bolgatanga Highway, Tamale',
    '+233 37 202 3340',
    '+233 24 887 5519',
    'f.alhassan@starcement.com.gh',
    '233248875519',
    9.4076,
    -0.8533,
    '["Tamale", "Yendi", "Walewale", "Bolgatanga", "Navrongo", "Wa", "Bawku"]'::jsonb,
    'Arid Climate Hydration Management, Dam Canals & Cross-Border Logistics',
    'Directs supply operations for high-temperature desert curing concrete, irrigation canal lining projects, and cross-border transport to Sahelian trade hubs.'
)
ON CONFLICT (id) DO NOTHING;

-- 4. Seed Plants and Distribution Depots
INSERT INTO plants (
    id, name, is_flagship, region, city, address, type,
    annual_capacity, capacity_highlight, capacity_sub,
    silos, silos_highlight, silos_sub,
    packing_capacity, packing_highlight, packing_sub,
    bulk_dispatch, dispatch_highlight, dispatch_sub,
    lab, phone, status, service_radius
)
VALUES
(
    'tema-terminal',
    'Tema Flagship Finish Grinding Terminal',
    TRUE,
    'Greater Accra',
    'Tema',
    'Heavy Industrial Area, Meridian Road, Plot 14/B, Tema, Greater Accra',
    'Primary Clinker Grinding & Coastal Marine Terminal',
    '1,600,000 MT / year combined grinding throughput',
    '1.6M MT',
    'Annual Grinding Capacity',
    '4 × 10,000 MT Clinker & Cement Silos',
    '40,000 MT',
    'Terminal Silo Storage (4 Units)',
    '4 × 120 t/h Rotary Haver & Boecker Packers',
    '480 t/h',
    'Rotary Packing Output',
    '3 × Automated Pneumatic Tanker Loading Bays',
    '3 Bays',
    'Continuous Weighbridge Dispatch',
    'GSA-Accredited Central Physical & Chemical Testing Laboratory',
    '+233 30 320 4401',
    'Operational 24/7',
    'Greater Accra, Eastern Region, Volta Corridor & Regional Export'
),
(
    'kumasi-inland-terminal',
    'Kumasi Central Distribution Depot',
    FALSE,
    'Ashanti Region',
    'Kumasi',
    'Kaase Industrial Commercial Enclave, Lake Road, Kumasi',
    'Regional Bulk Storage & Bagged Freight Depot',
    '500,000 MT/year throughput',
    '500K MT',
    'Annual Throughput',
    '2 × 2,500 MT High-Capacity Pneumatic Silos',
    '5,000 MT',
    'Pneumatic Silo Storage',
    '2 × 90 t/h Automated Offloading & Bag Palletizers',
    '180 t/h',
    'Palletizing Output',
    'Direct Tanker Discharge & Covered 8,000 MT Warehouse',
    '8,000 MT',
    'Covered Warehouse Storage',
    'Compressive Strength & Fineness Verification Satellite Lab',
    '+233 32 208 9150',
    'Operational 06:00 – 22:00',
    'Ashanti, Ahafo, Bono, and Western North'
),
(
    'takoradi-marine-depot',
    'Takoradi Maritime Logistics Depot',
    FALSE,
    'Western Region',
    'Takoradi',
    'Harbour Commercial Belt, New Cargo Bypass, Takoradi',
    'Coastal Rail & Deepwater Supply Depot',
    '350,000 MT/year throughput',
    '350K MT',
    'Annual Throughput',
    '2 × 3,000 MT Bulk Silo Units',
    '6,000 MT',
    'Bulk Silo Storage',
    '1 × 100 t/h Pallet Wrapping Line',
    '100 t/h',
    'Pallet Wrapping Line',
    'Heavy Civil & Mining Bulk Tanker Supply',
    'Heavy Civil',
    'Mining & Marine Bulk Tankers',
    'ASTM C150 / GS 1118 Salinity & Chloride Penetration Lab',
    '+233 31 204 7720',
    'Operational 06:00 – 20:00',
    'Western Region, Central Region & Offshore Marine Works'
),
(
    'tamale-inland-depot',
    'Tamale Strategic Inland Depot',
    FALSE,
    'Northern Region',
    'Tamale',
    'Industrial Area, Bolgatanga Highway, Tamale',
    'Northern Corridor & Trans-Sahelian Logistics Depot',
    '250,000 MT/year distribution capacity',
    '250K MT',
    'Annual Distribution Capacity',
    '1 × 2,000 MT Buffer Silo',
    '2,000 MT',
    'Buffer Silo Capacity',
    'Continuous Palletized 50kg Bag Distribution',
    '50kg Bags',
    'Continuous Bag Staging',
    'Covered 6,000 MT Weatherproof Bag Warehouse',
    '6,000 MT',
    'Weatherproof Warehouse',
    'Moisture & Initial/Final Set Time Monitoring Station',
    '+233 37 202 3340',
    'Operational 07:00 – 18:00',
    'Northern, Savanna, North East, Upper East & Upper West'
)
ON CONFLICT (id) DO NOTHING;

-- 5. Seed Initial Quote Inquiries
INSERT INTO quotes (
    id, ref, client_name, company_name, phone, email,
    product_grade, product_name, order_format, quantity, quantity_unit,
    region, delivery_site, target_date, notes, status
)
VALUES
(
    'quote-1',
    'STAR-GH-829104',
    'Kwabena Adjei',
    'Consar Construction Ltd',
    '+233 24 490 8112',
    'procurement@consar.com.gh',
    'star-42-5r',
    'Star Cement 42.5R (CEM II / A-L)',
    'bulk_tanker',
    '300',
    'Metric Tonnes (Bulk)',
    'Greater Accra',
    'Airport City II Mixed-Use Tower Foundation, Accra',
    '2026-09-25',
    'Need continuous pour schedule across 72 hours. Batching plant setup in progress.',
    'Under Review'
),
(
    'quote-2',
    'STAR-GH-829105',
    'Ama Serwaa',
    'Ashanti Blocks & Pavers Enterprise',
    '+233 20 811 4059',
    'sales@ashantiblocks.com',
    'star-32-5r',
    'Star Cement 32.5R (CEM II / B-L)',
    'pallets',
    '1,200',
    'Bags (50kg)',
    'Ashanti',
    'Ejisu Block Factory Yard, Off Kumasi-Accra Highway',
    '2026-09-28',
    'High-volume block moulding contract for residential estate. Requesting scheduled weekly flatbed delivery.',
    'New'
)
ON CONFLICT (id) DO NOTHING;
