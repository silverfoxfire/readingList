import React from "react";
import "./BookCard.css";

function BookCard(props){
	const isMain = props.variant === "main";
	return(
		<div className="book-card">
			<img src={props.book.cover} alt={props.book.title} className="book-cover" />
			<div className="book-info">
				<h2 className="book-title">{props.book.title}</h2>
				<p className="book-author">{props.book.author}</p>
				{isMain && (
					<p className="book-description">
						{props.book.description || "No Description Available"}
					</p>
				)}
				<button className={isMain ? "add-button" : "remove-button"} onClick={() => props.onAction(props.book.id)}>{isMain ? "Add To Reading List" : "Remove"}</button>
			</div>
		</div>
	);
}

export default BookCard;