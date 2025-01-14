'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface NavStates{
    sideNavState: boolean,
    darkModeState: boolean
}

const initialState: NavStates =
{
    sideNavState: true,
    darkModeState: false
}

export const navSlice = createSlice(
    {
        name: "navState",
        initialState,
        reducers:
        {
            openSideNav: (state:NavStates) => { state.sideNavState = true},
            closeSideNav: (state) => { state.sideNavState = false },
            toggleSideNav: (state) => { state.sideNavState = !state.sideNavState },
            
            toggleDarkMode: (state) => { state.darkModeState = !state.darkModeState}
        }
    }
)

export const {openSideNav, closeSideNav, toggleSideNav, toggleDarkMode} = navSlice.actions;
export default navSlice.reducer;