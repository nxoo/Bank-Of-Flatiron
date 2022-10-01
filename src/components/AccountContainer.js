import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
    const [transactions, setTransactions] = useState([])
    let url = 'http://localhost:8001/transactions'

    function getTransactions(x) {
        // x = url
        fetch(x)
            .then((res) => res.json())
            .then(data => setTransactions(data))
    }

    function handleSearch(e) {
        if (e) {
            getTransactions(url + '?q=' + e)
        } else {
            getTransactions(url)
        }
    }

    useEffect(() => {
        getTransactions(url)
    }, [])

    return (
        <div>
            <Search handleSearch={handleSearch}/>
            <AddTransactionForm/>
            <TransactionsList transactions={transactions}/>
        </div>
    );
}

export default AccountContainer;
