'use client'
import { Archive, Icon, Layout, LucideClipboardList, LucideIcon, LucideLogOut, LucideSettings, Menu, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux";
import { setIsSideNavOpen } from "@/state";


interface SideNaveLinkInterface {href:string; Icon:LucideIcon; label:string, isSideNavOpen:boolean }

const SideNavLink = ({href, Icon, label, isSideNavOpen }:SideNaveLinkInterface) => {

  const pathName = usePathname();
  const isActive = (pathName === href);

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center  ${isSideNavOpen ? "justify-center py-4" : "justify-start px-8 py-4"} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white": ""}`}>
        <Icon className="w-6 h-6 !text-gray-700"/>
        <span className={`${isSideNavOpen ? "hidden" : "block"} font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  )
}

export default function SideNav() {

  const dispatch = useDispatch();
  const isSideNavOpen = useAppSelector((state) => state.global.isSideNavOpen);
  const isDarkModeOn = useAppSelector((state) => state.global.isDarkModeOn);

  return (
    <div className={`${!isSideNavOpen? "w-72 md:w-64" : "w-0 md:w-16 "} fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-20`}>
      {/* Top */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${!isSideNavOpen? "px-5" : "px-8"}`}>
        <div>Logo</div>
        <h1 className={`${isSideNavOpen ? "hidden" : "block"} font-extrabold text-2xl`}>EDSTOCK</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => dispatch(setIsSideNavOpen(!isSideNavOpen))}>
          <Menu className="w-4 h-4"/>
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-grow mt-8">
        <SideNavLink href={"/dashboard"} Icon={Layout} label={"Dashboard"} isSideNavOpen={isSideNavOpen}/>
        <SideNavLink href={"/dashboard/inventory"} Icon={Archive} label={"Inventory"} isSideNavOpen={isSideNavOpen}/>
        <SideNavLink href={"/dashboard/products"} Icon={LucideClipboardList} label={"Products"} isSideNavOpen={isSideNavOpen}/>
        <SideNavLink href={"/dashboard/users"} Icon={User} label={"Users"} isSideNavOpen={isSideNavOpen}/>
        <SideNavLink href={"/dashboard/expenses"} Icon={Layout} label={"Expenses"} isSideNavOpen={isSideNavOpen}/>
      </div>

      {/* Bottom */}
      <div className="flex-grow mt-8">
        <SideNavLink href={"/dashboard/settings"} Icon={LucideSettings} label={"Settings"} isSideNavOpen={isSideNavOpen}/>
        <SideNavLink href={"/dashboard/settings"} Icon={LucideLogOut} label={"Logout"} isSideNavOpen={isSideNavOpen}/>
      </div>
    </div>
  )
}