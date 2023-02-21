import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Statistics from './Statistics';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function StatisticsList({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <Statistics
            bcg={getRandomHexColor()}
            fontColor={getRandomHexColor()}
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
};
