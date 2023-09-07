import React, { useState } from 'react'
import './SingleBook.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update } from '../Redux/Action'
import coverBook from "../components/images/THG.jpg"

const SingleBook = ({ id, author, genre, publicationYear, title }) => {


    const [book, setBook] = useState({ id, author, genre, publicationYear, title })


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ClickToViewDetail = () => {


        dispatch(update(book))
        navigate('/details')
    }

    return (

        <div onClick={ClickToViewDetail} class="book read">
            <div class="cover">
                <img src={coverBook} />
            </div>
            {/* <div class="description">
                <p class="title">  {title}  <br />
                <span class="author">  {author} </span></p>
            </div> */}
            <div className="row">                
                <h5 className="titleStyle">{title} </h5>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default SingleBook