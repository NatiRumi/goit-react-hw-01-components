
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import React from 'react';
import {Profile} from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendlist/FriendList';
import { TransactionHistory } from '../components/transaction/TransactionHistory';


export const App = () => {
  
  return(
    <React.Fragment>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </React.Fragment>


);
};

