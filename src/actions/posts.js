import * as api from '../api'

//Action Creator

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = api.fetchPosts()
        dispatch({
            type: "FECTH_ALL",
            payload: data,
        })

    } catch (err) {
        console.log(err.message)
    }


}
export const createPost = (post) => async (dispatch) => {
    try {
        const data = api.createPost(post)
        dispatch({ type: "CREATE", payload: data })

    } catch (err) {
        console.log(err.message)
    }
}