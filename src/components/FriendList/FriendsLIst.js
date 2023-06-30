import React from 'react';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <FriendsListItem {...el} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array
}