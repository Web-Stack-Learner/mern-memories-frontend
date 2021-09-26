const initialState = {
    posts: [],
    loading: false,
    error: null
}

const posts = (posts = [], action) => {
    switch (action.type) {
        // case "GET_POSTS_REQUEST":
        //     return { ...posts, loading: true }
        case "GET_POSTS_SUCCESS":
            return  action.payload
        // case "GET_POSTS_FAILURE":
        //     return { ...posts, loading: false, error: action.payload }
        case "CREATE":
            return [...posts, action.payload]
        case "GET_POST_UPDATE_SUCCESS":
            return posts.map(post=>post._id===action.payload._id?action.payload:post)

        default:
            return posts
    }
}

export default posts