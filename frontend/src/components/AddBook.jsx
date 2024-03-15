import React from 'react'

export default function AddBook({handleAddSubmit, handleCancelBtn}) {
    return (
        <>
        <h3>ADD BOOKS FORM:</h3>
        <form onSubmit={handleAddSubmit}>
            Title <input type="text" name="title" />
            Description <input type="text" name="description" />
            <button type="submit">ADD</button>
            <button onClick={handleCancelBtn}>Cancel</button>

        </form>
        </>
    )
}