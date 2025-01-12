// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

// export interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdAt: string;
// }

// const Templates = [
//   { slug: "write-code", name: "Write Code", icon: "/icons/code.svg" },
//   { slug: "instagram-hashtags", name: "Instagram Hash Tag Generator", icon: "/icons/instagram.svg" },
//   { slug: "blog-ideas", name: "Blog Topic Ideas", icon: "/icons/blog.svg" },
// ];

// export default function History() {
//   const [historyList, setHistoryList] = useState<HISTORY[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Load history from local storage on component mount
//   useEffect(() => {
//     const storedHistory = localStorage.getItem("aiSearchHistory");
//     if (storedHistory) {
//       setHistoryList(JSON.parse(storedHistory));
//     }
//   }, []);

//   // Save history to local storage
//   const saveHistory = (newHistory: HISTORY) => {
//     const updatedHistory = [newHistory, ...historyList];
//     setHistoryList(updatedHistory);
//     localStorage.setItem("aiSearchHistory", JSON.stringify(updatedHistory));
//   };

//   // Handle adding a new history entry
//   const handleAddHistory = () => {
//     const newHistory: HISTORY = {
//       id: Date.now(),
//       formData: "Sample Form Data",
//       aiResponse: "Generated AI Response",
//       templateSlug: "write-code",
//       createdAt: new Date().toISOString(),
//     };
//     saveHistory(newHistory);
//   };

//   // Get template name and icon by slug
//   const getTemplateName = (slug: string) => {
//     return (
//       Templates.find((item) => item.slug === slug) || {
//         name: "Unknown",
//         icon: "/placeholder.svg",
//       }
//     );
//   };

//   return (
//     <div className="m-5 p-5 border rounded-lg bg-white">
//       <h2 className="font-bold text-3xl">History</h2>
//       <p className="text-gray-500">Search your previously generated AI content</p>

//       <Button variant="primary" className="mt-5" onClick={handleAddHistory}>
//         Add New History
//       </Button>

//       <div className="grid grid-cols-7 font-bold bg-secondary mt-5 p-3">
//         <h2 className="col-span-2">TEMPLATE</h2>
//         <h2 className="col-span-2">AI RESP</h2>
//         <h2>DATE</h2>
//         <h2>WORDS</h2>
//         <h2>COPY</h2>
//       </div>

//       {historyList.length === 0 ? (
//         <div className="text-center mt-5">No history found.</div>
//       ) : (
//         historyList.map((item: HISTORY) => (
//           <div
//             key={item.id}
//             className="grid grid-cols-7 my-5 py-3 px-3 border rounded-lg"
//           >
//             <h2 className="col-span-2 flex gap-2 items-center">
//               <Image
//                 src={getTemplateName(item.templateSlug).icon}
//                 width={25}
//                 height={25}
//                 alt={getTemplateName(item.templateSlug).name}
//               />
//               {getTemplateName(item.templateSlug).name}
//             </h2>
//             <h2 className="col-span-2 line-clamp-3">{item.aiResponse}</h2>
//             <h2>
//               {new Date(item.createdAt).toLocaleDateString("en-US", {
//                 dateStyle: "medium",
//               })}
//             </h2>
//             <h2>{item.aiResponse.length}</h2>
//             <h2>
//               <Button
//                 variant="ghost"
//                 className="text-primary"
//                 onClick={() => {
//                   navigator.clipboard
//                     .writeText(item.aiResponse)
//                     .then(() => {
//                       alert("Copied to clipboard!");
//                     })
//                     .catch((err) => {
//                       console.error("Failed to copy:", err);
//                     });
//                 }}
//               >
//                 Copy
//               </Button>
//             </h2>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }























"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdAt: string;
}

const Templates = [
  { slug: "write-code", name: "Write Code", icon: "/icons/code.svg" },
  { slug: "instagram-hashtags", name: "Instagram Hash Tag Generator", icon: "/icons/instagram.svg" },
  { slug: "blog-ideas", name: "Blog Topic Ideas", icon: "/icons/blog.svg" },
];

export default function History() {
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(false);

  // Load history from local storage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem("aiSearchHistory");
    if (storedHistory) {
      console.log("history1")
      setHistoryList(JSON.parse(storedHistory));
    } else {
      // Fetch history from the backend if not found in localStorage
      console.log("history2")
      fetchHistoryFromBackend();

    }
  }, []);

  // Function to fetch history from backend
  const fetchHistoryFromBackend = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/history');
      if (!response.ok) {
        throw new Error('Failed to fetch history');
      }
      const data = await response.json();

      // Save the fetched data to localStorage and React state
      localStorage.setItem("aiSearchHistory", JSON.stringify(data));
      setHistoryList(data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setLoading(false);
    }
  };

  // Save history to local storage
  const saveHistory = (newHistory: HISTORY) => {
    const updatedHistory = [newHistory, ...historyList];
    setHistoryList(updatedHistory);
    localStorage.setItem("aiSearchHistory", JSON.stringify(updatedHistory));
  };

  // Handle adding a new history entry
  const handleAddHistory = () => {
    const newHistory: HISTORY = {
      id: Date.now(),
      formData: "Sample Form Data", // You may replace this with real form data
      aiResponse: "Generated AI Response", // Replace with AI response
      templateSlug: "write-code", // This should be dynamic depending on the selected template
      createdAt: new Date().toISOString(),
    };
    saveHistory(newHistory);
  };

  // Get template name and icon by slug
  const getTemplateName = (slug: string) => {
    return (
      Templates.find((item) => item.slug === slug) || {
        name: "Unknown",
        icon: "/placeholder.svg", // Placeholder if template not found
      }
    );
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>

      {/* <Button variant="primary" className="mt-5" onClick={handleAddHistory}>
        Add New History
      </Button> */}

      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 p-3">
        <h2 className="col-span-1">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2 className="px-4">DATE</h2>
        <h2>WORDS</h2>
        <h2 className="px-4">COPY</h2>
      </div>

      {loading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : historyList.length === 0 ? (
        <div className="text-center mt-5">No history found.</div>
      ) : (
        historyList.map((item: HISTORY) => (
          <div
            key={item.id}
            className="grid grid-cols-7 my-5 py-3 px-3 border rounded-lg p-8"
          >
            <h2 className="col-span-1 flex gap-2 items-center">
              {/* <Image
                src={getTemplateName(item.templateSlug).icon}
                width={25}
                height={25}
                alt={getTemplateName(item.templateSlug).name}
              /> */}
              {item.templateSlug}
            </h2>
            <h2 className="col-span-2 line-clamp-3">{item.aiResponse}</h2>
            <h2 className="px-4">
              {item.createdAt}
            </h2>
            <h2>{item.aiResponse.length}</h2>
            <h2>
              <Button
                variant="ghost"
                className="text-primary"
                onClick={() => {
                  navigator.clipboard
                    .writeText(item.aiResponse)
                    .then(() => {
                      alert("Copied to clipboard!");
                    })
                    .catch((err) => {
                      console.error("Failed to copy:", err);
                    });
                }}
              >
                Copy
              </Button>
            </h2>
          </div>
        ))
      )}
    </div>
  );
}
