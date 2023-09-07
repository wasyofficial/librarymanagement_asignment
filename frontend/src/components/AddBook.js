import React from 'react'
import { useState } from 'react';
import axios from "axios"
import './AddBook.css'
import HeroSection from './HeroSection';
import Footer from './Footer';
const AddBook = () => {

    const [inputBook, setInputBook] = useState({
        title: ""
        , author: ""
        , genre: ""
        , publicationYear: ""
    })


    const inputHandler = (e) => {
        setInputBook({
            ...inputBook,
            [e.target.name]: e.target.value
        })
    }




    const AddBook = async (e) => {
        e.preventDefault()

        // await axios.get("https://librariesapi.onrender.com/book/add").then((res) => {
        await axios.post("http://localhost:5000/book/add", {
            title: inputBook.title
            , author: inputBook.author
            , genre: inputBook.genre,
            publicationYear: inputBook.publicationYear,
        }).then((res) => {

            setInputBook({
                title: ""
                , author: ""
                , genre: ""
                , publicationYear: ""
            })
            alert("successFully Addded")
        })
    }

 


    return (
        <>            
            {/* <HeroSection /> */}
            <div class="container mt-0">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <form onSubmit={AddBook} class="box">
                                <h1>Add Book Details</h1>
                                <p class="text-white"> Please Fill the Book Details!</p>
                                <input value={inputBook.title} onChange={inputHandler} type="text" name="title" placeholder="Title" />
                                <input value={inputBook.author} onChange={inputHandler} type="text" name="author" placeholder="Author" />
                                <input value={inputBook.genre} onChange={inputHandler} type="text" name="genre" placeholder="Genre" />
                                <input value={inputBook.publicationYear} onChange={inputHandler} type="text" name="publicationYear" placeholder="Publish Year" />
                                <input type="submit" name="" value="AddNow" href="#" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default AddBook