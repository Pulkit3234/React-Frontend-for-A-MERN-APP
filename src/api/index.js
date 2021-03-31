import axios from 'axios';



const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post('/posts', newPost);

export const getPost = (post) => API.get(`http://localhost:5000/posts/${post._id}`);

export const updatePost = (id, updatedPost) => API.patch(`posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signin = (formData) => API.post('/users/signin', formData);
