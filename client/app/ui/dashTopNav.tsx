'use client'
import { Bell, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../redux";
import { useDispatch } from "react-redux";
import { setIsDarkModeOn, setIsSideNavOpen } from "@/state";

export default function DashTopNav() {

  const [onToggle, setOnToggle] = useState(false);
  const [onLightMode, setOnLightMode] = useState(true);
  
  const isSideNavOpen = useAppSelector((state) => state.global.isSideNavOpen);
  const isDarkModeOn = useAppSelector((state) => state.global.isDarkModeOn);

  const dispatch = useDispatch();

  /* Toggles the side navigation display, on and off */
    function toggleNav () 
    {
      dispatch(setIsSideNavOpen(!isSideNavOpen))
    }

    /* Toggles between the light mode and dark mode */
    function toggleLightMode()
    {
      dispatch(setIsDarkModeOn(!isDarkModeOn));
    }
  
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        {/* Left Side */}
        <div className='flex justify-between gap-5 items-center'>
          <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 mx-4' onClick={() => dispatch(setIsSideNavOpen(!isSideNavOpen))}>
            <Menu className=""/>
          </button>
          <div className="relative">
            <input type="search" placeholder="Search.." className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"/>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Bell className="text-gray-500" size={20}/>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between gap-5">
          <div className="hidden md:flex justify-between items-center gap-5">
            <div>
              <button onClick={() => dispatch(setIsDarkModeOn(!isDarkModeOn))}>
                <Sun className="cursor-pointer text-gray-500 ml-4" size={24}/>
              </button>
            </div>
            <div className="relative">
              <Bell className="cursor-pointer text-gray-500" size={24}/>
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full ">
                3
              </span>
            </div>
            <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3"></hr>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9">
                img
              </div>
              <span className="font-semibold ">Kar Boo</span>
            </div>
          </div>
          <Link href="/settings">
            <Settings className="cursor-pointer text-gray-500 ml-4" size={24}/>
          </Link>
        </div>
    </div>
  )
}
