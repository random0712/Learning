import { useState, useEffect } from 'react';

import api from '../../api'
import history from '../../../history'


export default function useUser() {
	const [user, setUser] = useState({
		id: 0,
		name: '',
		password: '',
		email: '',
	});

	const [loading, setLoading] = useState(true);
	const [signin, setSignin] = useState("signin")

	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = localStorage.getItem('user');

		if(token && user) {
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setUser(JSON.parse(user));
			setSignin("")
		}


		setLoading(false)

	}, []);

	async function handleLogin(data) {
		console.debug('Data', data)
		const {token, user, error} = await api.post('/signin', data)
			.then(res =>  res.data)
			.catch(err => console.log(err))
		console.debug("Response", `${token} | ${user} | ${error}`)
		if(error) {
			return console.log("ERRO: " + error)
		}

		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('user', JSON.stringify(user));
		api.defaults.headers.Authorization = `Bearer ${token}`;
		setUser(user);
		setSignin("")
		history.push('/');
	}

	function handleLogout() {
		setUser({})
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		api.defaults.headers.Authorization = undefined;
		setSignin("signin")
		history.push('/signin')
	}


	return { user, handleLogin, handleLogout, loading, signin }
}