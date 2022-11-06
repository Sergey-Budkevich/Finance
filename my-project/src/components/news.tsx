import React, { useEffect, useState } from 'react'
import News from '../types/News'
import '../styles/NewsBlock.css'

import Content from './Content'



function NewsBlock(){

let [newsList,setNewsList] = useState<News[]> ([])
let [smallNewsList,setSmallNewsList] = useState<News[]> ([])
useEffect( () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
            'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
        }
    };

(async function () {
    await fetch('https://mboum-finance.p.rapidapi.com/ne/news', options)
        .then(response => response.json())
        .then(response => setNewsList(response))
    setSmallNewsList([newsList[0],newsList[1],newsList[2],newsList[3],newsList[4],newsList[5]] )
}())

},[])
console.log(smallNewsList);


    return(
        <Content>
            <div className='container'>
                {
                    newsList.length && 
                    newsList.map(( item,index) => 
                    <div key={index} className='news-block'>
                        <h3 className='news-title'>{ item.title }</h3>
                        <p className='news-text'>Источник:<span>{ item.source }</span></p>
                        <div className='news-info'>
                            <p className='news-date'>{ item.pubDate}</p>
                            <a className='news-link' href={ item.link }>Перейти &#10149;</a>
                        </div>
                    </div> )
                }
            </div>
        </Content>
    )
}

export default NewsBlock