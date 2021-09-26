import * as api from '../api/index.js'
import axios from "axios";


const getUsersRequest = () => {
    return {
        type: "GET_POSTS_REQUEST"
    }
}

const getUsersSuccess = (posts) => {
    return {
        type: "GET_POSTS_SUCCESS",
        payload: posts
    }
}

const getUsersFailure = (error) => {
    return {
        type: "GET_POSTS_FAILURE",
        payload: error
    }
}
const getPostUpdateSuccess=(posts)=>{
    return{
        type:"GET_POST_UPDATE_SUCCESS",
        payload:posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(getUsersRequest())
        axios.get('http://localhost:5000/posts')
            .then(res => {
                const posts = res.data
                dispatch(getUsersSuccess(posts))
            })
            .catch(err => {
                dispatch(getUsersFailure(err))
            })
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        const data = await api.createPost(post)
        dispatch({ type: "CREATE", payload: data })

    } catch (err) {
        console.log(err.message)
    }
}

export const updatePost =(id,postData)=>{
    return dispatch => {
        axios.patch(`http://localhost:5000/posts/${id}`,postData)
            .then(res=>{
                const data = res.data
                dispatch(getPostUpdateSuccess(data))
            }).catch(err=>console.log(err))
}
}