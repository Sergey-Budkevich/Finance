import React,{useEffect,useState} from 'react'
import Content from './content'
import '../styles/converter.css'



function Converter(){

    let [amountCurrentCurrency,setAmountCurrentCurrency] = useState('0')
    let [amountDesiredCurrency,setAmountDesiredCurrency] = useState('0')
    let [currentCurrency,setCurrentCurrency] = useState<string>('USD')
    let [desiredCurrency,setDesiredCurrency] = useState('BYN')
    let [currencyList,setCurrencyList] = useState<string[]>([])
    let [newCurrencyList,setNewCurrencyList] = useState<[string,string][]>([])


useEffect( () => {
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };
    
    (async function () {
        await fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols', options)
        .then(response => response.json()) 
        .then(response => setCurrencyList(Object.keys(response.symbols).sort()))
    }())
},[])

useEffect( () => {
    (async function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };

    let url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${currentCurrency}&want=${desiredCurrency}&amount=${amountCurrentCurrency}`
    let response = await fetch(url,options)      
    let result = await response.json()
    setAmountDesiredCurrency(result.new_amount)
    }())
},[amountCurrentCurrency,currentCurrency,desiredCurrency] )



    return (
        <Content>
            <section className='converter-container'>
                <h2 className='converter-title'>Конвертер валют</h2>
                <div className='converter-block'>
                    <div className='amount-currency-block currency-block'>
                        <label>Amount</label>
                        <input onChange={ e => setAmountCurrentCurrency(e.target.value) } value={amountCurrentCurrency} type="number" placeholder='Введите кол-во валюты'/>
                    </div>
                    <div className='current-currency-block currency-block'>
                        <label >From</label>
                        <select value={ currentCurrency } onChange={ e => setCurrentCurrency(e.target.value) }>
                            {
                                currencyList.length ? currencyList.map( item => 
                                    <option key={item} value={item} >{item}</option> ) : ''
                            }
                        </select>
                    </div>
                    <div className='desired-currency-block currency-block'>
                        <label >To</label>
                        <select value={ desiredCurrency }  onChange={ e => setDesiredCurrency( e.target.value )}>
                            {
                                currencyList.length ? currencyList.map( item => 
                                    <option key={item} value={item} >{item}</option> ) : ''
                            }
                        </select>
                    </div>
                </div>
                <div className='result-block'>
                    <p className='result-block-text'>Converting result: <span>{amountDesiredCurrency}</span></p>
                </div>
            </section>
        </Content>
    )
}








export default Converter;