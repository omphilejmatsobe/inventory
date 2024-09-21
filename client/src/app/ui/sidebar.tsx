'use client';

import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, Settings, SlidersHorizontal, User } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSideBarActive } from "@/state";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideNavLinkProps{
  href:string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
} 

const SideNavLinks = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SideNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === '/' && href === '/dashboard');
  
  return    <Link href={href}>
              <div
                className={`cursor-pointer flex items-center ${
                  isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
                }
                hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
                  isActive ? "bg-blue-200 text-white" : ""
                }
              }`}
              >
                <Icon className="w-6 h-6 !text-gray-700" />

                <span
                  className={`${
                    isCollapsed ? "hidden" : "block"
                  } font-medium text-gray-700`}
                >
                  {label}
                </span>
              </div>
            </Link>

}

export default function Sidebar() {

  const dispatch = useAppDispatch();
  const isSideBarActive = useAppSelector((state) => state.global.isSideBarActive);

  const toggleSideNav = () => {
    dispatch(setIsSideBarActive(!isSideBarActive));
  }

  const sideNavStyle = `fixed flex flex-col ${isSideBarActive ? "w-72 md:w-64" : "w-0 md:w-16"} bg-white transition-all duration-300 overflow-hidden
  h-full shadow-md z-40`;

  return (
    <div className={sideNavStyle}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          !isSideBarActive ? "px-5" : "px-8"
        }`}
      >
        <div className="text-gray-900">Logo</div>
        <h1
          className={`${
            !isSideBarActive ? "hidden" : "block"
          } font-extrabold text-2xl text-gray-900`}
        >
          RATIONALE
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSideNav}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SideNavLinks
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={!isSideBarActive}
        />
        <SideNavLinks
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={!isSideBarActive}
        />
        <SideNavLinks
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={!isSideBarActive}
        />
        <SideNavLinks
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={!isSideBarActive}
        />
        <SideNavLinks
          href="/settings"
          icon={Settings}
          label="Settings"
          isCollapsed={!isSideBarActive}
        />
        <SideNavLinks
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={!isSideBarActive}
        />
      </div>

      {/* FOOTER */}
      <div className={`${!isSideBarActive? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Rationale</p>
      </div>
    </div>
  );
}
