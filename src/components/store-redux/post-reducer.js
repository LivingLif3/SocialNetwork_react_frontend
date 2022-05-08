import axios from "axios";

const SET_DIALOGS = "SET_DIALOGS";
const SET_POST_INFO = "SET_POST_INFO";
const SET_POST_ID = "SET_POST_ID";
const SET_POST_COMMENTS = "SET_POST_COMMENTS";
const SET_DELETE_COMMENT = "SET_DELETE_COMMENT";

let initialState = {
    posts: null,
    currentPostInfo: null,
    postLikes: null, 
    postComments: [],
    deletedComment: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_DIALOGS:
            return {
                ...state,
                posts: action.posts
            }
        case SET_POST_INFO:
            return {
                ...state,
                currentPostInfo: action.post
            }
        case SET_POST_ID:
            return {
                ...state,
                currentPostId: action.likes
            }
        case SET_POST_COMMENTS:
            return {
                ...state,
                postComments: action.comments
            }
        case SET_DELETE_COMMENT:
            return{
                ...state, 
                deletedComment: action.comment
            }
        default:
            return {...state}
    }
}

const setDialogsAC = (posts) => ({type: SET_DIALOGS, posts})
const setPostAC = (post) => ({type: SET_POST_INFO, post})
const setPostLikes = (likes) => ({type: SET_POST_ID, likes})
const setPostComments = (comments) => ({type: SET_POST_COMMENTS, comments})
const setDeletedComment = (comment) => ({type: SET_DELETE_COMMENT, comment})

export const getDialogs = () => (dispatch) => {
    axios.get('http://localhost:8000/posts', TOKEN)
    .then(({data}) => {
        dispatch(setDialogsAC(data));
        console.log(data)
    }) 
}

export const getPost = (postId) => (dispatch) => {
    axios.get(`http://localhost:8000/post/${postId}`, TOKEN).then(({data}) => {
        dispatch(setPostAC(data));
    })
}

export const setPostLike = (postId) => {
    axios.post(`http://localhost:8000/post/like`, {postId}, TOKEN).then(({data}) => {
        
    })
}

export const postCreate = (cost, title, description) => dispatch => {
    let postData = {
        cost,
        title,
        description
    }
    axios.post("http://localhost:8000/post", postData, TOKEN).then(({data}) => {
        dispatch(setPostAC(data));
    })
}

export const deletePost = (postId) => dispatch => {
    axios.delete(`http://localhost:8000/post/${postId}`, TOKEN).then(({data}) => {
        dispatch(setPostAC(data));
    })
}

export const getPostComments = (postId) => dispatch => {
    axios.get(`http://localhost:8000/comments/${postId}`, TOKEN).then(({data}) => {
        dispatch(setPostComments(data))
        console.log(data)
    })
}

export const deleteComment = (commentId) => dispatch => {
    axios.delete(`http://localhost:8000/comment/${commentId}`, TOKEN).then(({data}) => {
        dispatch(setDeletedComment(data))
    })
}

export const createComment = (text, post) => dispatch => {
    let postData = {
        text,
        post
    }
    axios.post(`http://localhost:8000/comment`, postData, TOKEN).then(({data}) => {
        dispatch(setDeletedComment(data))
    })
}

/*export const getPostLikes = (postId) => (dispatch) => {
    axios.get(`http://localhost:8000/post/like/${postId}`, {headers:{token: window.localStorage.getItem('token')}}).then(({data}) => {
        dispatch(setPostLikes(data.likes))
    })
}*/