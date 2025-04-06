// import { defineConfig } from "drizzle-kit";
// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';
// /** @type {import("drizzle-kit").Config } */

// export default {
//   schema: "./utils/schema.tsx",
//   out: "migrations",
//   dialect: 'postgresql',
//   driver: 'neon',
//   dbCredentials:{
//     url: 'postgresql://neondb_owner:rBFA9LzWQm6s@ep-late-shadow-a58spf59.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require'
//   }
// };

import { defineConfig } from "drizzle-kit";

/** @type {import("drizzle-kit").Config } */
export default defineConfig({
  schema: "./utils/schema.tsx",  // Ensure this path is correct
  out: "./migrations",          // Ensure this folder exists
  dialect: "postgresql",        // Keep as "postgresql"
  dbCredentials: {
    url: 'postgresql://neondb_owner:rBFA9LzWQm6s@ep-late-shadow-a58spf59.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require' // Use 'url' instead of 'connectionString'
  }
});
