import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReactAPI() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {
          headers: { 'Authorization': 'whatever-you-want' }
        });
        setBooksData(response.data.books);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Books Information</h1>
      {booksData.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <img src={book.imageLinks.thumbnail} alt={`Thumbnail for ${book.title}`} />
          <p>Description: {book.description}</p>
          <p>Authors: {book.authors.join(', ')}</p>
          
        </div>
      ))}
    </div>
  );
}

export default ReactAPI;
