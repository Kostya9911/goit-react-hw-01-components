// Компонент

import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';

// Пропси

import userInfo from './Profile/user';
import data from './Statistics/data';

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
    </div>
  );
};
