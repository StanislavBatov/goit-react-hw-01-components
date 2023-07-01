import React from 'react';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import css from './FriendsList.module.css'

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(el => (
        <FriendsListItem {...el} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array
}