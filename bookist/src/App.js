import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'

function App() {
  return (
    <div className="App">
      <Header />
      <BookList />
      <Shelf />
    </div>
  );
}

export default App;
