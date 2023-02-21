// Компоненти

import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';

// jsx

import userInfo from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends';

export const App = () => {
  return (
    <div>
      <Profile
        username={userInfo.username}
        avatar={userInfo.avatar}
        tag={userInfo.tag}
        location={userInfo.location}
        stats={userInfo.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      {/* <StatisticsList stats={data} /> */}
      <FriendList friendsList={friends} />
    </div>
  );
};
