// "use client"
// import { Button } from '@/components/ui/button';
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { error } from 'console';
// import { Loader2Icon } from 'lucide-react';
// import { UserSubscription } from '@/utils/schema';
// import { db } from '@/utils/db';
// import { useUser } from '@clerk/nextjs';
// import moment from 'moment';
// import router from 'next/router';
// import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';


// function Billing() {
//  const [loading,setLoading]=useState(false);
//  const {user }=useUser();
//  const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);

//   const CreateSubscription=()=>{
//     setLoading(true);
//       axios.post('/api/create-subscription', {}).then(resp => {
//          console.log(resp.data);
//          OnPayment(resp.data.id)},(error)=> {
//           setLoading(false);
//     })
//   }

//     const OnPayment=(subId:string)=>{
//       const options={
//         "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         "subscription_id":subId,
//         "name": 'Sanika App',
//         description:'Monthly Subscription',
//         handler:async(resp:any)=>{
//           console.log(resp);
//           if(resp){
//             SaveSubcription(resp.razorpay_payment_id);
//             router.push('/dashboard/content');
//           }
//           setLoading(false);
//       }
//     }

//     //@ts-ignore
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//     }

//     const SaveSubcription=async(paymentId:string)=>{
//       const result=await db.insert(UserSubscription).values({
//         email:user?.primaryEmailAddress?.emailAddress,
//         userName:user?.fullName,
//         active:true,
//         paymentId:paymentId,
//         joinDate:moment().format('DD/MM/yyyy')
//       });
//       console.log(result);
//       if(result){
//         window.location.reload();
//       }

//     }

//   return (
//     <div>
//       <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
//       <div className="mx-auto max-w-3xl px-8 py-8 sm:py-12">
//         <h2 className="text-center font-bold text-3xl my-3">Upgrade With Monthly Premium</h2>
//       </div>

//       <div className="grid grid-cols-1 gap-4 sm:items-center">
//         {/* Free Plan */}
//         <div className="rounded-2xl bg-white border border-gray-200">
//           <div className="text-center">
//             <h2 className="text-lg font-medium text-green-900">
//               Free
//               <span className="sr-only"> Plan</span>
//             </h2>
//             <p className="mt-2 sm:mt-4">
//               <strong className="text-3xl font-bold text-gray-900">0</strong>
//               <span className="text-sm font-medium text-gray-700"> /month</span>
//             </p>
//           </div>

//           <ul className="mt-6 space-y-2">
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">10,000 Words/Month</span>
//             </li>
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">50+ Content Templates</span>
//             </li>
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">Unlimited Download & Copy</span>
//             </li>
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">1 Month of History</span>
//             </li>
//           </ul>

//           <a
//             href="#"
//             className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-500 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none"
//           >
//             Currently Active Plan
//           </a>
//         </div>

//         {/* Monthly Plan */}
//         <div className="rounded-2xl bg-white border border-gray-200">
//           <div className="text-center">
//             <h2 className="text-lg font-medium text-gray-900">
//               Monthly
//               <span className="sr-only"> Plan</span>
//             </h2>
//             <p className="mt-2 sm:mt-4">
//               <strong className="text-3xl font-bold text-gray-900">29</strong>
//               <span className="text-sm font-medium text-gray-700"> /month</span>
//             </p>
//           </div>

//           <ul className="mt-6 space-y-2">
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">1 Year of History</span>
//             </li>
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">50+ Template Access</span>
//             </li>
//             <li className="flex items-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 className="w-5 h-5 text-indigo-700"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//               <span className="text-gray-700">Unlimited Download & Copy</span>
//             </li>
//           </ul>

//           <button
//           disabled={loading}
//           onClick={()=>CreateSubscription()}
//             className="mt-8 block rounded-full border flex gap-2 items-center border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-900 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none">
            
//             {loading&&<Loader2Icon className='animate-spin'/>}
//             {userSubscription?'Active Plan': 'Get Started'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default Billing;




















































// // "use client"
// // import { Button } from '@/components/ui/button';
// // import React, { useContext, useState } from 'react';
// // import axios from 'axios';
// // import { Loader2Icon } from 'lucide-react';
// // import { UserSubscription } from '@/utils/schema';
// // import { db } from '@/utils/db';
// // import { useUser } from '@clerk/nextjs';
// // import moment from 'moment';
// // import router from 'next/router';
// // import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

// // function Billing() {
// //   const [loading, setLoading] = useState(false);
// //   const { user } = useUser();
// //   const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

// //   const CreateSubscription = () => {
// //     setLoading(true);
// //     axios.post('/api/create-subscription', {}).then(
// //       (resp) => {
// //         console.log(resp.data);
// //         OnPayment(resp.data.id);
// //       },
// //       (error) => {
// //         setLoading(false);
// //       }
// //     );
// //   };

// //   const OnPayment = (subId: string) => {
// //     const options = {
// //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
// //       subscription_id: subId,
// //       name: 'Sanika App',
// //       description: 'Monthly Subscription',
// //       handler: async (resp: any) => {
// //         console.log(resp);
// //         if (resp) {
// //           SaveSubcription(resp.razorpay_payment_id);
// //           router.push('/dashboard/content');
// //         }
// //         setLoading(false);
// //       },
// //     };

// //     //@ts-ignore
// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   const SaveSubcription = async (paymentId: string) => {
// //     const result = await db.insert(UserSubscription).values({
// //       email: user?.primaryEmailAddress?.emailAddress,
// //       userName: user?.fullName,
// //       active: true,
// //       paymentId: paymentId,
// //       joinDate: moment().format('DD/MM/yyyy'),
// //     });
// //     console.log(result);
// //     if (result) {
// //       window.location.reload();
// //     }
// //   };

// //   return (
// //     <div>
// //       <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
// //       <div className="mx-auto max-w-5xl px-8 py-8 sm:py-12">
// //         <h2 className="text-center font-bold text-3xl my-3">Upgrade With Monthly Premium</h2>
// //       </div>

// //       <div className="flex flex-wrap justify-center gap-8">
// //         {/* Free Plan */}
// //         <div className="w-full sm:w-1/2 lg:w-1/3 rounded-2xl bg-white border border-gray-200 flex flex-col items-center">
// //           <div className="text-center">
// //             <h2 className="text-lg font-medium text-green-900">
// //               Free
// //               <span className="sr-only"> Plan</span>
// //             </h2>
// //             <p className="mt-2 sm:mt-4">
// //               <strong className="text-3xl font-bold text-gray-900">0$</strong>
// //               <span className="text-sm font-medium text-gray-700"> /month</span>
// //             </p>
// //           </div>

// //           <ul className="mt-6 space-y-2 text-center">
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">10,000 Words/Month</span>
// //             </li>
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">50+ Content Templates</span>
// //             </li>
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">Unlimited Download & Copy</span>
// //             </li>
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">1 Month of History</span>
// //             </li>
// //           </ul>

// //           <a href="#" className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-500 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none">
// //             Currently Active Plan
// //           </a>
// //         </div>

// //         {/* Monthly Plan */}
// //         <div className="w-full sm:w-1/2 lg:w-1/3 rounded-2xl bg-white border border-gray-200 flex flex-col items-center">
// //           <div className="text-center">
// //             <h2 className="text-lg font-medium text-gray-900">
// //               Monthly
// //               <span className="sr-only"> Plan</span>
// //             </h2>
// //             <p className="mt-2 sm:mt-4">
// //               <strong className="text-3xl font-bold text-gray-900">9.99$</strong>
// //               <span className="text-sm font-medium text-gray-700"> /month</span>
// //             </p>
// //           </div>

// //           <ul className="mt-6 space-y-2 text-center">
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">1,00,000 Words/Month</span>
// //             </li>
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">50+ Template Access</span>
// //             </li>
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">Unlimited Download & Copy</span>
// //             </li>
// //             <li className="flex items-center gap-1 justify-normal">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-700">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
// //               </svg>
// //               <span className="text-gray-700">1 Year of History</span>
// //             </li>
// //           </ul>

// //           <button
// //             disabled={loading}
// //             onClick={() => CreateSubscription()}
// //             className="mt-8 block rounded-full border flex gap-2 items-center border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-900 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none">
// //             {loading && <Loader2Icon className='animate-spin' />}
// //             {userSubscription ? 'Active Plan' : 'Get Started'}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Billing;





























// "use client";
// import { Button } from '@/components/ui/button';
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { Loader2Icon } from 'lucide-react';
// import { UserSubscription } from '@/utils/schema';
// import { db } from '@/utils/db';
// import { useUser } from '@clerk/nextjs';
// import moment from 'moment';
// import router from 'next/router';
// import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

// function Billing() {
//   const [loading, setLoading] = useState(false);
//   const { user } = useUser();
//   const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

//   const CreateSubscription = () => {
//     setLoading(true);
//     axios.post('/api/create-subscription', {}).then(
//       (resp) => {
//         console.log(resp.data);
//         OnPayment(resp.data.id);
//       },
//       (error) => {
//         setLoading(false);
//       }
//     );
//   };

//   const OnPayment = (subId: string) => {
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       subscription_id: subId,
//       name: 'Sanika App',
//       description: 'Monthly Subscription',
//       handler: async (resp: any) => {
//         console.log(resp);
//         if (resp) {
//           SaveSubcription(resp.razorpay_payment_id);
//           router.push('/dashboard/content');
//         }
//         setLoading(false);
//       },
//     };

//     //@ts-ignore
//     const rzp = new window.Razorpay(options);
//      rzp.open();
//   };

//   const SaveSubcription = async (paymentId: string) => {
//     const result = await db.insert(UserSubscription).values({
//       email: user?.primaryEmailAddress?.emailAddress,
//       userName: user?.fullName,
//       active: true,
//       paymentId: paymentId,
//       joinDate: moment().format('DD/MM/yyyy'),
//     });
//     console.log(result);
//     if (result) {
//       window.location.reload();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
//       <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
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

//           <a
//             href="#"
//             className="mt-8 block w-full rounded-full bg-gray-500 text-white py-3 text-sm font-medium text-center hover:bg-gray-700 transition">
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
import router from "next/router";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  // Dynamically load Razorpay script
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
      console.log(response.data);
      if (response.data.id) {
        OnPayment(response.data.id);
      }
    } catch (error) {
      console.error("Error creating subscription", error);
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
      name: "Sanika App",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          await SaveSubscription(resp.razorpay_payment_id);
          router.push("/dashboard/content");
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
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: paymentId,
        joinDate: moment().format("DD/MM/yyyy"),
      });
      console.log(result);
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving subscription", error);
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <a href="#" className="mt-8 block w-full rounded-full bg-gray-500 text-white py-3 text-sm font-medium text-center hover:bg-gray-700 transition">
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button
            disabled={loading}
            onClick={CreateSubscription}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition">
            {loading && <Loader2Icon className="animate-spin" />}
            {userSubscription ? "Active Plan" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
