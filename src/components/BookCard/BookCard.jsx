import React from "react";
import "./BookCard.css";

function BookCard(props){
	return(
		<div className="book-card">
			<img src={props.book.cover} alt={props.book.title} className="book-cover" />
			<div className="book-info">
				<h2 className="book-title">{props.book.title}</h2>
				<p className="book-author">{props.book.author}</p>
				<button className="remove-button" onClick={() => props.removeBook(props.book.id)}>Remove</button>
			</div>
		</div>
	);
}

export default BookCard;