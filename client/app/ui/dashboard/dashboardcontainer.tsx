'use client'

import { ReactNode } from "react";
import Topnav from "@/app/ui/topnav";
import Sidenav from "@/app/ui/sidenav";
import { RootState } from "@/app/state_manager/store";
import { useSelector } from "react-redux";

export default function Dashboardcontainer({children}:{children:ReactNode}) {

  const SideNavOpenState = useSelector((state:RootState) => state.stateRecoder.sideNavState);

  return (
    <div className={`flex flex-col bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Topnav/>
      <Sidenav/>
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-100 ${SideNavOpenState == true ? "md:pl-80": "md:pl-24 "}`}>
        
        {children}
      </main>
    </div>
  )
}