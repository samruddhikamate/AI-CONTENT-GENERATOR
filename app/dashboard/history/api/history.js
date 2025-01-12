app.get("/api/history", (req, res) => {
  // Example of fetching data from a database or another source
  const historyData = [
    {
      id: 1,
      formData: "Sample form data",
      aiResponse: "Generated AI response",
      templateSlug: "write-code",
      createdAt: new Date().toISOString(),
    },
    // Add more history entries as needed
  ];

  res.json(historyData);
});
