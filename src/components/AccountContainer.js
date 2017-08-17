import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search searchTerm={"...add code here..."} handleChange={"...add code here..."} />
        <TransactionsList transactions={"...add code here..."} searchTerm={"...add code here..."} />
      </div>
    )
  }
}

export default AccountContainer
