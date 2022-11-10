import { configureStore } from "@reduxjs/toolkit";
import CoinListSlice, { coinListSlice } from "./reducers/CoinListSlice";


export const store = configureStore( { 
    reducer: {
        cryptoCoinList: coinListSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch