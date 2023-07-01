import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<div className={css.profile}>
  <div className={css.description}>
      <img
        className={css.userImage}
      src={avatar}
      alt={username}
    />
      <p className={css.name}>{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsList}>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.statsList}>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.statsList}>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }),
}



