import axios from "axios"


export function getbook() {
    return axios.get('http://127.0.0.1:8000/book/')
    .then(res => {
        return res.data
    })

}