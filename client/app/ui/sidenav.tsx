'use client'

import { Icon, source } from "@/app/ui/icons/icons";

export default function Sidenav() {
  return (
    <div>

      {/* Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>
          Logo
        </div>
        <h3 className="font-extrabold text-2xl">CarNova</h3>
        <button className="md:hidden w-[44px] h-[44px] px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=>{}}>
          <Icon h={20} w={20} icon={source.menu} className=""/>
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-8">
      </div>

      {/* Bottom */}
      <div>
        
      </div>
    </div>
  )
}
