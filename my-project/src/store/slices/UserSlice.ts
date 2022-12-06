import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../../types/User";


const initialState: initialStateType = {
    name: null,
    currentTariff: null,
    confirmTariff: null,
    email: null,
    id: null,
    refreshToken: null,
    accessToken: null,
    refLink: 'https://uroboros33314552',
    transactionList: [],
    balance: 0,
}

export const UserSlice = createSlice({
    name: 'UserInfo',
    initialState,
    reducers: {
        authUser: (state,action) => {
            state.email = action.payload.user.email;
            state.id = action.payload.user.id;
            state.refreshToken = action.payload.refreshToken;
            state.accessToken = action.payload.accessToken;
            state.refLink = 'https://uroboros33314552';
            state.transactionList = state.transactionList;
            state.balance = state.balance;
            localStorage.setItem('userInfo',JSON.stringify(state))
        },
        signIn: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.refreshToken = action.payload.refreshToken;
            state.accessToken = action.payload.accessToken;
            state.currentTariff = action.payload.currentTariff;
            state.refLink = action.payload.refLink;
            state.balance = action.payload.balance;
            state.transactionList = action.payload.transactionList;
        },
        changeCurrentTariff: (state,action) => {
            state.currentTariff = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(state))
        },
        confirmTariff: (state, action) => {
            state.confirmTariff = action.payload;
        },
        createTransactionList: (state,action) => {
            state.transactionList = action.payload
        },
        changeTransactionList: (state,action) => {
            state.transactionList = [...state.transactionList,action.payload]
            state.balance = state.balance + action.payload.amount
            localStorage.setItem('userInfo',JSON.stringify(state))
        }
    }
})

export const {authUser, signIn, changeCurrentTariff, confirmTariff, createTransactionList, changeTransactionList} = UserSlice.actions