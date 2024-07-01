import style from './TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';
function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <tr className={style.transactionHistoryItem} id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default TransactionHistoryItem;
