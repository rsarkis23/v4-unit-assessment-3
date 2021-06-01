import React, { Component } from 'react'


function Shelf(props) {

    const mappedTitles = props.shelf.map(e => {
        return (
            <div key={e}>
                <h2>{e}</h2>
            </div>
        )
    })



    return (
        <div>
            <h2>shelf</h2>
            { mappedTitles }
        </div>
    )

}

export default Shelf