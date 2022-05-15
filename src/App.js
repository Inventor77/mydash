import "./App.scss";
import CreateAccountPage from "./layouts/CreateAccount/CreateAccount";
import Home from "./layouts/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<CreateAccountPage />} />
					<Route path="/chart" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
