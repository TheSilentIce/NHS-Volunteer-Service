import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { ActivityLog } from "./pages/ActivityLog";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/activity-log" element={<ActivityLog />} />
			</Routes>
		</>
	);
}

export default App;
