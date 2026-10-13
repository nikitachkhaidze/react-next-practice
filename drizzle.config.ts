import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';

loadEnvConfig(process.cwd());

const url = process.env.DB_FILE_NAME;

if (!url) {
    throw new Error('DB_FILE_NAME is not configured');
}

export default defineConfig({
    schema: './db/schema.ts',
    out: './drizzle',
    dialect: 'sqlite',
    dbCredentials: { url },
});