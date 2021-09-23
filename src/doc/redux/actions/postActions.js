import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
        .catch(error => dispatch({
            type: FETCH_POSTS,
            payload: []
        }))
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => dispatch({
            type: NEW_POST,
            payload: data
        }))
        .catch(error => dispatch({
            type: NEW_POST,
            payload: {}
        }))
}