import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import "../styles/BalanceHistory.css"

function BalanceHistory() {
    const {transactionList} = useAppSelector(state => state.userInfo)

    return  (
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
                    { !!transactionList.length && transactionList.map( (item,index) => 
                        <tr key={index}>
                            <td>{item.date.slice(0,10)}</td>
                            <td style={{color: "#4D92EB"}}>{index + 1}</td>
                            <td>{item.date.slice(11)}</td>
                            <td>{item.operation}</td>
                            <td style= {{ color: item.operation === 'списание' ? "red" :"#27AE60"}}>{item.operation === 'списание' ? '-' : '+'} {item.amount}</td>
                        </tr>
                    ).reverse()}
                </tbody>
            </table>
        </div>
    );
}

export default BalanceHistory;