// Компоненти

import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

// роздільник завданнь

import LessonsMarkap from './LessonsMarkap/LessonsMarkap';

// json

import userInfo from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';

export const App = () => {
  return (
    <div>
      <LessonsMarkap>Task 1</LessonsMarkap>
      <Profile
        username={userInfo.username}
        avatar={userInfo.avatar}
        tag={userInfo.tag}
        location={userInfo.location}
        stats={userInfo.stats}
      />
      <LessonsMarkap>Task 2</LessonsMarkap>
      <StatisticsList title="Upload stats" stats={data} />
      {/* <StatisticsList stats={data} /> */}
      <LessonsMarkap>Task 3</LessonsMarkap>
      <FriendList friendsList={friends} />
      <LessonsMarkap>Task 4</LessonsMarkap>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
