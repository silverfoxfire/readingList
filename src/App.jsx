import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import MainBody from "./components/MainBody/MainBody";
import "./App.css";
import missingCover from "./assets/missingCover.png";

const API_KEY = "";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery){
      return;
    }

    const fetchBooks = async () => {
      try{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}&maxResults=20`);
        const data = await response.json();

        const mapBooks = data.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.join(", ") || "Unknown Author",
            cover: item.volumeInfo.imageLinks?.thumbnail || missingCover,
            description: item.volumeInfo.description || "",
            shortDescription: item.searchInfo?.textSnipper || ""
        }));

        setBooks(mapBooks || []);
      }
      catch (error){
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const removeBook = (id) => {
    setReadingList((prev) => prev.filter((b) => b.id !== id));
  }

  const addBook = (id) => {
    const bookToAdd = books.find((b) => b.id === id);

    if(!bookToAdd){
      return;
    }

    setReadingList((prevList) =>{
      if(prevList.some((b) => b.id === id)){
        return prevList;
      }
      return [...prevList, bookToAdd]
    });
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} onSearch={handleSearch} />
      <SideBar isOpen={isSidebarOpen} books={readingList} removeBook={removeBook} />
      <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <MainBody books={books} onAdd={addBook} />
      </div>
    </>
  )
}

export default App
