import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "./search.css";

function Search() {
  const libraryData = [
    { id: 1, title: "Book 1", author: "Author 1", genre: "Fiction" },
    { id: 2, title: "Book 2", author: "Author 2", genre: "Mystery" },
    { id: 3, title: "Book 3", author: "Author 3", genre: "Fantasy" },
    { id: 4, title: "Book 4", author: "Author 4", genre: "Sci-Fi" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLibraryData = libraryData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (window.sessionStorage.getItem("loggedin") == "true") {
    return (
      <div>
        <Header />
        <div>
          <h2>Library Catalog</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by title, author, or genre..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {filteredLibraryData.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="signinlink">
          Please sign in to use our search function
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;
