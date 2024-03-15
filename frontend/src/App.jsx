import React from "react"
import axios from "axios"
import './App.css'

class App extends React.Component {
  
  state = { books: [], }

  componentDidMount() {
    let data;
    axios.get('http://localhost:8000/books/books')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      })
    })
    .catch(err => { })
  }
  
  render() {
    return (
      <div>
      <header>Data</header>
      <hr></hr>
      {this.state.books.map((output, id) => (
        <div key={id}>
          <h2>{output.title}</h2> 
        </div>
      ))}
     </div>
    )
  }
}

export default App;