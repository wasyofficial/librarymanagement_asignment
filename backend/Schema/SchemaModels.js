const mongoose = require("mongoose")

const schemaBook = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,

    },
    publicationYear: {
        type: String,
        required: true,
        
    }
  
})

const BookList = mongoose.model("BookList", schemaBook)
module.exports = { BookList }