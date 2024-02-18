-- Database Queries

-- Find all books. Returns 3 records.
SELECT * FROM books;

-- Find the title for the book with the id of 3. Should be Game of Thrones 
SELECT title FROM books WHERE id = 3;

-- List all movies sorted by price descending.
SELECT * FROM movies ORDER BY price DESC;

-- Add a book record for "The Host", by Stephenie Meyer, which has a genre of science fiction adn sells for $16.84
INSERT INTO books (title, author, genre, in_stock, price) VALUES ('The Host', 'Stephanie Meyer', 'science fiction', false, 16.84);

-- Find all books in the science fiction genre. 
SELECT * FROM books WHERE genre = 'science fiction';

-- Update The Host record so that it is in stock
UPDATE books SET in_stock = true where id = 4;

-- Find all books in stock
SELECT * FROM books WHERE in_stock = true;

-- Delete The Host record
DELETE FROM books where id = 4;

-- Find all books. Returns 3 records.
SELECT * FROM books;
