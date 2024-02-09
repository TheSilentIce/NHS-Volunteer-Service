import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<>
			<nav
				className={
					" navbar navbar-expand-lg fixed-top " +
					(scrolled
						? "bg-light navbar-light navbar-scrolled"
						: "bg-transparent navbar-dark")
				}
			>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand fw-bold fs-3 mx-3">
						{/*<img src="/nhs_logo.svg" width="80rem" alt="NHS" /> */}
						NHS SERVICE
					</Link>

					<ul className={"navbar-nav " + (scrolled ? "m-2" : "m-4")}>
						<li className="nav-item mx-3">
							<Link to="/" className="nav-link">
								HOME
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link to="activity-log" className="nav-link">
								LOG HOURS
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link to="" className="nav-link">
								ABOUT
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link to="" className="nav-link">
								UPCOMING EVENTS
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link to="" className="nav-link">
								CONTACT
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link to="login" className="nav-link">
								LOGIN
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
