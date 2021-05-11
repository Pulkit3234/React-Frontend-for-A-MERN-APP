import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';

import Navbar from './components/navbar/navbar';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxWidth="lg" style={{ marginBottom: '50px' }}>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/auth" exact component={Auth} />
				</Switch>
			</Container>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
