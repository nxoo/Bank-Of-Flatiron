import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

let url = 'http://localhost:8001/transactions'

function AccountContainer() {
    const [transactions, setTransactions] = useState([])

    function handleSearch(e) {
        if (e) {
            fetch(url + '?q=' + e)
                .then((res) => res.json())
                .then(data => setTransactions(data))
        } else {
            fetch(url)
                .then((res) => res.json())
                .then(data => setTransactions(data))
        }
    }

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(data => setTransactions(data))
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
