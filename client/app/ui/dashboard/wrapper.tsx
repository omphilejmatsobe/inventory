'use client'
import "@/app/ui/globals.css";
import SideNav from "../sideNav";
import DashTopNav from "../dashTopNav";
import StoreProvider, { useAppSelector } from "@/app/redux";
import { useEffect } from "react";


function DashboardLayout({children}:{ children: React.ReactNode}) {
    const isSideNavOpen = useAppSelector((state) => state.global.isSideNavOpen);
    const isDarkModeOn = useAppSelector((state) => state.global.isDarkModeOn);

    useEffect(()=>
    {
        if (isDarkModeOn)
        {
            document.documentElement.classList.add("dark");
        }
        else
        {
            document.documentElement.classList.add("light");
        }
    });

  return (
    <div className={`${isDarkModeOn ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <SideNav/>
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${!isSideNavOpen ? "md:pl-72" : "md:pl-24"}`}>
        <DashTopNav/>
        {children}
      </main>
    </div>
  );
}

function DashboardWrapper({children}:{ children: React.ReactNode}) {
  return (
    <StoreProvider>
        <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}

export default DashboardWrapper;