'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface NavStates{
    currentState: boolean
}

const initialState: NavStates =
{
    currentState: true
}

export const navSlice = createSlice(
    {
        name: "navState",
        initialState,
        reducers:
        {
            openSideNav: (state:NavStates) => { state.currentState = true},
            closeSideNav: (state) => { state.currentState = false },
            toggleSideNav: (state) => { state.currentState = !state.currentState }
        }
    }
)

export const {openSideNav, closeSideNav, toggleSideNav} = navSlice.actions;
export default navSlice.reducer;