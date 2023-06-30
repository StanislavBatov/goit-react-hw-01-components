import React from "react"
import PropTypes from 'prop-types';
import css from "./FriendsListItem.module.css"

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (<li className={css.item} key={id}>
  <span className={css.status} style={changeColorStatus(isOnline)}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
</li>)
}

function changeColorStatus (value) {
  return { backgroundColor: value ? 'green' : 'red' };
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool
}