import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            input: '',
        }
    }

    handleChange = (value) => {
        this.setState({
            input: value
        })
    }
    handleClick = () => {
        this.props.filterBooks(this.state.input)
    }

    handleClear() {
        this.setState({
            userInput: ''
        })
        this.props.reset()
    }

    render() {
        console.log(this.state.input)
        return (
            <div>
                <input width='500px' onChange={this.handleChange()} value={this.state.input} />
                <button onClick={() => this.props.filterBooks(this.state.input)}>search</button>
                <button onClick={() => this.handleClear()}>clear search</button>
            </div>
        )
    }
}
