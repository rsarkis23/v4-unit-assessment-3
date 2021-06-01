import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'
import data from './data'



class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (id) => {
    let currentShelf = this.state.shelf.slice()
    let addedTitle = ''
    let addBook = this.state.books.filter(e => {
      if (e.id === id) {
        addedTitle = e.title
        return addedTitle
      } 
    })
    currentShelf.push(addedTitle)
    console.log(addedTitle)
    this.setState({
      shelf: currentShelf
    })

  }

  clearShelf = () => {
    this.setState({
      shelf: []
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />

        <div className='main__layout'>
          <BookList books={this.state.books} addToShelf={this.addToShelf} />
          <Shelf shelf={ this.state.shelf } clearShelf={ this.clearShelf }/>
        </div>
      </div>
    )
  }
}

export default App;
