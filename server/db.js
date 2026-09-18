import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { dealers as INITIAL_DEALERS } from '../src/data/dealers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const { Pool } = pg;
const DATA_DIR = path.join(__dirname, 'db_store');

// Initial seed data from Star Cement Ghana
const INITIAL_SALES_REPS = [
  {
    id: "rep-accra-tema",
    name: "Kwame Mensah",
    title: "Commercial Infrastructure Lead",
    corridor: "Greater Accra & Eastern Corridor",
    region: "Greater Accra",
    hub: "Tema Finish Grinding Terminal",
    address: "Heavy Industrial Area, Meridian Road, Plot 14/B, Tema",
    phone: "+233 30 320 4401",
    directMobile: "+233 24 411 9021",
    email: "k.mensah@starcement.com.gh",
    whatsappNumber: "233244119021",
    coordinates: { lat: 5.6698, lng: -0.0166 },
    coverageCities: ["Accra", "Tema", "Kasoa", "Nsawam", "Koforidua", "Prampram", "Ada"],
    specialization: "42.5R Bulk Tanker Deliveries, Heavy Civil Rafts & High-Rise Slabs",
    bio: "14 years managing commercial procurement for major contractors across the Accra-Tema industrial hub. Specializes in custom mix batching schedules and continuous pneumatic tanker logistics."
  },
  {
    id: "rep-ashanti-kumasi",
    name: "Akua Agyemang",
    title: "Regional Distribution & Precast Lead",
    corridor: "Ashanti, Bono & Central Belt",
    region: "Ashanti",
    hub: "Kumasi Central Depot",
    address: "Kaase Industrial Enclave, Plot 8, Kumasi",
    phone: "+233 32 208 9110",
    directMobile: "+233 20 892 3341",
    email: "a.agyemang@starcement.com.gh",
    whatsappNumber: "233208923341",
    coordinates: { lat: 6.6885, lng: -1.6244 },
    coverageCities: ["Kumasi", "Obuasi", "Ejisu", "Sunyani", "Techiman", "Mampong"],
    specialization: "32.5R Sandcrete Block Manufacturing & 42.5R Precast Infrastructure",
    bio: "Coordinates high-yield supply agreements for commercial blockyards, precast fabricators, and regional building material distributors throughout the middle belt."
  },
  {
    id: "rep-western-takoradi",
    name: "Emmanuel Osei",
    title: "Maritime & Mining Logistics Lead",
    corridor: "Western & Central Coastal Corridor",
    region: "Western",
    hub: "Takoradi Maritime Depot",
    address: "Harbour Commercial Bypass, Sekondi-Takoradi",
    phone: "+233 31 204 7720",
    directMobile: "+233 24 330 1184",
    email: "e.osei@starcement.com.gh",
    whatsappNumber: "233243301184",
    coordinates: { lat: 4.8872, lng: -1.7554 },
    coverageCities: ["Takoradi", "Sekondi", "Tarkwa", "Cape Coast", "Winneba", "Elmina", "Axim"],
    specialization: "Marine Coastal Pavements, Foundation Pilings & Mining Civils",
    bio: "Specialist in marine-resistant concrete applications, heavy container yard pavements, and large-scale mining civil works across the Western and Central corridors."
  },
  {
    id: "rep-northern-tamale",
    name: "Ibrahim Alhassan",
    title: "Northern Regional Commercial Manager",
    corridor: "Northern, Upper East & Upper West Hub",
    region: "Northern",
    hub: "Tamale Northern Hub",
    address: "Industrial Area South, Logistics Road, Tamale",
    phone: "+233 37 202 5590",
    directMobile: "+233 27 755 8892",
    email: "i.alhassan@starcement.com.gh",
    whatsappNumber: "233277558892",
    coordinates: { lat: 9.4008, lng: -0.8393 },
    coverageCities: ["Tamale", "Yendi", "Wa", "Bolgatanga", "Bawku", "Damongo"],
    specialization: "Arterial Road Culverts, Agricultural Infrastructure & Masonry Supply",
    bio: "Directs haulage coordination from the Tamale rail and road hub, ensuring dependable weekly shipments for northern infrastructure projects, warehouses, and municipal works."
  }
];

const INITIAL_PRODUCTS = [
  {
    id: "star-42-5r",
    name: "Star Cement 42.5R",
    grade: "42.5R",
    classType: "CEM II / A-L",
    standard: "GS 1118-1 : 2024",
    tagline: "High Early Strength Structural Engineering Portland Limestone Cement",
    theme: "red",
    compressiveStrength: {
      twoDay: "≥ 20.0 MPa (Typically 22-25 MPa)",
      twentyEightDay: "≥ 42.5 MPa (Typically 46-50 MPa)"
    },
    physicalProperties: {
      initialSettingTime: "≥ 60 min (Typically 110-140 min)",
      soundness: "≤ 10 mm (Typically 1.0-2.0 mm)",
      finenessBlaine: "≥ 340 m²/kg (Typically 380-410 m²/kg)"
    },
    summary: "Engineered for high early load bearing and heavy reinforced structural engineering. Meets GS 1118-1:2024 with high-purity reactive limestone intergrinding.",
    applications: [
      "Reinforced concrete frames, suspended slabs, beams & heavy columns",
      "High-rise foundations, raft footings & cast-in-place retaining walls",
      "Precast bridge girders, culverts, prestressed concrete elements & spun poles",
      "Ready-mix batching plants requiring rapid slump retention & early demoulding"
    ]
  },
  {
    id: "star-32-5r",
    name: "Star Cement 32.5R",
    grade: "32.5R",
    classType: "CEM II / B-L",
    standard: "GS 1118-1 : 2024",
    tagline: "Superior Cohesion & High-Yield Commercial Masonry Cement",
    theme: "blue",
    compressiveStrength: {
      twoDay: "≥ 10.0 MPa (Typically 13-16 MPa)",
      twentyEightDay: "≥ 32.5 MPa (Typically 35-39 MPa)"
    },
    physicalProperties: {
      initialSettingTime: "≥ 75 min (Typically 130-170 min)",
      soundness: "≤ 10 mm (Typically 1.0-2.5 mm)",
      finenessBlaine: "≥ 320 m²/kg (Typically 350-380 m²/kg)"
    },
    summary: "Formulated for exceptional sandcrete block adhesion, masonry mortar, and smooth exterior plastering with maximum plastic workability.",
    applications: [
      "Commercial hollow & solid sandcrete block manufacturing (high yield/bag)",
      "Structural masonry mortar, load-bearing bricklaying & jointing",
      "Internal wall plastering, smooth external rendering & floor screeds",
      "Residential floor slabs, non-critical lintels, surface aprons & drainage drains"
    ]
  }
];

const INITIAL_PLANTS = [
  {
    id: "star-cement-ghana-plant",
    name: "Star Cement Ghana Plant",
    isFlagship: true,
    region: "Greater Accra",
    city: "Kpone / Tema",
    address: "Plot: AGR/IND/Y/5, A&B, Kpone Industrial Area, Kpone, Greater Accra Region, Ghana",
    type: "Modern Cement Grinding Facility & High-Capacity Slip-Form Silo Complex",
    annualCapacity: "750,000 MT/year",
    capacityHighlight: "750,000 MT",
    capacitySub: "Installed Annual Production Capacity",
    mill: "75 TPH High-Efficiency Closed-Circuit Grinding Mill",
    millHighlight: "75 TPH",
    millSub: "Closed-Circuit Mill & Advanced Separators",
    silos: "High-Capacity Concrete Storage Silos (Vertical Slip-Form Casting)",
    silosHighlight: "Slip-Form Silos",
    silosSub: "Monolithic Concrete Storage Battery",
    automation: "Fully automated PLC- and SCADA-based digital control system",
    packingCapacity: "Automated Rotor Packer & Bulk Loading System with Real-Time Weight Control",
    packingHighlight: "Rotor Packer",
    packingSub: "High-Accuracy Automated Bagging & Bulk Loading",
    bulkDispatch: "Specialized Bulk Loading Gantries & Automated RFID Weighbridges",
    dispatchHighlight: "Bulk & Bagged",
    dispatchSub: "24/7 Automated Dispatch Operations",
    lab: "On-Site Physical, Chemical & 24/7 XRF Elemental Quality Control Laboratory",
    phone: "0531028877 / 0531005067",
    status: "Operational 24/7",
    serviceRadius: "Nationwide Supply Across All 16 Regions of Ghana & West African Sub-Region"
  }
];

// Hash initial admin password with 12 bcrypt rounds
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('starcement2026', 12);
const INITIAL_ADMINS = [
  {
    id: "admin-1",
    email: "admin@starcement.com.gh",
    passwordHash: ADMIN_PASSWORD_HASH,
    name: "Star Cement Commercial Operations Director",
    role: "Super Admin"
  }
];

const INITIAL_QUOTES = [
  {
    id: "quote-1",
    ref: "STAR-GH-829104",
    clientName: "Kwabena Adjei",
    companyName: "Consar Construction Ltd",
    phone: "+233 24 490 8112",
    email: "procurement@consar.com.gh",
    productGrade: "star-42-5r",
    productName: "Star Cement 42.5R (CEM II / A-L)",
    orderFormat: "bulk_tanker",
    quantity: "360",
    quantityUnit: "Metric Tons",
    region: "Greater Accra",
    deliverySite: "Accra Financial Center, High Street Site C",
    targetDate: "2026-09-28",
    status: "New",
    createdAt: new Date().toISOString()
  }
];

// -------------------------------------------------------------
// PostgreSQL Connection Pool Setup
// -------------------------------------------------------------
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/starcement';
let pool = null;
let usePostgres = false;

// Helpers for persistent fallback engine
async function readFileJson(filePath, defaultValue) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, JSON.stringify(defaultValue, null, 2), 'utf-8');
      return defaultValue;
    }
    throw err;
  }
}

async function writeFileJson(filePath, data) {
  const tempPath = `${filePath}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(data, null, 2), 'utf-8');
  await fs.rename(tempPath, filePath);
}

// -------------------------------------------------------------
// Unified Database Interface
// -------------------------------------------------------------
export const db = {
  async init() {
    // 1. Attempt PostgreSQL Connection
    try {
      const isRemote = connectionString.includes('supabase') || 
                       connectionString.includes('neon') || 
                       connectionString.includes('sslmode=require') || 
                       (!connectionString.includes('localhost') && !connectionString.includes('127.0.0.1'));

      pool = new Pool({
        connectionString,
        ssl: isRemote ? { rejectUnauthorized: false } : false,
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 10000,
        max: 20
      });

      const client = await pool.connect();
      console.log('🐘 [PostgreSQL] Successfully connected to PostgreSQL database cluster.');
      usePostgres = true;

      // 2. Run Schema DDL
      const schemaPath = path.join(__dirname, 'schema.sql');
      const schemaSql = await fs.readFile(schemaPath, 'utf-8');
      await client.query(schemaSql);
      console.log('🐘 [PostgreSQL] Relational tables and indexes verified.');

      // 3. Seed Initial Tables if Empty
      await this.seedPostgresIfEmpty(client);
      client.release();
    } catch (err) {
      usePostgres = false;
      console.warn(`⚠️ [PostgreSQL] Notice: Could not connect to PostgreSQL at ${connectionString.split('@')[1] || connectionString} (${err.message}).`);
      console.log('📦 [Database Engine] Running in resilient persistent storage mode. To activate live PostgreSQL, configure DATABASE_URL in server/.env.');
      
      // Initialize persistent file storage
      await fs.mkdir(DATA_DIR, { recursive: true });
      await readFileJson(path.join(DATA_DIR, 'salesReps.json'), INITIAL_SALES_REPS);
      await readFileJson(path.join(DATA_DIR, 'products.json'), INITIAL_PRODUCTS);
      await readFileJson(path.join(DATA_DIR, 'plants.json'), INITIAL_PLANTS);
      await readFileJson(path.join(DATA_DIR, 'admins.json'), INITIAL_ADMINS);
      await readFileJson(path.join(DATA_DIR, 'quotes.json'), INITIAL_QUOTES);
    }
  },

  async seedPostgresIfEmpty(client) {
    // Seed Admins
    const adminCheck = await client.query('SELECT COUNT(*) FROM admins');
    if (parseInt(adminCheck.rows[0].count, 10) === 0) {
      for (const a of INITIAL_ADMINS) {
        await client.query(
          'INSERT INTO admins (id, email, password_hash, name, role) VALUES ($1, $2, $3, $4, $5)',
          [a.id, a.email, a.passwordHash, a.name, a.role]
        );
      }
      console.log('🐘 [PostgreSQL] Seeded initial admin account with bcrypt hash.');
    }

    // Seed Products
    const prodCheck = await client.query('SELECT COUNT(*) FROM products');
    if (parseInt(prodCheck.rows[0].count, 10) === 0) {
      for (const p of INITIAL_PRODUCTS) {
        await client.query(
          `INSERT INTO products (
            id, name, grade, class_type, standard, tagline, theme,
            compressive_two_day, compressive_twenty_eight_day,
            initial_setting_time, soundness, fineness_blaine, summary, applications
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
          [
            p.id, p.name, p.grade, p.classType, p.standard, p.tagline, p.theme,
            p.compressiveStrength.twoDay, p.compressiveStrength.twentyEightDay,
            p.physicalProperties.initialSettingTime, p.physicalProperties.soundness,
            p.physicalProperties.finenessBlaine, p.summary, JSON.stringify(p.applications)
          ]
        );
      }
      console.log('🐘 [PostgreSQL] Seeded certified cement formulations.');
    }

    // Seed Sales Reps
    const repCheck = await client.query('SELECT COUNT(*) FROM sales_reps');
    if (parseInt(repCheck.rows[0].count, 10) === 0) {
      for (const r of INITIAL_SALES_REPS) {
        await client.query(
          `INSERT INTO sales_reps (
            id, name, title, corridor, region, hub, address,
            phone, direct_mobile, email, whatsapp_number, lat, lng,
            coverage_cities, specialization, bio
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
          [
            r.id, r.name, r.title, r.corridor, r.region, r.hub, r.address,
            r.phone, r.directMobile, r.email, r.whatsappNumber,
            r.coordinates.lat, r.coordinates.lng,
            JSON.stringify(r.coverageCities), r.specialization, r.bio
          ]
        );
      }
      console.log('🐘 [PostgreSQL] Seeded regional commercial territory leads.');
    }

    // Seed Plants
    const plantCheck = await client.query('SELECT COUNT(*) FROM plants');
    if (parseInt(plantCheck.rows[0].count, 10) === 0) {
      for (const pl of INITIAL_PLANTS) {
        await client.query(
          `INSERT INTO plants (
            id, name, is_flagship, region, city, address, type,
            annual_capacity, capacity_highlight, capacity_sub,
            silos, silos_highlight, silos_sub,
            packing_capacity, packing_highlight, packing_sub,
            bulk_dispatch, dispatch_highlight, dispatch_sub,
            lab, phone, status, service_radius
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)`,
          [
            pl.id, pl.name, pl.isFlagship, pl.region, pl.city, pl.address, pl.type,
            pl.annualCapacity, pl.capacityHighlight, pl.capacitySub,
            pl.silos, pl.silosHighlight, pl.silosSub,
            pl.packingCapacity, pl.packingHighlight, pl.packingSub,
            pl.bulkDispatch, pl.dispatchHighlight, pl.dispatchSub,
            pl.lab, pl.phone, pl.status, pl.serviceRadius
          ]
        );
      }
      console.log('🐘 [PostgreSQL] Seeded manufacturing plant and logistics depot network.');
    }
  },

  getEngineInfo() {
    return {
      engine: usePostgres ? 'PostgreSQL Relational Database' : 'Resilient File Store (PostgreSQL Configured)',
      isPostgres: usePostgres,
      databaseUrl: connectionString.replace(/:[^:@]*@/, ':****@') // mask password
    };
  },

  // -------------------------------------------------------------
  // ADMIN AUTHENTICATION
  // -------------------------------------------------------------
  async getAdminByEmail(email) {
    if (usePostgres) {
      const res = await pool.query('SELECT * FROM admins WHERE LOWER(email) = LOWER($1)', [email.trim()]);
      if (res.rows.length === 0) return null;
      const row = res.rows[0];
      return {
        id: row.id,
        email: row.email,
        passwordHash: row.password_hash,
        name: row.name,
        role: row.role
      };
    }
    const admins = await readFileJson(path.join(DATA_DIR, 'admins.json'), INITIAL_ADMINS);
    const found = admins.find(a => a.email.toLowerCase() === email.trim().toLowerCase());
    if (!found) return null;
    return {
      id: found.id,
      email: found.email,
      passwordHash: found.passwordHash || (found.password ? bcrypt.hashSync(found.password, 12) : null),
      name: found.name,
      role: found.role
    };
  },

  // -------------------------------------------------------------
  // SALES REPRESENTATIVES
  // -------------------------------------------------------------
  async getSalesReps() {
    if (usePostgres) {
      const res = await pool.query('SELECT * FROM sales_reps ORDER BY name');
      return res.rows.map(r => ({
        id: r.id,
        name: r.name,
        title: r.title,
        corridor: r.corridor,
        region: r.region,
        hub: r.hub,
        address: r.address,
        phone: r.phone,
        directMobile: r.direct_mobile,
        email: r.email,
        whatsappNumber: r.whatsapp_number,
        coordinates: { lat: parseFloat(r.lat), lng: parseFloat(r.lng) },
        coverageCities: typeof r.coverage_cities === 'string' ? JSON.parse(r.coverage_cities) : r.coverage_cities,
        specialization: r.specialization,
        bio: r.bio
      }));
    }
    return readFileJson(path.join(DATA_DIR, 'salesReps.json'), INITIAL_SALES_REPS);
  },

  async createSalesRep(r) {
    if (usePostgres) {
      const id = r.id || `rep-${Date.now()}`;
      const lat = r.coordinates?.lat || 5.6698;
      const lng = r.coordinates?.lng || -0.0166;
      const cities = JSON.stringify(Array.isArray(r.coverageCities) ? r.coverageCities : [r.coverageCities]);
      
      const res = await pool.query(
        `INSERT INTO sales_reps (
          id, name, title, corridor, region, hub, address,
          phone, direct_mobile, email, whatsapp_number, lat, lng,
          coverage_cities, specialization, bio
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        RETURNING *`,
        [
          id, r.name, r.title, r.corridor, r.region, r.hub, r.address,
          r.phone, r.directMobile, r.email, r.whatsappNumber,
          lat, lng, cities, r.specialization, r.bio
        ]
      );
      return this.formatRepRow(res.rows[0]);
    }
    const reps = await this.getSalesReps();
    reps.push(r);
    await writeFileJson(path.join(DATA_DIR, 'salesReps.json'), reps);
    return r;
  },

  async updateSalesRep(id, r) {
    if (usePostgres) {
      const cities = JSON.stringify(Array.isArray(r.coverageCities) ? r.coverageCities : [r.coverageCities]);
      const res = await pool.query(
        `UPDATE sales_reps SET
          name = $1, title = $2, corridor = $3, region = $4, hub = $5,
          address = $6, phone = $7, direct_mobile = $8, email = $9,
          whatsapp_number = $10, coverage_cities = $11, specialization = $12, bio = $13,
          updated_at = NOW()
        WHERE id = $14
        RETURNING *`,
        [
          r.name, r.title, r.corridor, r.region, r.hub,
          r.address, r.phone, r.directMobile, r.email,
          r.whatsappNumber, cities, r.specialization, r.bio, id
        ]
      );
      if (res.rows.length === 0) return null;
      return this.formatRepRow(res.rows[0]);
    }
    const reps = await this.getSalesReps();
    const idx = reps.findIndex(x => x.id === id);
    if (idx === -1) return null;
    reps[idx] = { ...reps[idx], ...r, id };
    await writeFileJson(path.join(DATA_DIR, 'salesReps.json'), reps);
    return reps[idx];
  },

  async deleteSalesRep(id) {
    if (usePostgres) {
      await pool.query('DELETE FROM sales_reps WHERE id = $1', [id]);
      return true;
    }
    const reps = await this.getSalesReps();
    const filtered = reps.filter(x => x.id !== id);
    await writeFileJson(path.join(DATA_DIR, 'salesReps.json'), filtered);
    return true;
  },

  formatRepRow(r) {
    return {
      id: r.id,
      name: r.name,
      title: r.title,
      corridor: r.corridor,
      region: r.region,
      hub: r.hub,
      address: r.address,
      phone: r.phone,
      directMobile: r.direct_mobile,
      email: r.email,
      whatsappNumber: r.whatsapp_number,
      coordinates: { lat: parseFloat(r.lat), lng: parseFloat(r.lng) },
      coverageCities: typeof r.coverage_cities === 'string' ? JSON.parse(r.coverage_cities) : r.coverage_cities,
      specialization: r.specialization,
      bio: r.bio
    };
  },

  // -------------------------------------------------------------
  // PRODUCTS
  // -------------------------------------------------------------
  async getProducts() {
    if (usePostgres) {
      const res = await pool.query('SELECT * FROM products ORDER BY grade DESC');
      return res.rows.map(p => ({
        id: p.id,
        name: p.name,
        grade: p.grade,
        classType: p.class_type,
        standard: p.standard,
        tagline: p.tagline,
        theme: p.theme,
        compressiveStrength: {
          twoDay: p.compressive_two_day,
          twentyEightDay: p.compressive_twenty_eight_day
        },
        physicalProperties: {
          initialSettingTime: p.initial_setting_time,
          soundness: p.soundness,
          finenessBlaine: p.fineness_blaine
        },
        summary: p.summary,
        applications: typeof p.applications === 'string' ? JSON.parse(p.applications) : p.applications
      }));
    }
    return readFileJson(path.join(DATA_DIR, 'products.json'), INITIAL_PRODUCTS);
  },

  async updateProduct(id, p) {
    if (usePostgres) {
      const apps = JSON.stringify(p.applications || []);
      const res = await pool.query(
        `UPDATE products SET
          summary = $1,
          compressive_twenty_eight_day = $2,
          compressive_two_day = $3,
          initial_setting_time = $4,
          fineness_blaine = $5,
          applications = $6,
          updated_at = NOW()
        WHERE id = $7
        RETURNING *`,
        [
          p.summary,
          p.compressiveStrength?.twentyEightDay || p.compressive_twenty_eight_day,
          p.compressiveStrength?.twoDay || p.compressive_two_day,
          p.physicalProperties?.initialSettingTime || p.initial_setting_time,
          p.physicalProperties?.finenessBlaine || p.fineness_blaine,
          apps,
          id
        ]
      );
      if (res.rows.length === 0) return null;
      return (await this.getProducts()).find(x => x.id === id);
    }
    const prods = await this.getProducts();
    const idx = prods.findIndex(x => x.id === id);
    if (idx === -1) return null;
    prods[idx] = { ...prods[idx], ...p, id };
    await writeFileJson(path.join(DATA_DIR, 'products.json'), prods);
    return prods[idx];
  },

  // -------------------------------------------------------------
  // PLANTS & TERMINALS
  // -------------------------------------------------------------
  async getPlants() {
    if (usePostgres) {
      const res = await pool.query('SELECT * FROM plants ORDER BY is_flagship DESC, name');
      return res.rows.map(pl => ({
        id: pl.id,
        name: pl.name,
        isFlagship: pl.is_flagship,
        region: pl.region,
        city: pl.city,
        address: pl.address,
        type: pl.type,
        annualCapacity: pl.annual_capacity,
        capacityHighlight: pl.capacity_highlight,
        capacitySub: pl.capacity_sub,
        silos: pl.silos,
        silosHighlight: pl.silos_highlight,
        silosSub: pl.silos_sub,
        packingCapacity: pl.packing_capacity,
        packingHighlight: pl.packing_highlight,
        packingSub: pl.packing_sub,
        bulkDispatch: pl.bulk_dispatch,
        dispatchHighlight: pl.dispatch_highlight,
        dispatchSub: pl.dispatch_sub,
        lab: pl.lab,
        phone: pl.phone,
        status: pl.status,
        serviceRadius: pl.service_radius
      }));
    }
    return readFileJson(path.join(DATA_DIR, 'plants.json'), INITIAL_PLANTS);
  },

  async updatePlant(id, pl) {
    if (usePostgres) {
      await pool.query(
        `UPDATE plants SET
          annual_capacity = $1, silos = $2, packing_capacity = $3,
          bulk_dispatch = $4, phone = $5, status = $6, service_radius = $7,
          updated_at = NOW()
        WHERE id = $8`,
        [
          pl.annualCapacity, pl.silos, pl.packingCapacity,
          pl.bulkDispatch, pl.phone, pl.status, pl.serviceRadius, id
        ]
      );
      return (await this.getPlants()).find(x => x.id === id);
    }
    const plants = await this.getPlants();
    const idx = plants.findIndex(x => x.id === id);
    if (idx === -1) return null;
    plants[idx] = { ...plants[idx], ...pl, id };
    await writeFileJson(path.join(DATA_DIR, 'plants.json'), plants);
    return plants[idx];
  },

  // -------------------------------------------------------------
  // AUTHORIZED DEALERS DIRECTORY
  // -------------------------------------------------------------
  async getDealers() {
    if (usePostgres) {
      try {
        const res = await pool.query('SELECT * FROM dealers ORDER BY state, city, name');
        return res.rows.map(d => ({
          id: d.id,
          name: d.name,
          state: d.state,
          city: d.city,
          address: d.address,
          phone: d.phone,
          secondaryPhone: d.secondary_phone,
          whatsapp: d.whatsapp,
          contactPerson: d.contact_person,
          tier: d.tier,
          stockGrades: typeof d.stock_grades === 'string' ? JSON.parse(d.stock_grades) : d.stock_grades,
          minimumOrder: d.minimum_order,
          operatingHours: d.operating_hours,
          deliveryAvailable: d.delivery_available,
          rating: parseFloat(d.rating),
          isVerified: d.is_verified
        }));
      } catch (err) {
        console.warn('Postgres dealers query failed, using fallback:', err.message);
      }
    }
    return readFileJson(path.join(DATA_DIR, 'dealers.json'), INITIAL_DEALERS);
  },

  // -------------------------------------------------------------
  // CUSTOMER DISPATCH QUOTES & RFQS
  // -------------------------------------------------------------
  async getQuotes() {
    if (usePostgres) {
      const res = await pool.query('SELECT * FROM quotes ORDER BY created_at DESC');
      return res.rows.map(q => ({
        id: q.id,
        ref: q.ref,
        clientName: q.client_name,
        companyName: q.company_name,
        phone: q.phone,
        email: q.email,
        productGrade: q.product_grade,
        productName: q.product_name,
        orderFormat: q.order_format,
        quantity: q.quantity,
        quantityUnit: q.quantity_unit,
        region: q.region,
        deliverySite: q.delivery_site,
        targetDate: q.target_date,
        notes: q.notes,
        status: q.status,
        createdAt: q.created_at
      }));
    }
    const quotes = await readFileJson(path.join(DATA_DIR, 'quotes.json'), INITIAL_QUOTES);
    quotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return quotes;
  },

  async addQuote(q) {
    if (usePostgres) {
      const id = q.id || `quote-${Date.now()}`;
      const res = await pool.query(
        `INSERT INTO quotes (
          id, ref, client_name, company_name, phone, email,
          product_grade, product_name, order_format, quantity, quantity_unit,
          region, delivery_site, target_date, notes, status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        RETURNING *`,
        [
          id, q.ref, q.clientName, q.companyName || '', q.phone, q.email || '',
          q.productGrade, q.productName, q.orderFormat, q.quantity, q.quantityUnit,
          q.region, q.deliverySite, q.targetDate || '', q.notes || '', q.status || 'New'
        ]
      );
      const row = res.rows[0];
      return {
        id: row.id,
        ref: row.ref,
        clientName: row.client_name,
        companyName: row.company_name,
        phone: row.phone,
        email: row.email,
        productGrade: row.product_grade,
        productName: row.product_name,
        orderFormat: row.order_format,
        quantity: row.quantity,
        quantityUnit: row.quantity_unit,
        region: row.region,
        deliverySite: row.delivery_site,
        targetDate: row.target_date,
        notes: row.notes,
        status: row.status,
        createdAt: row.created_at
      };
    }
    const quotes = await this.getQuotes();
    quotes.unshift(q);
    await writeFileJson(path.join(DATA_DIR, 'quotes.json'), quotes);
    return q;
  },

  async updateQuoteStatus(id, status, notes) {
    if (usePostgres) {
      if (status !== undefined && notes !== undefined) {
        await pool.query('UPDATE quotes SET status = $1, notes = $2 WHERE id = $3 OR ref = $3', [status, notes, id]);
      } else if (status !== undefined) {
        await pool.query('UPDATE quotes SET status = $1 WHERE id = $2 OR ref = $2', [status, id]);
      } else if (notes !== undefined) {
        await pool.query('UPDATE quotes SET notes = $1 WHERE id = $2 OR ref = $2', [notes, id]);
      }
      return (await this.getQuotes()).find(x => x.id === id || x.ref === id);
    }
    const quotes = await this.getQuotes();
    const idx = quotes.findIndex(x => x.id === id || x.ref === id);
    if (idx === -1) return null;
    if (status !== undefined) quotes[idx].status = status;
    if (notes !== undefined) quotes[idx].notes = notes;
    await writeFileJson(path.join(DATA_DIR, 'quotes.json'), quotes);
    return quotes[idx];
  },

  async deleteQuote(id) {
    if (usePostgres) {
      await pool.query('DELETE FROM quotes WHERE id = $1 OR ref = $1', [id]);
      return true;
    }
    const quotes = await this.getQuotes();
    const filtered = quotes.filter(x => x.id !== id && x.ref !== id);
    await writeFileJson(path.join(DATA_DIR, 'quotes.json'), filtered);
    return true;
  }
};
