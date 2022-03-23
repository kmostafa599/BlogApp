import axios from 'axios'

const API = axios.create({baseURL:'https://api.tawwr.com/'})


export const getData = () => API.get('/posts')
export const addPost = (newPost) => API.post('/posts',newPost)
export const editPost = (id, editedPost) => API.put(`/posts/${id}`,editedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`,id)

export const addVote = (id, vote) => API.post(`/posts/${id}/vote`,vote)