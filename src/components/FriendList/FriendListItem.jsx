import PropTypes from 'prop-types';
import { Status, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
          <Status color={isOnline ? 'green' : 'red'}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}