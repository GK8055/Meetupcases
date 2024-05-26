// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, income, expenses} = props

  return (
    <li className="Balance_container">
      <div className="Balance_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image_size"
        />
        <div className="amount_container">
          <p className="text">Your Balance</p>
          <p className="text" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="Balance_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image_size"
        />
        <div className="amount_container">
          <p className="text">Your Income</p>
          <p className="text" data-testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </div>

      <div className="Balance_container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image_size"
          />
        </div>
        <div className="amount_container">
          <p className="text">Your Expenses</p>
          <p className="text" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
