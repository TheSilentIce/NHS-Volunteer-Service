import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					<img src="/nhs_logo.svg" width="80rem" alt="NHS" />
				</Link>

				<div className="navbar-nav">
					<Link to="/" className="nav-item nav-link">
						Home
					</Link>
					<Link to="activity-log" className="nav-item nav-link">
						Activity Log
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
