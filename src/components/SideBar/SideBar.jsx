import React from "react";
import "./SideBar.css";
import BookCard from "../BookCard/BookCard";

function SideBar(props) {
	return (
		<div className={`sidebar ${props.isOpen ? "open" : ""}`}>
			<h1 className="sidebar-title">My Reading List</h1>
			<div className="book-list">
				{props.books.map((book) => (
					//Later Replace this with BookCard.jsx
					<BookCard key={book.id} book={book} variant="sidebar" onAction={props.removeBook} />
				))}
			</div>
		</div>
	);
}

export default SideBar;