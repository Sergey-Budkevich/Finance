import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import News from '../../types/News'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
        'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
    }
};


export const fetchNewsList:any = createAsyncThunk(
    'newsList/fetchNewsList',
    async function ( _, { rejectWithValue }) {
        try{
            const response = await fetch('https://mboum-finance.p.rapidapi.com/ne/news', options);
            if (!response.ok){
                throw new Error('Server Error!')
            }
            const data = await response.json();
            return data
        } catch (error:any) {
            return rejectWithValue(error.message)
        }
    }
)

type initialStateType = {
    newsList: News[],
    status: "loading" | 'resolve' | 'rejected' | null,
    error: string | null,
}

const initialState:initialStateType = {
    newsList: [],
    status: null,
    error: null,
}

export const NewsListSlice = createSlice({
    name: 'newsList',
    initialState,
    reducers:{

    },
    extraReducers:{
        [fetchNewsList.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchNewsList.fulfilled]: (state,action) => {
            state.status = 'resolve';
            state.newsList = action.payload
        },
        [fetchNewsList.rejected]: (state,action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export default NewsListSlice.reducer