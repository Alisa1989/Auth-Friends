import React, {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const FriendsList = props =>{


const getData = () => {
    axiosWithAuth()
    .get("")
    //.get("/friends")
    .then((res) => console.log("api:", res))
    .catch((err) => console.log("api error:", err))
};

useEffect(() => {
    getData();
},[]);

    return(
        <div>
            <h1>Friends List</h1>
        </div>
    );
};

export default FriendsList;