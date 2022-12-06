import { configureStore } from "@reduxjs/toolkit";
import  { coinListSlice } from "./slices/CoinListSlice";
import  { NewsListSlice } from "./slices/NewsSlice";
import { UserSlice } from "./slices/UserSlice";


export const store = configureStore( { 
    reducer: {
        cryptoCoinList: coinListSlice.reducer,
        newsList: NewsListSlice.reducer,
        userInfo: UserSlice.reducer
    },
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch