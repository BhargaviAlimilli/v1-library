const Book = require("../model/bookModel")

// To get all books list in the library
exports.getAllBooks= async (req,res)=>{          

    const books=  await Book.find()
    console.log("fetching total books data")

    try{
    res.status(200).json({
        status: "success",
        message: "Here are the total books",
        result: books.length,
        content: {
            books
        }
    })
    }
    catch(err){
        console.log("ERRoRRRRR")
        res.status(404).json({
            status: 'fail',
            message: err
          });  
        }
}

// To get book by it's id from the library
exports.getBook= async (req,res)=>{                
    try{
        const book=  await Book.findById(req.params.id)
        console.log(req.params.id)
        res.status(200).json({
            status: "succes",
            messge: `here is the ${req.params.id} book `,
            content:{
                book
            }
        })
    }
    catch(err){
        console.log("ERRoRRRRR")
        res.status(404).json({
            status: 'fail',
            message: err
          });  
    }
}

// Adding/Creating new book into the library
exports.createBook= async (req,res)=>{           
    console.log(req.body)
    try{
        const newBook= await Book.create(req.body)
        // console.log(req.body)
        res.status(201).json({
            status: "succes",
            messge: "Book created succesfully",
            content:{
                newBook
            }
        })
        console.log("new book adding in the list ")
    }
    catch(err){
        console.log("ERRoRRRRR")
        console.log(err)
        res.status(404).json({
            status: 'fail',
            message: err
          });  
    }
}

 // Updating book by its id in the library
exports.updateBook= async (req,res)=>{              
    try{
      const bookById= await Book.findByIdAndUpdate(req.params.id,req.body, {
          new : true
      })

      res.status(201).json({
        status: "succes",
        messge: "Book updated succesfully",
        content:{
            bookById
        }
    })
    console.log("book updated to the list ")
    }
    catch(err){
        console.log("ERRoRRRRR")
        console.log(err)
        res.status(404).json({
            status: 'fail',
            message: err
          });  
    }
}

// Deleting book by its id from the library
exports.deleteBook= async (req,res)=>{
    try{
    await Book.findByIdAndDelete(req.params.id)
    res.status(202).json({
        status: "succes",
        messge: "succesfully deleted"})
        console.log(`Succesfully deleted ${req.params.id} book`)
    }
    catch(err){
        console.log("ERRoRRRRR")
        console.log(err)
        res.status(404).json({
            status: 'fail',
            message: err
          });  
    }
}





