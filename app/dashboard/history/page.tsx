"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdAt: string;
}

export default function History() {
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHistoryFromBackend();
  }, []);

  const fetchHistoryFromBackend = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/history`);
      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }
      const data = await response.json();

      // ✅ Filter out incorrect future timestamps (double check)
      const validHistory = data;
      setHistoryList(validHistory);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>

      {/* ✅ Header Grid */}
      <div className="grid grid-cols-6 font-bold bg-secondary mt-5 p-3">
        <h2 className="col-span-1">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2 className="col-span-1">DATE</h2>
        <h2 className="col-span-1">WORDS</h2>
        <h2 className="col-span-1">COPY</h2>
      </div>

      {loading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : historyList.length === 0 ? (
        <div className="text-center mt-5">No history found.</div>
      ) : (
        historyList.map((item: HISTORY) => (
          <div key={item.id} className="grid grid-cols-6 my-5 py-3 px-3 border rounded-lg">
            <h2 className="col-span-1">{item.templateSlug}</h2>
            <h2 className="col-span-2 truncate">{item.aiResponse}</h2>
            <h2 className="col-span-1">{new Date(item.createdAt).toLocaleDateString("en-GB")}</h2>
            <h2 className="col-span-1">{item.aiResponse.split(" ").length}</h2>
            <Button
              variant="ghost"
              className="text-primary col-span-1"
              onClick={() => {
                navigator.clipboard
                  .writeText(item.aiResponse)
                  .then(() => alert("Copied to clipboard!"))
                  .catch((err) => console.error("Failed to copy:", err));
              }}
            >
              Copy
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
