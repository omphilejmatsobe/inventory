'use client'

import { ReactNode } from "react";
import Topnav from "@/app/ui/topnav";
import Sidenav from "@/app/ui/sidenav";
import { RootState } from "@/app/state_manager/store";
import { useSelector } from "react-redux";


export default function Dashboardcontainer({children}:{children:ReactNode}) {

  const SideNavOpenState = useSelector((state:RootState) => state.stateRecoder.currentState);
  

  return (
    <div className={`${SideNavOpenState === true ? "": ""} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidenav/>
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
        <Topnav/>
        {children}
      </main>
    </div>
  )
}
