import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = (props) => {
	const [ friend, setFriend ] = useState({ id: Date.now(), name: '', age: '', email: '' });

	const handleChange = (e) => {
		setFriend({ ...friend, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/friends', friend)
			.then((res) => {
				setFriend({ ...friend, name: '', age: '', email: '' });
			})
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' onChange={handleChange} placeholder='Name' name='name' value={friend.name} />
			<input type='text' onChange={handleChange} placeholder='Age' name='age' value={friend.age} />
			<input type='text' onChange={handleChange} placeholder='Email' name='email' value={friend.email} />
			<button type='submit'>Add Friend</button>
		</form>
	);
};

export default AddFriend;
