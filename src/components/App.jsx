import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData  from '../data/user.json';
import statisticsData  from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionHistoryData from '../data/transactions.json';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload Stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionHistoryData} />
    </div>
  );
}

export default App;
