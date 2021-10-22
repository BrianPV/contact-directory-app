import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile";
import Missing from "./components/Missing"
import Header from "./components/Header.js";


function App() {
	return (
		<BrowserRouter>
				<div className="app">
					<Header />
					<Route component={Home} path="/" exact/>
					<Route component={Profile} path="/profile"/>
					<Route component={Missing} path="/missing"/>
				</div>
		</BrowserRouter>
	);
}

export default App;
