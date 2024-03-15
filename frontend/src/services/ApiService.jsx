import axios from "axios"


export function getbook() {
    return axios.get('http://127.0.0.1:8000/book/')
    .then(res => {
        return res.data
    })
}

export function addbook(book) {
    return axios.post('http://127.0.0.1:8000/book/', 
    {   
        id: null,
        title: book.title.value,
        description: book.description.value,
    })
    .then(res => {
        return res.data
    })
}

export function editbook(id, book) {
    return axios.put('http://127.0.0.1:8000/book/'+id+'/', 
    {
        title: book.title.value,
        description: book.description.value,
    })
    .then(res => {
        return res.data
    })
}

export function deletebook(id) {
    return axios.delete('http://127.0.0.1:8000/book/'+id+'/')
    .then(res => {
        return res.data
    })
}