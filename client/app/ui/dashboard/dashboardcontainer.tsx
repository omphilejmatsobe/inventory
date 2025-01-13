import { ReactNode } from "react";
import Topnav from "@/app/ui/topnav";
import Sidenav from "@/app/ui/sidenav";

export default function Dashboardcontainer({children}:{children:ReactNode}) {
  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <Sidenav/>
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
        <Topnav/>
        {children}
      </main>
    </div>
  )
}
