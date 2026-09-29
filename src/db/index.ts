import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const url = process.env.DATABASE_URL;
if (!url) throw new Error('DATABASE_URL is not set (see .env.example).');

// `prepare: false` keeps this working behind a transaction-mode pooler (Supabase).
const client = postgres(url, { prepare: false });

export const db = drizzle(client);
