

import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionHistoryData from '../data/transactions.json';
const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionHistoryData} />
    </div>
  );
}

export default App;
