import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { initialStateType } from "../../types/User";



const initialState: initialStateType = {
    name: null,
    secondName: null,
    site: null,
    instagram: null,
    facebook: null,
    telegram: null,
    vkontakte: null,
    wallet: null,
    currentTariff: null,
    confirmTariff: null,
    email: null,
    id: null,
    refreshToken: null,
    accessToken: null,
    refLink: 'https://uroboros33314552',
    transactionList: [
        {
            date: '11/01/2022',
            operation: "пополнение",
            amount: 10,
            currentBalance: 10,
            time: '13:15:16'
        },
        {
            date: '11/29/2022',
            operation: "списание",
            amount: 3,
            currentBalance: 7,
            time: '13:15:16'
        },
        {
            date: '12/06/2022',
            operation: "пополнение",
            amount: 10,
            currentBalance: 17,
            time: '13:15:16'
        }
    ],
    balance: 17,
    dateConfirmTariff: null,

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
            // state.refLink = 'https://uroboros33314552';
            // state.transactionList = state.transactionList;
            // state.balance = state.balance;
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
            state.dateConfirmTariff = action.payload.dateConfirmTariff;
            state.site = action.payload.site;
            state.facebook = action.payload.facebook;
            state.instagram = action.payload.instagram;
            state.telegram = action.payload.telegram;
            state.vkontakte = action.payload.vkontakte;
            state.name = action.payload.name;
            state.wallet = action.payload.wallet
            state.secondName = action.payload.secondName;
        },
        changeCurrentTariff: (state,action) => {
            state.currentTariff = action.payload;
            state.dateConfirmTariff = moment().format('l');
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
            state.balance = action.payload.currentBalance
            localStorage.setItem('userInfo',JSON.stringify(state))
        },
        changeUserData: (state, action) => {
            state.site = action.payload.site;
            state.facebook = action.payload.facebook;
            state.instagram = action.payload.instagram;
            state.telegram = action.payload.telegram;
            state.vkontakte = action.payload.vkontakte;
            state.name = action.payload.name;
            state.wallet = action.payload.wallet;
            state.email = action.payload.email;
            state.secondName = action.payload.secondName;
            localStorage.setItem('userInfo',JSON.stringify(state))
        }
    }
})

export const {authUser, signIn, changeCurrentTariff, confirmTariff, createTransactionList, changeTransactionList, changeUserData} = UserSlice.actions