import React from 'react';
import "../styles/BalanceHistory.css"

type item ={
    date: string,
    dealNumber: string,
    time: string,
    operationType: "Покупка" | "Продажа",
    dealResult: string,
}

function BalanceHistory() {
    let info: item[] = [
        { 
            date: "10/08/2021",
            dealNumber: "u/7777711",
            time: "09:30 PM",
            operationType: "Покупка",
            dealResult: "+ 1 UBR",
        },
        { 
            date: "11/08/2021",
            dealNumber: "u/7777722",
            time: "10:30 PM",
            operationType: "Продажа",
            dealResult: "- 1 UBR",
        },
        { 
            date: "12/08/2021",
            dealNumber: "u/7777733",
            time: "11:30 PM",
            operationType: "Покупка",
            dealResult: "+ 1 UBR",
        },
        { 
            date: "13/08/2021",
            dealNumber: "u/7777744",
            time: "12:30 PM",
            operationType: "Покупка",
            dealResult: "+ 1 UBR",
        },
        { 
            date: "14/08/2021",
            dealNumber: "u/7777755",
            time: "13:30 PM",
            operationType: "Продажа",
            dealResult: "- 1 UBR",
        }
    ] 
    return (
        <div className='balance-history_container'>
            <table>
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Номер сделки</th>
                        <th>Время</th>
                        <th>Операция</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    { !!info.length && info.map( item => 
                        <tr>
                            <td>{item.date}</td>
                            <td style={{color: "#4D92EB"}}>{item.dealNumber}</td>
                            <td>{item.time}</td>
                            <td>{item.operationType}</td>
                            <td style= {{ color: item.dealResult[0] === '-' ? "red" : item.dealResult[0] === "+" ? "#27AE60" : ''}}>{item.dealResult}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BalanceHistory;