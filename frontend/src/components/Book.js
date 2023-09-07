import React, { useEffect, useState } from 'react';
import '../components/books.css'
import axios from "axios"
import SingleBook from './SingleBook';
import { useSelector } from 'react-redux'
import HeroSection from './HeroSection';
import Footer from './Footer';



const Book = () => {

    const [allBooks, setAllBooks] = useState([])
    const SearchedData = useSelector((s) => s)


    const [currPage, setCurrPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12)



    useEffect(() => {

        if (SearchedData != null) {
            setAllBooks(SearchedData)
        } else {
            GetAllBooks()
            console.log(allBooks.length)
        }


    }, [SearchedData])

    const GetAllBooks = async () => {
        // await axios.get("https://librariesapi.onrender.com/book").then((res) => {
        await axios.get("http://localhost:5000/book").then((res) => {
            setAllBooks(res.data.books)
        })
    }

    const lastPostInx = currPage * postPerPage;
    const firstPostInx = lastPostInx - postPerPage;
    const currPost = allBooks.slice(firstPostInx, lastPostInx);

    return (
        <>
            <HeroSection />
            <div id="large-th">
                <div class="container pt-5 mb-0">
                    <h1> A list of books</h1>
                    <br />

                    <div id="list-th">

                        {
                            currPost.map((item, id) => <SingleBook title={item.title} genre={item.genre} publicationYear={item.publicationYear} id={item._id} author={item.author} />)
                        }


                    </div >
                </div >

                {/* pagination */}
                {/* <div className="container text-center">
                    <div className="row ">
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <span class="page-link">Previous</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">2</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> */}

                <div className="container d-flex justify-content-between pt-3 pb-3">
                    <button disabled type="button" className="btn btn-dark" > &larr; Previous</button>
                    <button type="button" className="btn btn-dark" >Next &rarr;</button>
                </div>
            </div >
            
            <Footer />
        </>
    )
}

export default Book