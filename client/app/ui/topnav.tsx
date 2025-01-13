'use client'

import Link from "next/link";
import { Icon, source } from "@/app/ui/icons/icons";



export default function Topnav() {
  return (
    <header className="">
        <nav className="flex items-center justify-between w-full mb-7">
            {/* Left Nav Section */}
            <div className="flex items-center justify-between gap-5">
                <button className="px-3 py-3 w-[44px] h-[44px]  bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=>{}}>
                    <Icon h={20} w={20} icon={source.menu} className=""/>
                </button>
            

                {/* Mid Nav Section */}
                <div className="relative">
                    <input type="search"
                        placeholder="Type to search..."
                        className="pl-10 pr-4 py-2 w-52 md:w-80 border-2 
                                border-gray-300 bg-white rounded-sm 
                                focus:outline-none focus:border-blue-500"
                    />

                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon h={18} w={18} icon={source.search} className=""/>
                    </div>
                </div>
            </div>

            {/* Right Nav Section */}
            <div className="flex items-center justify-between gap-5">
                <div className="hidden md:flex justify-between items-center gap-5">
                    <button onClick={()=>{}} className="relative">
                        <Icon h={24} w={24} icon={source.bell} className="cursor-pointer"/>
                        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center
                                         rounded-full px-[0.4rem] py-1 text-xs font-semibold leading-none 
                                         text-red-100 bg-red-400"
                        >
                        3
                        </span>
                    </button>
                    <div className="w-0 h-7 border border-solid border-l border-gray-300 mx-3"/>
                    <div className="flex items-center gap-3 cursor-pointer ">
                        <div className="w-9 h-9">
                            image
                        </div>
                        <span className="font-semibold">Roy Payne</span>
                    </div>
                </div>
                <Link href="/settings">
                    <Icon h={24} w={24} icon={source.settings} className="cursor-pointer"/>
                </Link>
            </div>
        </nav>
    </header>
  )
}
