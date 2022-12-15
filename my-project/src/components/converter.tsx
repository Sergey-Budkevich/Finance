import React,{useEffect,useRef,useState} from 'react'
import Content from './Content'
import { Container, Flex, SectionWrapper } from './styled-components/wrapper'
import { useAppSelector } from '../hooks/hooks'
import { Title } from './styled-components/fonts'
import styled from 'styled-components'

function Converter(){

    let [amountCurrentCurrency,setAmountCurrentCurrency] = useState('')
    let [amountDesiredCurrency,setAmountDesiredCurrency] = useState('')
    let [currentCurrency,setCurrentCurrency] = useState<string>('USD')
    let [desiredCurrency,setDesiredCurrency] = useState('BYN')
    let [currencyList,setCurrencyList] = useState<string[]>([])
    // let [newCurrencyList,setNewCurrencyList] = useState<[string,string][]>([])
    const input:any = useRef();

useEffect( () => {
    (async function () {
        const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'd3c4ceeefamsh4ecae7738c6a06dp19db7fjsnd69594cea44d',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
            }
        };
        await fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols', options)
        .then(response => response.json()) 
        .then(response => setCurrencyList(Object.keys(response.symbols).sort()))
    }())

    input.current.focus()
},[] )

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
        <SectionWrapper>
            <Content>
                <ConverterContainer >
                    <Content>
                        <Flex flexDirection='column'>
                            <Title textAlign='start'>Конвертер валют</Title>
                            <CurrencyBlock>
                                <Flex flexDirection='column' rowGap='10px' maxWidth='40%' flex={1}>
                                    <label>Amount</label>
                                    <input ref={input} onChange={ e => setAmountCurrentCurrency(e.target.value) } value={amountCurrentCurrency} type="number" placeholder='Введите кол-во валюты'/>
                                </Flex>
                                <Flex flexDirection='column' rowGap='10px' maxWidth='30%' flex={1}>
                                    <label >From</label>
                                    <select value={ currentCurrency } onChange={ e => setCurrentCurrency(e.target.value) }>
                                        {
                                            !!currencyList.length && currencyList.map( item => 
                                                <option key={item} value={item} >{item}</option> )
                                        }
                                    </select>
                                </Flex>
                                <Flex flexDirection='column' rowGap='10px' maxWidth='30%' flex={1}>
                                    <label >To</label>
                                    <select value={ desiredCurrency }  onChange={ e => setDesiredCurrency( e.target.value )}>
                                        {
                                            !!currencyList.length && currencyList.map( item => 
                                                <option key={item} value={item} >{item}</option> )
                                        }
                                    </select>
                                </Flex>
                            </CurrencyBlock>
                            <ResultBlock>
                                <p className='result-block-text'>Converting result: <span>{amountDesiredCurrency}</span></p>
                            </ResultBlock>
                        </Flex>
                    </Content>
                </ConverterContainer>
            </Content>
        </SectionWrapper>
    )
}
const ConverterContainer = styled(Container)`
    background-color: var(--color-white);
    border: 1px solid var(--color-darkGray);
`

const CurrencyBlock = styled(Flex)`
    margin-top: 30px;
    align-items: stretch;
    justify-content: space-between;
    column-gap: 15px;
    label{
        font-family: var(--second-font);
        font-size: var(--text-normal-size);
        font-weight: var(--font-weight-SemiBold);
    }
    input,select{
        height: 35px;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--color-darkGray);
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    select:hover{
        cursor: pointer;
    }
    option{ text-align: center;}
`
const ResultBlock = styled.div`
    margin-top: 40px;
    font-size: var(--subtitle-size);
    span{ 
        color: #3609ff;
        font-weight: 600;
        font-size: 34px;
        margin-left: 15px;
    }
`
export default Converter;