import React from "react";
import { Link } from "react-router-dom";
// import logosharity from "../images/logosharity.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
	return (
		<>
	<Link className="navbar-brand" to="/">
				Home
      </Link>
			<nav class="navbar navbar-dark">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<span>Sharity</span>
			</nav>

			<div class="collapse" id="navbarToggleExternalContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							to="/register"
							className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
						>
							Register
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/submit-donations"
							className={window.location.pathname === "/submit-donations" ? "nav-link active" : "nav-link"}
						>
							Donations Form
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/Login"
							className={
								window.location.pathname === "/login" || window.location.pathname === "/login"
									? "nav-link active"
									: "nav-link"
							}
						>
							Login
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/profile"
							className={
								window.location.pathname === "/profile" || window.location.pathname === "/profile"
									? "nav-link active"
									: "nav-link"
							}
						>
							Profile
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/donations"
							className={
								window.location.pathname === "/donations" || window.location.pathname === "/donations"
									? "nav-link active"
									: "nav-link"
							}
						>
							Donations
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/pick-ups"
							className={
								window.location.pathname === "/" || window.location.pathname === "/about"
									? "nav-link active"
									: "nav-link"
							}
						>
							Pick Ups
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/about"
							className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
						>
							About
            </Link>
					</li>

				</ul>
			</div>
	</>
	);
}

export default Nav;