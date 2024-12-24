import { defineConfig } from "drizzle-kit";
/** @type {import("drizzle-kit").Config } */

export default {
  schema: "./utils/schema.tsx",
  out: "migrations",
  dialect: 'postgresql',
  dbCredentials:{
    url: 'postgresql://neondb_owner:rBFA9LzWQm6s@ep-late-shadow-a58spf59.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require'
  }
};