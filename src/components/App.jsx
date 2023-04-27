
import user from '../data/user';
import data from '../data/data';
import React from 'react';
import {Profile} from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';


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
    </React.Fragment>,

    <React.Fragment>
      {/* <Statistics stats = {data} /> */}
      <Statistics title="Upload stats" stats={data} />
    </React.Fragment>


);
};

