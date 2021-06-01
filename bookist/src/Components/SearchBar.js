import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor (props) {
        super (props)

        this.state = {
            input: ''
        }
    }


    render() {
        return (
            <div>
                <input width='500px'/>
                <button>search</button>
                <button>clear search</button>
            </div>
        )
    }
}
