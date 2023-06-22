import { Card, Desrciption, Image, Name,  Tag, Location, Stats, StatsItem, StatsLabel, StatsValue} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Desrciption>
        <Image
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Desrciption>

      <Stats>
        <StatsItem>
          <StatsLabel class="label">Followers</StatsLabel>
          <StatsValue class="quantity">{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel class="label">Views</StatsLabel>
          <StatsValue class="quantity">{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel class="label">Likes</StatsLabel>
          <StatsValue class="quantity">{stats.likes}</StatsValue>
        </StatsItem>
      </Stats>
    </Card>
  );
};
