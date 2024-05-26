import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    list: [],
    optionId: transactionTypeOptions[0].optionId,
  }
  type = event => {
    this.setState({optionId: event.target.value})
  }
  enterTitle = event => {
    this.setState({titleInput: event.target.value})
  }
  amountEnter = event => {
    this.setState({amountInput: event.target.value})
  }
  addPayment = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const transactionType = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = transactionType
    const newHistory = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prev => ({
      list: [...prev.list, newHistory],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }
  deleteHistory = id => {
    const {list} = this.state
    const filter = list.filter(each => each.id !== id)
    this.setState({list: filter})
  }
  getBalance = () => {
    const {list} = this.state
    let incomeamount = 0
    let expensesamount = 0
    let balanceamount = 0
    list.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeamount += each.amount
      } else {
        expensesamount += each.amount
      }

      balanceamount = incomeamount - expensesamount
    })
    return balanceamount
  }
  getIncome = () => {
    const {list} = this.state
    let incomeamount = 0
    list.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeamount += each.amount
      }
    })
    return incomeamount
  }
  getExpenses = () => {
    const {list} = this.state
    let expensesamount = 0
    list.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expensesamount += each.amount
      }
    })
    return expensesamount
  }

  render() {
    const {titleInput, amountInput, optionId, list} = this.state
    const balanceAmount = this.getBalance()

    const expensesAmount = this.getExpenses()
    const incomeAmount = this.getIncome()
    console.log(incomeAmount)
    return (
      <div className="bg_container">
        <div className="title_container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="text">
            Welcome back to your <span className="span">MoneyManager</span>
          </p>
        </div>
        <div className="amount_details_container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            expenses={expensesAmount}
            income={incomeAmount}
          />
        </div>
        <div className="user_container">
          <form className="form" onSubmit={this.addPayment}>
            <div className="user_details_container">
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="title" className="text">
                TITLE
              </label>
              <input
                id="title"
                value={titleInput}
                type="text"
                className="input_ele"
                onChange={this.enterTitle}
                placeholder="TITLE"
              />
              <label className="text" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                className="input_ele"
                value={amountInput}
                id="amount"
                placeholder="AMOUNT"
                onChange={this.amountEnter}
              />
              <select
                className="input_ele"
                value={optionId}
                onChange={this.type}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="btn_1" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="history_container">
            <h1 className="heading">History</h1>

            <div className="history_details_container">
              <div className="history_heading_container">
                <p className="text">Title</p>
                <p className="text">Amount</p>
                <p className="text">Type</p>
              </div>
            </div>
            <ul className="history_transaction">
              {list.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  deleteBtn={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
