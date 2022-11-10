import React, { useEffect, useState } from "react";
import CryptoCoin from "../types/CryptoCoin";
import CoinBlock from "./coin";
import Content from "./Content";
import '../styles/coinList.css'
import { fetchCoinList, fetchPageQty } from "../store/reducers/CoinListSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {Pagination} from '@mui/material'

function CoinList(){
    const dispatch = useAppDispatch();
    
    const { coinList, status, error, pageQty } = useAppSelector(state => state.cryptoCoinList)
    const [page,setPage] = useState<number>(1);

useEffect(() =>{
    dispatch(fetchCoinList(page));
    dispatch(fetchPageQty())
    
},[]);

useEffect(() => {
    dispatch(fetchCoinList(page));
},[page]);

    return (
        <Content>
            <div className="container">
                <h2 className="title">Курсы криптовалют на сегодня</h2>
                { 
                status === 'loading' ? <h2 className="loading">Loading...</h2>:
                coinList.length ? 
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th>Валюта</th>
                            <th><button className="table-head-btn btn" type="button">Стоимость</button></th>
                            <th><button className="table-head-btn btn" type="button">Капитализация</button></th>
                            <th><button className="table-head-btn btn"   type="button">Объём (24ч.)</button></th>
                            <th><button className="table-head-btn btn" type="button">Изменение (24 ч.)</button></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {
                        coinList.map( item => 
                        <CoinBlock key={ item.uuid }
                        icon={ item.iconUrl }
                        name={ item.name }
                        symbolName={ item.symbol }
                        price={ item.price }
                        capitalization={ item.marketCap }
                        volume={ item["24hVolume"]}
                        change={ item.change }
                        />  ) 
                    }
                    </tbody>
                </table> :
                error ? <h2 className="loading">{ error }</h2> : ''
                }

                <div className="pagination">
                        { 
                        !!pageQty && 
                            <Pagination 
                            
                            count={pageQty}
                            page={page}
                            onChange={ ( _,num: number ) => setPage(num)}
                            />
                        }
                </div>
            </div>
        </Content>
    )
}



export default CoinList
