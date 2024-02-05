import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { ActivityLog } from "./pages/ActivityLog";
import { LoginPage } from "./pages/LoginPage";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/activity-log" element={<ActivityLog />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</>
	);
}

export default App;
