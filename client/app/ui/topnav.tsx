'use client'

import Link from "next/link";
import { Icon, source } from "@/app/ui/icons/icons";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSideNav } from "@/app/state_manager/state_variables/NavStates/navstate";
import { RootState } from "@/app/state_manager/store";
import Image from "next/image";




export default function Topnav() {

  const SideNavOpenState = useSelector((state:RootState) => state.stateRecoder.sideNavState);
  const DarkModeOn = useSelector((state:RootState) => state.stateRecoder.darkModeState);
  const Dispatch = useDispatch();

  return (
    <header className={`flex flex-col w-full items-center py-4 px-9 bg-white ${SideNavOpenState == true ? "md:pl-80": "md:pl-24 "} fixed shadow-sm`}>
        <nav className="flex items-center justify-between w-full">
            {/* Left Nav Section */}
            <div className="flex items-center justify-between gap-5">
                <button className="px-3 py-3 w-[44px] h-[44px]  bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=>Dispatch(toggleSideNav())}>
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
                    <button onClick={()=>Dispatch(toggleDarkMode())} className="relative w-[24px] h-[24px]">
                        <Icon h={24} w={24} icon={DarkModeOn ? source.sun : source.moon} className="cursor-pointer"/>
                    </button>
                    <button onClick={()=>{}} className="relative w-[24px] h-[24px]">
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
                        <div className="w-9 h-9 rounded-full bg-none overflow-hidden">
                            <Image width={36} height={36} src="/profile/profile.jpg" alt=""/>
                        </div>
                        <span className="font-semibold">Roy Payne</span>
                    </div>
                </div>
                <Link href="/settings">
                    <div className="w-[24px] h-[24px] rounded-full">
                        <Icon h={24} w={24} icon={source.settings} className="cursor-pointer"/>
                    </div>
                </Link>
            </div>
        </nav>
    </header>
  )
}
