import React from 'react';

const FriendCard = (props) => {
    
    return(
        <div className="friend">
            <p>id: {props.friend.id}</p>
            <p>name: {props.friend.name}</p>
            <p>age: {props.friend.age}</p>
            <p>email: {props.friend.email}</p>
        </div>
    )
}

export default FriendCard;