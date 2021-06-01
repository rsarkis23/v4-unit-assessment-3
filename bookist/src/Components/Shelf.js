import React from 'react'


function Shelf (props) {

    const mappedTitles = props.shelf.map(e => {
        return (
            <div key={e}>
                <h3>{e}</h3>
            </div>
        )
    })



    return (
        <div>
            <h1>SHELF</h1>
            <button onClick={props.clearShelf}><h2>Clear Shelf</h2></button>
            { mappedTitles }
        </div>
    )

}

export default Shelf