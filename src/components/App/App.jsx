import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
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
      <FriendList friends={ friends} />
    </div>
  );
};
