import PropTypes from 'prop-types';
import { Table, Rows, HeadRows} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => { 
    return (
      <Table>
        <thead>
          <tr>
            <HeadRows>Type</HeadRows>
            <HeadRows>Amount</HeadRows>
            <HeadRows>Currency</HeadRows>
          </tr>
        </thead>
            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                        <Rows>{item.type}</Rows>
                        <Rows>{item.amount}</Rows>
                        <Rows>{item.currency}</Rows>
                      </tr>
                    );
                })}
         
        </tbody>
      </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}