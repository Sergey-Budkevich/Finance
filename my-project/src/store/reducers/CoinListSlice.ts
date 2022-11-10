import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import CryptoCoin from '../../types/CryptoCoin'
import { stat } from 'fs'
import { resolve } from 'path'
import { Action } from '@remix-run/router'



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
}

export const fetchCoinList:any = createAsyncThunk(
    'cryptoCoinList/fetchCoinList',
    async function ( offset:number, { rejectWithValue } ) {
        try {
            const response = await fetch(`https://coinranking1.p.rapidapi.com/coins?limit=20&offset=${20*(offset - 1)}`, options);
            if (!response.ok){
                throw new Error('Server Error!')
            }
            const data = await response.json();
            const result = data.data.coins
            return result;
        } catch (error) {
            return rejectWithValue(error + "")
        }
    }
);

export const fetchPageQty:any = createAsyncThunk(
    'cryptoCoinList/fetchPageQty',
    async function ( ) {
            const response = await fetch(`https://coinranking1.p.rapidapi.com/coins`, options);
            const data = await response.json();
            const result = (data.data.stats.totalCoins / 20).toFixed(0)
            return +result;
            
    }
);

type initialStateType = {
    coinList: CryptoCoin[],
    status: "loading" | 'resolve' | 'rejected' | null,
    error: string | null,
    pageQty: number
}

const initialState:initialStateType = {
    coinList: [],
    status: null,
    error: null,
    pageQty: 0
}

export const coinListSlice = createSlice({
    name: 'cryptoCoinList',
    initialState,
    reducers : {

    },
    extraReducers:{
        [fetchCoinList.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCoinList.fulfilled] : (state,action) => {
            state.status = 'resolve';
            state.coinList = action.payload;
        },
        [fetchCoinList.rejected] : (state,action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [fetchPageQty.fulfilled] : (state,action) => {
            state.pageQty = action.payload;
        }
    }
})

// export const getCoinList = ( state: RootState ) => state.cryptoCoinList.coinList

export default coinListSlice.reducer