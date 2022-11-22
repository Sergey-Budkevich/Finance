import { configureStore } from "@reduxjs/toolkit";
import  { coinListSlice } from "./slices/CoinListSlice";
import  { NewsListSlice } from "./slices/NewsSlice";


export const store = configureStore( { 
    reducer: {
        cryptoCoinList: coinListSlice.reducer,
        newsList: NewsListSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch