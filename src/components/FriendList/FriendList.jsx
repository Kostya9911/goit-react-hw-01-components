import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendList({ friendsList }) {
  return (
    <ul className={css.friendList}>
      {friendsList.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={clsx(css['status'], {
              [css.isOnline]: friend.isOnline,
              [css.isOffline]: !friend.isOnline,
            })}
          >
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
