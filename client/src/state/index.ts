import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
    isSideBarActive: boolean;
    isDarkMode: boolean
}

const initialState: initialStateTypes = {
    isSideBarActive: true,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSideBarActive: (state, action: PayloadAction<boolean>) => {
            state.isSideBarActive = action.payload;
        },

        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
})

export const {setIsSideBarActive, setIsDarkMode} = globalSlice.actions;

export default globalSlice.reducer;