import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
