const express = require('express');
const controller = require('../controllers/controllers');

const router = express.Router();

router
  .route('/allbooks')
  .get(controller.getAllBooks);  //get all books

router.route('/:id').get(controller.getBook)  //get book by id
router.route('/newbook').post(controller.createBook) // create new book
router.route('/updatebook/:id').patch(controller.updateBook) // update book by id
router.route('/delete/:id').delete(controller.deleteBook) //delete book by id

module.exports = router


