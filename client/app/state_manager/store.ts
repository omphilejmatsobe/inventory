'use client'

import { configureStore } from "@reduxjs/toolkit"
import navReducer from "@/app/state_manager/state_variables/NavStates/navstate"

export const store = configureStore({
    reducer: {
        stateRecoder: navReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch