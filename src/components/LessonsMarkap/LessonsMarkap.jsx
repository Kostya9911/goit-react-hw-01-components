import PropTypes from 'prop-types';
import css from './LessonsMarkap.module.css';

const LessonsMarkap = ({ children }) => {
  // console.log(children);
  return <h2 className={css.LessonsNumber}>{children}</h2>;
};

export default LessonsMarkap;

LessonsMarkap.propTypes = {
  children: PropTypes.string,
};
