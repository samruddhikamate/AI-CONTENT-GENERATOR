"use client";
import { SignOutButton } from "@clerk/nextjs";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import {  History, CreditCard} from 'lucide-react'

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/Settings',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className="h-screen p-5 shadow-sm border bg-white flex flex-col">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border" />


      
      <div className="mt-3 flex-grow">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>

      {/* <div className="absolute bottom-2 left-0 w-full px-5">
        <SignOutButton>
          <button
            className="w-full py-3 bg-gradient-to-r text-primary from-purple-500 to-pink-500 text-white rounded-lg text-center font-semibold shadow-lg hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
          >
            Sign Out
          </button>
        </SignOutButton>
      </div> */}
      
    </div>
  );
}

export default SideNav;




















