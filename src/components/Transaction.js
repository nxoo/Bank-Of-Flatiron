import React from "react";

function Transaction({transactions}) {

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
