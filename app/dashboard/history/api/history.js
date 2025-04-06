// app.get("/api/history", (req, res) => {
//   // Example of fetching data from a database or another source
//   const historyData = [
//     {
//       id: 1,
//       formData: "Sample form data",
//       aiResponse: "Generated AI response",
//       templateSlug: "write-code",
//       createdAt: new Date().toISOString(),
//     },
//     // Add more history entries as needed
//   ];

//   res.json(historyData);
// });





const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

// ✅ Neon Database Connection
const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  ssl: { rejectUnauthorized: false },
});

// ✅ API Endpoint for fetching history
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, formData, aiResponse, templateSlug, 
      TO_CHAR(createdAt, 'YYYY-MM-DD HH24:MI:SS') AS createdAt 
      FROM history 
      WHERE createdAt <= NOW()  -- ✅ Prevents future timestamps
      ORDER BY createdAt DESC;
    `);
    res.json(result.rows); // ✅ Sends formatted data
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

module.exports = router;
