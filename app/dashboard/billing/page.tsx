
// "use client";
// import { Button } from "@/components/ui/button";
// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import { UserSubscription } from "@/utils/schema";
// import { db } from "@/utils/db";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { useRouter } from "next/navigation";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

// function Billing() {
//   const [loading, setLoading] = useState(false);
//   const { user } = useUser();
//   const router = useRouter();
//   const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
//   const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

//   // Dynamically load Razorpay script
//   useEffect(() => {
//     const loadRazorpayScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => setIsRazorpayLoaded(true);
//       script.onerror = () => console.error("Failed to load Razorpay script");
//       document.body.appendChild(script);
//     };
//     loadRazorpayScript();
//   }, []);

//   const CreateSubscription = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/create-subscription", {});
//       console.log("Subscription API Response:", response.data);
      
//       if (response.data?.id) {
//         OnPayment(response.data.id);
//       } else {
//         throw new Error("Invalid subscription response");
//       }
//     } catch (error) {
//       console.error("Error creating subscription:", error);
//       setLoading(false);
//     }
//   };

//   const OnPayment = (subId: string) => {
//     if (!isRazorpayLoaded) {
//       console.error("Razorpay script not loaded");
//       setLoading(false);
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       subscription_id: subId,
//       name: "AI Content Generator App",
//       description: "Monthly Subscription",
//       handler: async (resp: any) => {
//         console.log("Razorpay Payment Response:", resp);
//         if (resp.razorpay_payment_id) {
//           await SaveSubscription(resp.razorpay_payment_id);
//           router.push("/dashboard/content");
//         } else {
//           console.error("Payment ID not received");
//         }
//         setLoading(false);
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   };

//   const SaveSubscription = async (paymentId: string) => {
//     try {
//       console.log("Saving Subscription with Payment ID:", paymentId);
//       const result = await db.insert(UserSubscription).values({
//         email: user?.primaryEmailAddress?.emailAddress || "",
//         userName: user?.fullName || "",
//         active: true,
//         paymentId: paymentId,
//         joinDate: moment().format("YYYY-MM-DD"),
//       });

//       console.log("Subscription saved:", result);
//       if (result) {
//         setUserSubscription(result);
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error("Error saving subscription:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-gray-900">Upgrade With Monthly Premium</h2>
//         <p className="mt-2 text-lg text-gray-600">Choose the plan that best fits your needs</p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-8">
//         {/* Free Plan */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 rounded-xl bg-white shadow-lg border border-gray-200 p-6">
//           <div className="text-center">
//             <h2 className="text-xl font-semibold text-green-600">Free Plan</h2>
//             <p className="mt-4">
//               <strong className="text-4xl font-extrabold text-gray-900">0$</strong>
//               <span className="text-sm font-medium text-gray-600"> /month</span>
//             </p>
//           </div>

//           <ul className="mt-8 space-y-3">
//             {["10,000 Words/Month", "50+ Content Templates", "Unlimited Download & Copy", "1 Month of History"].map((feature, index) => (
//               <li key={index} className="flex items-center gap-2 text-gray-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-600">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
//                 </svg>
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           <a href="#" className="mt-8 block w-full rounded-full bg-gray-500 text-white py-3 text-sm font-medium text-center hover:bg-gray-700 transition">
//             Currently Active Plan
//           </a>
//         </div>

//         {/* Monthly Plan */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 rounded-xl bg-white shadow-lg border border-gray-200 p-6">
//           <div className="text-center">
//             <h2 className="text-xl font-semibold text-gray-900">Monthly Plan</h2>
//             <p className="mt-4">
//               <strong className="text-4xl font-extrabold text-gray-900">9.99$</strong>
//               <span className="text-sm font-medium text-gray-600"> /month</span>
//             </p>
//           </div>

//           <ul className="mt-8 space-y-3">
//             {["1,00,000 Words/Month", "50+ Template Access", "Unlimited Download & Copy", "1 Year of History"].map((feature, index) => (
//               <li key={index} className="flex items-center gap-2 text-gray-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-600">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
//                 </svg>
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           <button
//             disabled={loading}
//             onClick={CreateSubscription}
//             className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition">
//             {loading && <Loader2Icon className="animate-spin" />}
//             {userSubscription ? "Active Plan" : "Get Started"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Billing;





























"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => setIsRazorpayLoaded(true);
      script.onerror = () => console.error("Failed to load Razorpay script");
      document.body.appendChild(script);
    };
    loadRazorpayScript();
  }, []);

  const CreateSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/create-subscription", {});
      console.log("Subscription API Response:", response.data);
      
      if (response.data?.id) {
        OnPayment(response.data.id);
      } else {
        throw new Error("Invalid subscription response");
      }
    } catch (error) {
      console.error("Error creating subscription:", error);
      setLoading(false);
    }
  };

  const OnPayment = (subId: string) => {
    if (!isRazorpayLoaded) {
      console.error("Razorpay script not loaded");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "AI Content Generator App",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log("Razorpay Payment Response:", resp);
        if (resp.razorpay_payment_id) {
          await SaveSubscription(resp.razorpay_payment_id);
          router.push("/dashboard/content");
        } else {
          console.error("Payment ID not received");
        }
        setLoading(false);
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    try {
      console.log("Saving Subscription with Payment ID:", paymentId);
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress || "",
        userName: user?.fullName || "",
        active: true,
        paymentId: paymentId,
        joinDate: moment().format("YYYY-MM-DD"),
      });

      console.log("Subscription saved:", result);
      if (result) {
        setUserSubscription(result);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving subscription:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Upgrade With Monthly Premium</h2>
        <p className="mt-2 text-lg text-gray-600">Choose the plan that best fits your needs</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Free Plan */}
        <div className="w-full sm:w-1/2 lg:w-1/3 rounded-xl bg-white shadow-lg border border-gray-200 p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">Free Plan</h2>
            <p className="mt-4">
              <strong className="text-4xl font-extrabold text-gray-900">0$</strong>
              <span className="text-sm font-medium text-gray-600"> /month</span>
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {["10,000 Words/Month", "50+ Content Templates", "Unlimited Download & Copy", "1 Month of History"].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                ✅ {feature}
              </li>
            ))}
          </ul>

          {/* Active plan button styling */}
          <a
            href="#"
            className={`mt-8 block w-full rounded-full py-3 text-sm font-medium text-center transition ${
              !userSubscription ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-500 text-white hover:bg-gray-700"
            }`}
          >
            Currently Active Plan
          </a>
        </div>

        {/* Monthly Plan */}
        <div className="w-full sm:w-1/2 lg:w-1/3 rounded-xl bg-white shadow-lg border border-gray-200 p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Monthly Plan</h2>
            <p className="mt-4">
              <strong className="text-4xl font-extrabold text-gray-900">9.99$</strong>
              <span className="text-sm font-medium text-gray-600"> /month</span>
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {["1,00,000 Words/Month", "50+ Template Access", "Unlimited Download & Copy", "1 Year of History"].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                ✅ {feature}
              </li>
            ))}
          </ul>

          {/* Subscription Button */}
          <button
            disabled={loading}
            onClick={CreateSubscription}
            className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition ${
              userSubscription ? "bg-gray-500 text-white hover:bg-gray-700" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
            }`}
          >
            {loading && <Loader2Icon className="animate-spin" />}
            {userSubscription ? "Active Plan" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
