import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile(props) {
  // console.log(props);
  const { username, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;
  //
  return (
    <div key={username} className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width="280px"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
