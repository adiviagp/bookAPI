// import express
import express from 'express';
// import controllers
import {
  getBooks,
  getBookById,
  saveBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js';

// express router
const router = express.Router();

// Route get All Books
router.get('/', getBooks);
// Route get single Book
router.get('/:id', getBookById);
// Route CREATE Book
router.post('/', saveBook);
// Route UPDATE Book
router.patch('/:id', updateBook);
// Route DELETE Book
router.delete('/:id', deleteBook);

// export router
export default router;
