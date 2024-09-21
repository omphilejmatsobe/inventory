'use client'

import Navbar from "@/app/ui/navbar";
import Sidebar from "@/app/ui/sidebar"
import StoreProvider, { useAppSelector } from "@/app/redux";
import { useEffect } from "react";

function DashboardLayout({children} : {children : React.ReactNode}) {

  const isSideBarActive = useAppSelector((state) => state.global.isSideBarActive);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  
  useEffect(()=>{
    if (isDarkMode)
    {
      document.documentElement.classList.add("dark");
    }
    else
    {
      document.documentElement.classList.add("light");
    }
  })

  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-50 w-full min-h-screen`}>
      <Sidebar/>
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200 ${isSideBarActive? "md:pl-72": "md:pl-24"}`}>
        <Navbar/>
        {children}
      </main>
    </div>
  );
}


export default function DashboardContainer({children} : {children : React.ReactNode}) {
  return (
    <StoreProvider><DashboardLayout>{children}</DashboardLayout></StoreProvider>
  );
}
