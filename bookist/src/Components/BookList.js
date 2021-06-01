import React from 'react'


function BookList(props) {

    const mappedBooks = props.books.map(e => {
        return (
            <div key={e.id}>
                <img 
                src={e.img} 
                width='200' height='250' alt={e.title}
                onClick={ event => props.addToShelf(e.id) }></img>
                <p>{e.title}</p>
                <p>{e.author}</p>
            </div>
        )

    })

    return (
        <span>
            <h1>LIST</h1>
            <div className='book__list'>
                {mappedBooks}
            </div>
        </span>
    )
}

export default BookList