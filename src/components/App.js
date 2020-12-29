import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fBase';

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);
	return (
		<>
			{init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initalizing...'}
			<footer>&copy; {new Date().getFullYear()} Nwiiter </footer>
			{/* <div>
				apiKey: {process.env.REACT_APP_API_KEY}
				<br />
				authDomain: {process.env.REACT_APP_AUTH_DOMAIN}
				<br />
				projectId: {process.env.REACT_APP_PROJECT_ID}
				<br />
				storageBucket: {process.env.REACT_APP_STORAGE_BUCKET}
				<br />
				messagingSenderId: {process.env.REACT_APP_MESSAGING_ID}
				<br />
				appId: {process.env.REACT_APP_APP_ID}
			</div> */}
		</>
	);
}

export default App;
