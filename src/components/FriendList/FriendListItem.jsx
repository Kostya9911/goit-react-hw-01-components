import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={clsx(css['status'], {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
