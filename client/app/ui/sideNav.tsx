'use client'
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const SideNavLink = (props:any) => {

  const pathName = usePathname();
  const isActive = (pathName === props.href) || (pathName === "/dashboard");

  return (
    <Link href={"/"}>
      <div className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white": ""}`}>
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
      </div>

      {/* Bottom */}
      <div className="flex-grow mt-8">
      </div>
    </div>
  )
}