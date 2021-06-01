import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'
import data from './data'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (id) => {
    let currentShelf = this.state.shelf.slice()
    let addedTitle = ''
    this.state.books.filter(e => {
      if (e.id === id) {
        addedTitle = e.title
      }
      return addedTitle
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

  filterBooks = (string) => {
    string.toString().toLowerCase()
    let filteredBooks = [...this.state.books]

    filteredBooks = filteredBooks.filter(e => {
      if (e.author.toLowerCase().includes(string) || e.title.toLowerCase().includes(string)) {
      }
    })


    this.setState({
      books: [...filteredBooks]
    })
  }

  reset = () => {
    this.setState({
      books: data
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>

        <div className='main__layout'>
          <BookList books={this.state.books} addToShelf={this.addToShelf} />
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        </div>
      </div>
    )
  }
}

export default App;
