import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friendsList }) {
  return (
    <ul className={css.friendList}>
      {friendsList.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
