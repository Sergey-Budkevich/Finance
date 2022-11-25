import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchNewsList } from '../store/slices/NewsSlice'
import '../styles/News.css'

import Content from './Content'
import LoaderSpinner from './LoaderSpinner'



function News(){

const dispatch = useAppDispatch()
const {newsList, status} = useAppSelector(state => state.newsList)

useEffect( () => {
    dispatch(fetchNewsList())
},[])


    return(
        <section className='news'>
        { status === 'loading' && <LoaderSpinner/>}
            <Content>
                <div className='news-container'>
                    <h2 className='title news-title'>Новости крипторынка</h2>
                    <div className='news-wrapper'>
                    {
                        !!newsList.length && 
                        newsList.map(( item,index) => 
                        <div key={index} className='news-block'>
                            <div className='news-image'>
                                news-image
                            </div>
                            <div className='news-description'>
                                <h3 className='news-block-title'>{ item.title }</h3>
                                <p className='news-text'>Источник:<span>{ item.source }</span></p>
                                <div className='news-info'>
                                    <p className='news-date'>{ item.pubDate}</p>
                                    <a className='news-link' href={ item.link }>Перейти &#10149;</a>
                                </div>
                            </div>
                        </div> )
                    }
                    </div>
                </div>
            </Content>
        </section>
    )
}

export default News