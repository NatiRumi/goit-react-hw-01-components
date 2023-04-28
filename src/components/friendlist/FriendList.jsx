import React from 'react';
import { FriendListItem } from '../frendListItem/FrendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return <ul className={css.friendlist}>
        {friends.map((friend) => {
            return FriendListItem (friend)
     })}
    
    </ul>
} 

export { FriendList }

FriendList.propTypes = {
    friends: PropTypes.array
}