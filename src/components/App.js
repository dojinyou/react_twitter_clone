import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fBase';

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setUserObj(user);
			}
			setInit(true);
		});
	}, []);
	return (
		<>
			{init ? (
				<AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
			) : (
				'Initalizing...'
			)}
			<footer>&copy; {new Date().getFullYear()} Nwiiter </footer>
		</>
	);
}

export default App;
