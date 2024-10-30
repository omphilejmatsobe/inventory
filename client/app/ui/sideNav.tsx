'use client'
import { Archive, Icon, Layout, LucideClipboardList, LucideIcon, LucideLogOut, LucideSettings, Menu, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface SideNaveLinkInterface {href:string; Icon:LucideIcon; label:string }

const SideNavLink = ({href, Icon, label }:SideNaveLinkInterface) => {

  const pathName = usePathname();
  const isActive = (pathName === href);

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white": ""}`}>
        <Icon className="w-6 h-6 !text-gray-700"/>
        <span className={`font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  )
}

export default function SideNav() {
  return (
    <div className="fixed flex flex-col w-72 md:w-64 bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-20">
      {/* Top */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8 px-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">EDSTOCK</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
          <Menu className="w-4 h-4"/>
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-grow mt-8">
        <SideNavLink href={"/dashboard"} Icon={Layout} label={"Dashboard"}/>
        <SideNavLink href={"/dashboard/inventory"} Icon={Archive} label={"Inventory"}/>
        <SideNavLink href={"/dashboard/products"} Icon={LucideClipboardList} label={"Products"}/>
        <SideNavLink href={"/dashboard/users"} Icon={User} label={"Users"}/>
        <SideNavLink href={"/dashboard/expenses"} Icon={Layout} label={"Expenses"}/>
      </div>

      {/* Bottom */}
      <div className="flex-grow mt-8">
        <SideNavLink href={"/dashboard/settings"} Icon={LucideSettings} label={"Settings"}/>
        <SideNavLink href={"/dashboard/settings"} Icon={LucideLogOut} label={"Logout"}/>
      </div>
    </div>
  )
}