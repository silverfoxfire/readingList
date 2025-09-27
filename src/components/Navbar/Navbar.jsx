import React, { useState } from "react";
import "./Navbar.css";

function NavBar(props) {
	const [query, setQuery] = useState("");

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	}

	const handleSearchClick = () => {
		props.onSearch(query);
	}

	return (
		<nav className="navbar">

			<div className="navbar-left">
				<button className="reading-list-button" onClick={props.toggleSidebar}>
				<i className="fas fa-bars reading-list-icon"></i>
				</button>

				<div className="navbar-logo">
					<i className="fas fa-book-reader"></i>
					<span className="logo-text">The Reading List</span>
				</div>
			</div>

			<div className="navbar-center">
				<div className="search-container">
					<input className="search-input" type="text" placeholder="Find a book" value={query} onChange={handleInputChange} />
					<button className="search-button" onClick={handleSearchClick}><i className="fas fa-search"></i></button>
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
