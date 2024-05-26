// Write your code h
import './index.css'

const TransactionItem = props => {
  const {details, deleteBtn} = props
  const {id, amount, title, type} = details
  const deleteBtnClk = () => {
    deleteBtn(id)
  }
  return (
    <li className="history list_details">
      <p className="text">{title}</p>
      <p className="text">{amount}</p>
      <p className="text">{type}</p>
      <div>
        <button className="btn_1" onClick={deleteBtnClk} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete_icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
