import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import CryptoCoin from '../../types/CryptoCoin'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
}

// перенести в сервис
export const fetchCoinList:any= createAsyncThunk(
    'cryptoCoinList/fetchCoinList',
    async function ([pageNumber,limit]:number[], { rejectWithValue }) {
        try {
            const response = await fetch(`https://coinranking1.p.rapidapi.com/coins?limit=${limit}&offset=${limit * (pageNumber - 1)}`, options);
            if (!response.ok){
                throw new Error('Server Error!')
            }
            const data = await response.json();
            const result = data.data.coins
            return result;
        } catch (error:any) {
            return rejectWithValue(error.message)
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
        sortByPrice: (state) => {
            state.coinList.sort((a:CryptoCoin, b:CryptoCoin) => +b.price - +a.price)
        },
        sortByCapitalization: (state) => {
            state.coinList.sort((a:CryptoCoin, b:CryptoCoin) => +b.marketCap - +a.marketCap)
        },
        sortByVolume: (state) => {
            state.coinList.sort((a:CryptoCoin, b:CryptoCoin) => +b["24hVolume"] - +a["24hVolume"])
        },
        sortByChange: (state) => {
            state.coinList.sort((a:CryptoCoin, b:CryptoCoin) => +b.change - +a.change)
        },
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

export const { sortByPrice, sortByCapitalization, sortByVolume, sortByChange } = coinListSlice.actions

export default coinListSlice.reducer