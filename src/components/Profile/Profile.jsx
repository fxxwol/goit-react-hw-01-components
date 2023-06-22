import {
  Card,
  Desrciption,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsLabel,
  StatsValue,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Desrciption>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Desrciption>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsValue>{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
