import React from "react";

type PropsType = {
    icon: string,
    name: string,
    symbolName:string,
    price:string,
    capitalization: string,
    volume: string,
    change: string
}

function CoinBlock( { icon, name, symbolName, price, capitalization, volume, change }:PropsType){
    let changesPrice = (Number(price) / 100 * Number(change)).toFixed(4)
    return (
        <tr className="coin-block">
            <td className="coin-info">
                <img src={ icon } alt={ name } width='40px' height='40px' />
                <div className="coin-description">
                    <p>ссылка</p>
                    <p className="symbol-name">{ symbolName }</p>
                </div>
            </td>

            <td className="price-block">
                <p>{ Number(price).toFixed(2) } $</p>
                <p className={ +changesPrice > 0  ? 'positive' : +changesPrice < 0 ? 'negative' : ''}>{ changesPrice }</p>
            </td>

            <td className="capitalization-block">
                <p>{ capitalization } $</p>
            </td>

            <td className="volume-block">
                <p>{ volume } $</p>
            </td>
            <td className="change-block">
                <p className={ +change > 0  ? 'positive' : +change < 0 ? 'negative' : ''}>
                { change }% { +change > 0 ? <span>&#11014;</span> : +change < 0 ? <span>&#11015;</span> : ''}
                </p>
            </td>
        </tr>
    )
}


export default CoinBlock