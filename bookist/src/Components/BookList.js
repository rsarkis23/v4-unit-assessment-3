import React, { Component } from 'react'
import data from '../data'


class BookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: data
          }
    }

    render() {
        return (
            <span>
                <h2>list</h2>
                <div className='book__list'>
                    {this.state.books.map(e => {
                    return (
                        <div key={e.id}>
                            <img src={e.img} width='200' height='250' alt={e.title}></img>
                            <p>{e.title}</p>
                            <p>{e.author}</p>
                        </div>
                    )
                })}
                </div>
            </span>
        )
    }
}

export default BookList