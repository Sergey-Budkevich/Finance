import { createSlice } from "@reduxjs/toolkit"



type initialStateType = {
    currentTariff: "average" | "elevated" | "upper" | "supreme" | null,
}

const initialState: initialStateType = {
    currentTariff: null
}

export const tariffSlice = createSlice({
    name: 'tariff',
    initialState,
    reducers: {
        changeCurrentTariff: (state: {currentTariff: "average" | "elevated" | "upper" | "supreme" | null} ,action) => {
            state.currentTariff = action.payload;
            localStorage.setItem('currentTariff', `${action.payload}`);
        }
    }
})

export const {changeCurrentTariff} = tariffSlice.actions

// export default tariffSlice.reducer