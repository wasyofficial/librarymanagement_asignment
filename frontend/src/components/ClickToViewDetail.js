import React, { useEffect, useState } from 'react'
import "./ClickToViewDetail.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { Allsearch } from '../Redux/Action'
import bookImg from '../components/images/THG.jpg'
import Footer from './Footer'

const ClickToViewDetail = () => {

    const SingledData = useSelector((s) => s)
    const navigate = useNavigate()

    const [isUpdateClic, setisUpdateClic] = useState(false)

    const dispatch = useDispatch()


    const [book, setBook] = useState("")

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


    useEffect(() => {

        if (SingledData == null) {

        } else {
            setBook(SingledData[0])
        }

    }, [])


    const updateHandler = async () => {
        setisUpdateClic(false)

        await axios.post("http://localhost:5000/book/update", {
            id: book.id, title: inputBook.title
            , author: inputBook.author
            , genre: inputBook.genre
            , publicationYear: inputBook.publicationYear
        }).then((res) => {


            alert("Book is updated!")
            setBook({
                id: book.id, title: inputBook.title
                , author: inputBook.author
                , genre: inputBook.genre
                , publicationYear: inputBook.publicationYear
            })
            setisUpdateClic(false)
        }).catch(() => {

        })


    }

    const updateStart = async () => {

        setisUpdateClic(true)


    }



    const deleteHandler = async () => {
        await axios.post("http://localhost:5000/book/delete", { id: book.id }).then((res) => {

            dispatch(Allsearch(res.data.books))
            alert("Book is Deleted!")
            navigate("/all-books")
        })
    }

    return (
        <>


            {
                book == null ? (null) :

                    // <div className="container">
                    //     <div className="row">
                    //         <div class="col-md-12">
                    //             <div class="_product-detail-content">
                    //                 <p class="_p-name"> {book.title} </p>
                    //                 <div class="_p-price-box">
                    //                     <div className="left">
                    //                         <img src={bookImg} />
                    //                     </div>
                    //                     <div class="_p-features">
                    //                         <span> Author Name:- {book.author}   </span>
                    //                         <span> Publication Year:-  {book.publicationYear}  </span>
                    //                         <span> Genre:-  {book.genre}  </span>
                    //                     </div>
                    //                     <div action="" method="post" accept-charset="utf-8">
                    //                         <ul class="spe_ul"></ul>
                    //                         <div class="_p-qty-and-cart">
                    //                             <div class="_p-add-cart text-center">
                    //                                 <button onClick={deleteHandler} class="btn-theme btn buy-btn" tabindex="0">
                    //                                     <i class="fa fa-shopping-cart"></i> Delete
                    //                                 </button>
                    //                                 <button onClick={updateHandler} class="btn-theme btn btn-success" tabindex="0">
                    //                                     <i class="fa fa-shopping-cart"></i> Update
                    //                                 </button>                                                    
                    //                             </div>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>

                    //     </div>

                    // </div>
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={bookImg} />
                            </div>
                            <div className="col-md-6">
                                <h3>{
                                    isUpdateClic ? <input value={inputBook.title} onChange={inputHandler} type="text" name="title" placeholder="Title" /> : book.title
                                }</h3>
                                <hr />
                                <div>
                                    <p>Author Name: {
                                        isUpdateClic ? <input value={inputBook.author} onChange={inputHandler} type="text" name="author" placeholder="author" /> : book.author
                                    }</p>
                                    <p>Genre: {
                                        isUpdateClic ? <input value={inputBook.genre} onChange={inputHandler} type="text" name="genre" placeholder="genre" /> : book.genre
                                    }</p>
                                    <p>Publication Date: {
                                        isUpdateClic ? <input value={inputBook.publicationYear} onChange={inputHandler} type="text" name="publicationYear" placeholder="publicationYear" /> : book.publicationYear
                                    }</p>
                                </div>
                                <div>
                                    <button onClick={deleteHandler} class="btn-theme btn buy-btn btn-outline-warning" tabindex="0">
                                        <i class="fa fa-shopping-cart"></i> Delete
                                    </button>

                                    {/* <button onClick={updateHandler} class="btn-theme btn btn-success" tabindex="0">
                                        <i class="fa fa-shopping-cart"></i> Update
                                    </button> */}

                                    {
                                        isUpdateClic ? <button onClick={updateHandler} class="btn-theme btn btn-success" tabindex="0">
                                            <i class="fa fa-shopping-cart"></i> Save
                                        </button>
                                            : <button onClick={updateStart} class="btn-theme btn btn-success" tabindex="0">
                                                <i class="fa fa-shopping-cart"></i> Update
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


            }


            <Footer />

        </>
    )
}


export default ClickToViewDetail