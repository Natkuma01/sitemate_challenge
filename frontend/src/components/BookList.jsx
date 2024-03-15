import { getbook } from "../services/ApiService"
import React, { useEffect, useState } from "react"


export default function BookList() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        let mount = true
        getbook()
        .then(res => {
            setBooks(res)
            return() => mount = false
        })
    })

  return (
    <>
        <h3>BOOK LIST</h3>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            {books.map(book => {
              return <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td><button>Edit</button> <button>Delete</button></td>
              </tr>
            })}
            
          </tbody>
        </table>
    </>
  )
}
