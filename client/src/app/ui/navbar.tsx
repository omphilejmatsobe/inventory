'use client'
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../redux';
import { setIsDarkMode, setIsSideBarActive } from '@/state';

export default function Navbar() {

    
  const dispatch = useAppDispatch();
  const isSideBarActive = useAppSelector((state) => state.global.isSideBarActive);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleNav = () =>
  {
    dispatch(setIsSideBarActive(!isSideBarActive));
  };

  const toggleColor = () =>
  {
    dispatch(setIsDarkMode(!isDarkMode));
  }
  
  const toggleNotifications = () =>
  {
  
  }


  return (
    <header>
      <nav className="flex justify-between items-center w-full mb-7 text-gray-900 ">
        <div className={`flex justify-between items-center gap-5`}>
          <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleNav}><Menu className="w-4 h-4 text-gray-500"/></button>
          <div className='relative'>
            <input type='search' placeholder='search products' className='flex pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounder-lg focus:outline-none focus:border-blue-500'/>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Bell className='text-gray-500' size={20}/>
            </div>
          </div>
        </div>
        <div className='flex justify-between gap-5 items-center'>
          <div className='md:flex hidden justify-between items-center'>
            <div>
              <button onClick={toggleColor}>
                {
                  isDarkMode ? <Sun className='cursor-pointer text-gray-500 mx-1' size={24}/> : <Moon className='cursor-pointer text-gray-500 mx-1' size={24}/>
                }
              </button>
            </div>
            <div className='relative'>
              <Bell className='cursor-pointer text-gray-500 mx-1' size={24}/>
              <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              3
              </span>
            </div>
            <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3'/>
            <div className='cursor-pointer gap-3 flex items-center'>
              <div className='w-9 h-9'>
                image
              </div>
              <span className='font-semibold'>Karabo</span>
            </div>
          </div>
          <Link href='/settings'><Settings className='cursor-pointer text-gray-500 mx-4' size={24}/></Link>
        </div>
      </nav>
    </header>
  );
}
