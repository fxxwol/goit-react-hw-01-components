import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <h2 className="task-title">Task 01</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="task-title">Task 02</h2>
      <Statistics title="Upload" stats={data} />
      <h2 className="task-title">Task 03</h2>
      <FriendList friends={friends} />
      <h2 className="task-title">Task 04</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};
