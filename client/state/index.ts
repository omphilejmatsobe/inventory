import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitStateTypes{
    isSideNavOpen: boolean;
    isDarkModeOn: boolean;
};

const initialState: InitStateTypes = {
    isSideNavOpen: true,
    isDarkModeOn: false,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSideNavOpen : (state, action: PayloadAction<boolean>) => {
            state.isSideNavOpen = action.payload;
        },
        setIsDarkModeOn: (state, action: PayloadAction<boolean>) => {
            state.isDarkModeOn = action.payload;
        }
    }
})

export const {setIsDarkModeOn, setIsSideNavOpen} = globalSlice.actions;
export default globalSlice.reducer;