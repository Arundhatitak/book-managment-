import React, { useState } from "react";

const BookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", ISBN: "" });
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, book]);
    setBook({ title: "", author: "", ISBN: "" });
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleRemoveAll = () => {
    setBooks([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ISBN">ISBN:</label>
          <input
            type="text"
            id="ISBN"
            name="ISBN"
            value={book.ISBN}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <div>
        <h2>Books:</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b, index) => (
              <tr key={index}>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.ISBN}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>
      <div>
        <h2>Form Data:</h2>
        <pre>{JSON.stringify(book, null, 2)}</pre>
      </div>
    </div>
  );
};

export default BookForm;