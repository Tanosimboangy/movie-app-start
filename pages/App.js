import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  MoviesList from './MoviesList';
import  MovieDetails from './MovieDetails';
import "./App.css"

function App() {
	return (
		<div className="App" style={{maxWidth:'90%', margin:'auto'}}>
			<Router>
				<Switch>
					<Route path="/movie/:id">
						<MovieDetails />
					</Route>
					<Route path="/">
						<MoviesList />
					</Route>
				</Switch>
			</Router>
		</div>);
}
export default App;
