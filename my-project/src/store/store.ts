import { configureStore } from "@reduxjs/toolkit";
import  { coinListSlice } from "./slices/CoinListSlice";
import  { NewsListSlice } from "./slices/NewsSlice";
import { tariffSlice } from "./slices/TariffSlice";


export const store = configureStore( { 
    reducer: {
        cryptoCoinList: coinListSlice.reducer,
        newsList: NewsListSlice.reducer,
        tariff:tariffSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch