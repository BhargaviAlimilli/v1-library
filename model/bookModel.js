const mongoose=require('mongoose')

// creating schema or blue print for book 

const bookSchema = new mongoose.Schema(
    {
      Bookname: {
        type: String,
        required: [true, 'A book must have a name'],
      },
      Author: String,   
      Price: {
        type: Number,
        required: [true, 'A book must have a price']
      },
      Availability: Boolean,
      Department:{
        type: String,
        required: [true, 'A book must have a jouner']
      }
    })

const Book= new mongoose.model('Books', bookSchema)

module.exports= Book

