import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import HomeScreen from "./screen/HomeScreen";

import { useState } from "react";

function App() {
	const [isShow, setIsShown] = useState(false);
	return (
		<div className="App">
			<Navbar
				onMouse={() => setIsShown(true)}
				leaveMouse={() => setIsShown(false)}
				show={isShow}
			/>
			<HomeScreen show={isShow} onMouse={() => setIsShown(false)} />
			<Footer />
		</div>
	);
}

export default App;
