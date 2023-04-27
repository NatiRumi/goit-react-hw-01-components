
import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';


const Profile = (el) => {
    
    return <div className = {css.profile}>
            <div className = {css.description}>
                <img
                    src = {el.avatar}
                    alt = {el.username}
                    className = {css.avatar}
                />
                <p className={css.name}>{el.username}</p>
                <p className={css.tag}>{el.tag}</p>
                <p className={css.location}>{el.location}</p>
            </div>
    
            <ul className = {css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{el.stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{el.stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{el.stats.likes}</span>
                </li>
            </ul>
        </div>
    }

    export { Profile }

    Profile.propTypes = {
      username: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.object,
    }
