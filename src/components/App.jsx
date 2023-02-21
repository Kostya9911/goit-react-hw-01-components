import Profile from './Profile';
import userInfo from './user';

// console.log(userInfo);

export const App = () => {
  return (
    <div>
      <Profile
        username={userInfo.username}
        avatar={userInfo.avatar}
        tag={userInfo.tag}
        location={userInfo.location}
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
      />
    </div>
  );
};
