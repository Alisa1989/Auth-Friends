import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';
import AddFriend from './AddFriend';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);

    const getData = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                console.log("api:", res.data);
                setFriends(res.data);
            })
            .catch((err) => console.log("api error:", err))
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
{(friends.length == 0 )?(<div>LOADING FRIENDS...</div>):
(
        <div>
            <h1>Friends List</h1>
            <div className="friend-container">
                {friends.map(item => (
                    <FriendCard friend={item} key={item.id}/>
                ))}
            </div>
        </div>
            )}
            <AddFriend setFriends={setFriends}/>
        </div>
    );
};

export default FriendsList;