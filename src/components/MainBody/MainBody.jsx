import React from "react";
import BookCard from "../BookCard/BookCard";
import "./MainBody.css";

function MainBody(props){
	return (
		<div className="main-body">
			<div className="book-list">
				{props.books.map((book) => (
					<BookCard key={book.id} book={book} variant="main" onAction={() => props.onAdd(book.id)} />
				))}
			</div>
		</div>
	);
}

export default MainBody;