import { getbook, addbook, editbook, deletebook } from "../services/ApiService"
import React, { useEffect, useState } from "react"
import AddBook from "./AddBook"
import EditBook from "./EditBook"


export default function BookList() {

    const [books, setBooks] = useState([])
    const [showAddBookForm, setShowAddBookForm] = useState(false)
    const [showEditBookForm, setShowEditBookForm] = useState(false)
    const [selectedEditData, setSelectedEditData] = useState()

    useEffect(() => {
        let mount = true
        getbook()
        .then(res => {
            setBooks(res)
            return() => mount = false
        })
    }, [])

    const handleAddSubmit = (e) => {
      addbook(e.target)
      .then(res => {
        setBooks(res)
      })
    }

    const handleEditBtn = (book) => {
      setSelectedEditData(book)
      setShowEditBookForm(true)
      setShowAddBookForm(false)
    }

    const handleEditSubmit = (e, id) => {
      editbook(id, e.target)
      .then(res=> {
        setBooks(res)
      })
    }

    const handleDeleteBtn = (id) => {
      deletebook(id)
      .then(res => {
        // Filter out the deleted book from the state
        setBooks(books.filter(b => b.id !== id))
      })
    }

    function handleCancelBtn() {
      setShowAddBookForm(false)
    }
    

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
              <td><button onClick={()=>handleEditBtn(book)}>Edit</button> <button onClick={()=>handleDeleteBtn(book.id)}>Delete</button></td>
              </tr>
            })}
            
          </tbody>
        </table>
        <button onClick={()=>setShowAddBookForm(true)}>Add New Book</button>
        {showAddBookForm && <AddBook handleAddSubmit={handleAddSubmit} handleCancelBtn={handleCancelBtn} />}
        {showEditBookForm && <EditBook handleEditSubmit={handleEditSubmit} selectedEditData={selectedEditData}/>}

    </>
  )
}
