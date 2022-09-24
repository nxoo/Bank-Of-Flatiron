import React, {useEffect, useState} from "react";

function Transaction() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch('http://localhost:8001/transactions')
            .then((res) => res.json())
            .then((data) => setTransactions(data));
    }, [])
    console.log('tt', transactions)
    if (transactions.length === 0) return null
    return (
        transactions.map(transaction => {
            return (
                <tr key={transaction.id}>
                    <td>
                        <h3 className="ui center aligned header">{transaction.date}</h3>
                    </td>
                    <td>
                        <h3 className="ui center aligned header">{transaction.description}</h3>
                    </td>
                    <td>
                        <h3 className="ui center aligned header">{transaction.category}</h3>
                    </td>
                    <td>
                        <h3 className="ui center aligned header">{transaction.amount}</h3>
                    </td>
                </tr>
            )
        })
    );
}

export default Transaction;
