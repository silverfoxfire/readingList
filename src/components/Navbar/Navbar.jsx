import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
	<nav className="navbar">

		<div className="navbar-left">
			<i className="fas fa-bars reading-list-icon"></i>
			<button className="reading-list-button" aria-label="Reading List">
			</button>

			<div className="navbar-logo">
				<i className="fas fa-book-reader"></i>
				<span className="logo-text">The Reading List</span>
			</div>
		</div>

		<div className="navbar-center">
			<div className="search-container">
				<input className="search-input" type="text" placeholder="Find a book" />
				<button className="search-button"><i className="fas fa-search"></i></button>
			</div>
		</div>


		<div className="navbar-right">
			<button className="sign-in-button">
				<i className="fas fa-user"></i>
				<span className="login-text">Sign In</span>
			</button>
		</div>

</nav>
  );
}

export default NavBar;
