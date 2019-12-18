import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

const PrivateRouter = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/' />)}
		/>
	);
};

function App (){
	return (
		<Router>
			<div className='App'>
				<Switch>
					<PrivateRouter path='/protected' component={FriendsList} />
					<Route path='/' component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
