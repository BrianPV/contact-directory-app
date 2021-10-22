import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile";
import Missing from "./components/Missing"


function App() {
	return (
		<BrowserRouter>
				<div className="app">
					<Route component={Home} path="/" exact/>
					<Route component={Profile} path="/profile"/>
					<Route component={Missing} path="/missing"/>
				</div>
		</BrowserRouter>
	);
}

export default App;
