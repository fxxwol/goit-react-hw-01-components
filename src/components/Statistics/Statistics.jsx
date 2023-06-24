import PropTypes from 'prop-types';
import { Section, StatList, StatItem, Text } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2 className="task-title">Upload stats</h2>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem length={stats.length} key={stat.id}>
              <Text >{stat.label}</Text>
              <Text >{stat.percentage}</Text>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
