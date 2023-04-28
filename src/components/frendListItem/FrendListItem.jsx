import React from 'react';
import PropTypes from 'prop-types';
import css from './FrendListItem.module.css';


const getBgColor = (isOnline) => {
    return isOnline? "green" : "red"
}

const FriendListItem = (friend) => {
    return <li className={css.item} key={friend.id}>
        <span className={css.status} style={{backgroundColor:getBgColor(friend.isOnline)}}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
</li>
}

export {FriendListItem }

FriendListItem.propTypes = {
    friend: PropTypes.object
}



