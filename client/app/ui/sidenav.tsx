'use client'

import { Icon, source } from "@/app/ui/icons/icons";
import { RootState } from "@/app/state_manager/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideNav } from "@/app/state_manager/state_variables/NavStates/navstate";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideNavLinkProps
{
  name:string,
  href:string,
  icon:source,
  IsSideNavOpen:boolean,
}

const SidenavLinks =
(
  {
    name,
    href,
    icon,
    IsSideNavOpen,

  } : SideNavLinkProps
) =>
{
  const path = usePathname();
  const activeLink = path === href || (path === "/" || path === "/dashboard")

  return
  (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${IsSideNavOpen ? "justify-start px-8" : "justify-center" } py-4 
                       hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${activeLink ? "bg-blue-200 text-white" : ""}`}>
        <Icon h={20} w={20} icon={icon} className=""/>
        <span className={`${IsSideNavOpen ? "block" : "hidden"} font-medium text-gray-700`}>
          {
            name
          }
        </span>
      </div>
    </Link>
  )
  
}

export default function Sidenav() {
  
  const SideNavOpenState = useSelector((state:RootState) => state.stateRecoder.sideNavState);
  const Dispatch = useDispatch();

  return (
    <div className={`flex flex-col ${SideNavOpenState == true ? "w-72 md:64" :  "w-0 md:w-14 md:16"}
                     bg-white overflow-hidden h-[100vh] shadow-md z-40 fixed md:static`}>

      {/* Logo */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${SideNavOpenState == true ? "" : ""} px-2`}>
        <div className="w-10 h-10 flex items-center">
          Logo
        </div>
        <h3 className={`font-extrabold text-2xl ${SideNavOpenState == true ? "block" : "hidden"}`}>CarNova</h3>
        <button className="md:hidden w-[44px] h-[44px] px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=>Dispatch(toggleSideNav())}>
          <Icon h={20} w={20} icon={source.menu} className=""/>
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-8">
        <Link href="/">
          <div className={`cursor-pointer flex items-center ${true ? "justify-start px-8" : "justify-center" } py-4 
                          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${true ? "bg-blue-200 text-white" : ""}`}>
            <Icon h={20} w={20} icon={source.bell} className=""/>
            <span className={`${true ? "block" : "hidden"} font-medium text-gray-700`}>
              {
                "Dashbaord"
              }
            </span>
          </div>
        </Link>
      </div>

      {/* Bottom */}
      <div>
        
      </div>
    </div>
  )
}
