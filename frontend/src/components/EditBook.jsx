import React from 'react'

export default function EditBook({handleEditSubmit, selectedEditData}) {
    return (
        <>
        <h3>ADD BOOKS FORM:</h3>
        <form onSubmit={(e)=>handleEditSubmit(e, selectedEditData.id)}>
            Title <input type="text" name="title" defaultValue={selectedEditData.title} />
            Description <input type="text" name="description" defaultValue={selectedEditData.description} />
            <button type="submit">EDIT</button>
        </form>
        </>
    )
}