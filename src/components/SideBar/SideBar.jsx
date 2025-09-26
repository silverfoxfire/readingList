import React from "react";
import "./SideBar.css";

function SideBar(props) {
	return (
		<div className={`sidebar ${props.isOpen ? "open" : ""}`}>
			<h1 className="sidebar-title">My Reading List</h1>
			<div className="book-list">
				{props.books.map((book) => (
					//Later Replace this with BookCard.jsx
					<div className="book-card" key={book.id}>
						<img src={book.cover} alt={book.title} className="book-cover" />
						<div className="book-info">
							<h2 className="book-title">{book.title}</h2>
							<p className="book-author">{book.author}</p>
							<button className="remove-button" onClick={() => props.removeBook(book.id)}>Remove</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SideBar;