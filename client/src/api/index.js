import axios from 'axios';
import env from 'react-dotenv';

const url = `http://localhost:${process.env.REACT_APP_PORT_SERVER}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const done = (id) => axios.patch(`${url}/${id}/done`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
