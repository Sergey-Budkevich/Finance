import React, { useEffect, useState } from "react";
import CoinBlock from "./coin";
import Content from "./Content";
import '../styles/CoinList.css'
import { fetchCoinList, fetchPageQty, sortByCapitalization, sortByChange, sortByPrice, sortByVolume } from "../store/slices/CoinListSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {Pagination} from '@mui/material'
import LoaderSpinner from "./LoaderSpinner";


// изменить ошибку


function CoinList(){
    const dispatch = useAppDispatch();
    
    const { coinList, status, error, pageQty } = useAppSelector(state => state.cryptoCoinList)
    const [page,setPage] = useState<number>(1);
    const [limit,setLimit] = useState<number>(20);
    
useEffect(() => {
    dispatch(fetchCoinList([page,limit]));
    dispatch(fetchPageQty())
},[]);

useEffect(() => {
    dispatch(fetchCoinList([page,limit]));
},[dispatch, limit, page]);

    return (
        <section className="coinlist">
        { status === 'loading' && <LoaderSpinner/>}
            <Content>
                <div className="coinlist-container">
                    <h2 className="title coinlist-title">Курсы криптовалют на сегодня</h2>
                    { !!error && <h2 className="loading">{ error }</h2>}
                    { !!coinList.length && 
                    <table className="table">
                        <thead className="table-head">
                            <tr>
                                <th>Валюта</th>
                                <th><button className="table-head-btn btn" onClick={ () => dispatch(sortByPrice()) } type="button">Стоимость</button></th>
                                <th><button className="table-head-btn btn" onClick={ () => dispatch(sortByCapitalization()) } type="button">Капитализация</button></th>
                                <th><button className="table-head-btn btn" onClick={ () => dispatch(sortByVolume()) }  type="button">Объём (24ч.)</button></th>
                                <th><button className="table-head-btn btn" onClick={ () => dispatch(sortByChange()) } type="button">Изменение (24 ч.)</button></th>
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
                    </table> }
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
        </section>
    )
}


export default CoinList
