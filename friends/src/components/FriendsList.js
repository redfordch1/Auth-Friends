import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

const FriendsList = (props) => {
	const [ friends, setFriends ] = useState([]);
	console.log(friends);
	useEffect(() => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<AddFriend />
			<h1>Friends</h1>
			{friends.map((friend) => {
				return <Friend friend={friend} />;
			})}
		</div>
	);
};

export default FriendsList;
