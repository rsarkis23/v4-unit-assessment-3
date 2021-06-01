import React, { Component } from 'react'
import data from '../data'


function BookList(props) {

    const mappedBooks = props.books.map(e => {
        <div key={e.id}>
            <img src={e.img} width='200' height='250' alt={e.title}></img>
            <p>{e.title}</p>
            <p>{e.author}</p>
        </div>
    })

    return (
        <span>
            <h2>list</h2>
            <div className='book__list'>
                {mappedBooks}
            </div>
        </span>
    )
}

export default BookList