import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";

//Temp Book Array
const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 6,
    title: "Book 6",
    author: "Author 6",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 7,
    title: "Book 7",
    author: "Author 7",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 8,
    title: "Book 8",
    author: "Author 8",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 9,
    title: "Book 9",
    author: "Author 9",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 10,
    title: "Book 10",
    author: "Author 10",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: 11,
    title: "Book 11",
    author: "Author 11",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  }
];

console.log(books); 
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    console.log(isSidebarOpen);
  };

  const removeBook = (id) => {
    console.log("Removing Book with ID: ", id);
    //removeBook logic later
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} books={books} removeBook={removeBook} />
      <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <p>Hello world</p>
      </div>
    </>
  )
}

export default App
