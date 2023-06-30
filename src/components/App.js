
import React from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from "./FriendList/FriendsLIst";
import { TransactionHistory } from "./Transaction/Transaction";

import css from "App.module.css";
import userData from '../DataBase/user.json';
import statData from '../DataBase/data.json';
import friendsData from "../DataBase/friends.json";
import transactions from "../DataBase/transactions.json";

export const App = () => {
  return (
    <div className={css.conteiner}>
      <Profile
        userName={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics stats={statData} title={'Upload stats'} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
