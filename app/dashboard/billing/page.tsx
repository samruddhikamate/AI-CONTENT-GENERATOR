"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import axios from 'axios';
import { error } from 'console';
import { Loader2Icon } from 'lucide-react';

function Billing() {
 const [loading,setLoading]=useState(false);

  const CreateSubscription=()=>{
    setLoading(true);
      axios.post('/api/create-subscription', {}).then(resp => {
         console.log(resp.data);
         OnPayment(resp.data.id)},
         (error)=> {
        setLoading(false);
    })
  }

    const OnPayment=(subId:string)=>{
      const options={
        "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        "subscription_id":subId,
        "name": 'ACG AI App',
        description:'Monthly Subscription',
        handler:async(resp:any)=>{
          console.log(resp);
          setLoading(false);
      }
    }

    //@ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();

    }

  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto max-w-3xl px-8 py-8 sm:py-12">
        <h2 className="text-center font-bold text-3xl my-3">Upgrade With Monthly Premium</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:items-center">
        {/* Free Plan */}
        <div className="rounded-2xl bg-white border border-gray-200">
          <div className="text-center">
            <h2 className="text-lg font-medium text-green-900">
              Free
              <span className="sr-only"> Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900">0</strong>
              <span className="text-sm font-medium text-gray-700"> /month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">10,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">50+ Content Templates</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">Unlimited Download & Copy</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">1 Month of History</span>
            </li>
          </ul>

          <a
            href="#"
            className="mt-8 block rounded-full border border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-500 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none"
          >
            Currently Active Plan
          </a>
        </div>

        {/* Monthly Plan */}
        <div className="rounded-2xl bg-white border border-gray-200">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Monthly
              <span className="sr-only"> Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900">29</strong>
              <span className="text-sm font-medium text-gray-700"> /month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">1 Year of History</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">50+ Template Access</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <span className="text-gray-700">Unlimited Download & Copy</span>
            </li>
          </ul>

          <button
          disabled={loading}
          onClick={()=>OnPayment()}
            className="mt-8 block rounded-full border flex gap-2 items-center border-indigo-600 px-12 py-3 text-center text-sm font-medium bg-gray-900 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none"
          >
            
            {loading&&<Loader2Icon className='animate-spin'/>}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
