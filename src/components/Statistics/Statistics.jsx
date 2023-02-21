import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ label, percentage, bcg }) {
  return (
    <li
      style={{
        backgroundColor: [bcg],
      }}
      className={css.item}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  bcg: PropTypes.string,
};
