const mongoose = require("mongoose")
const { BookList } = require("../Schema/SchemaModels");

const Express = require("express");

const getAllBooks = async (req, res, next) => {

    let books;

    try {
        books = await BookList.find()
    } catch (error) {
        console.log(error)
    }

    if (!books) {
        return res.status(404).json({ message: "books not found" })
    }

    return res.status(200).json({ books })
}

const createBook = async (req, res, next) => {
    const { title
        , author
        , genre,
        publicationYear,
    } = req.body

    let book;

    try {
        const bookProduct = new BookList({
            title, 
            author, 
            genre,
            publicationYear
        })

        book = await bookProduct.save()

    } catch (error) {
        return console.log(error)
    }
    if (!book) {
        return res.status(200).json({ msg: "unable to add it" })
    }

    return res.status(200).json({ book })

}
const updateBook = async (req, res, next) => {
    const { title
        , author
        , genre,
        publicationYear, id } = req.body

    
    let book;

    try {
        book = await BookList.findByIdAndUpdate(id, {
            title
            , author
            , genre,
            publicationYear
        })
    } catch (error) {
        return console.log(error)
    }

    if (!book) {
        return res.status(404).json({ message: "unable to update it" })
    }


    return res.status(200).json({ book })

}



const BookById = async (req, res, next) => {

    const id = req.params.id
    let book;

    try {
        book = await BookList.findById(id)
    } catch (error) {
        return console.log(error)
    }

    if (!book) {
        return res.status(500).json({ message: "no book" })
    }

    return res.status(200).json({ book })

}

const deleteBook = async (req, res, next) => {

    const { id } = req.body

    let books;

    try {
        await BookList.findByIdAndRemove(id)
        books = await BookList.find()
    } catch (error) {
        return console.log(error)
    }

    if (!books) {
        return res.status(500).json({ message: "unable to delete it" })
    }
    return res.status(200).json({ books })

}


const searchBooks = async (req, res, next) => {


    const { genre, title, author } = req.body

    // console.log(genre)

    let books;

    try {
        books = await BookList.find({

            "$or":[{
                genre: { $regex: ".*" + genre + ".*", $options: 'i' }
            },
            {
                title: { $regex: ".*" + title + ".*", $options: 'i' }
            },
            {
                author: { $regex: ".*" + author + ".*", $options: 'i' }
            }]

        })

    } catch (error) {
        console.log(error)
    }

console.log(books)

    if (!books) {
        return res.status(404).json({ message: "books not found" })
    }

    return res.status(202).json({ books })

}

const BookRoute = Express.Router()

BookRoute.get('/', getAllBooks)
BookRoute.post('/add', createBook)
BookRoute.post('/search', searchBooks)
BookRoute.post('/update', updateBook)

BookRoute.get('/:id', BookById)

BookRoute.post('/delete', deleteBook)


module.exports = BookRoute
