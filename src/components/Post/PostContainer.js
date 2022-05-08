import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { setPostLike, deletePost, getPostComments, deleteComment, createComment } from "../store-redux/post-reducer";
import Post from "./Post";

const PostContainer = (props) => {

    let [click, setClick] = useState(false);
    let [value, setValue] = useState("");

    let onClick = () => {
        props.setPostLike(props.id);
    }

    let onPostDelete = () => {
        props.deletePost(props.id)
    }

    let onCommentDelete = (commentId) => {
        props.deleteComment(commentId)
    }

    let setComment = (text) => {
        props.createComment(text, props.id)
        setValue("")
    }
    // let text = [1, 2, 3, 4, 5];
    // console.log(text.slice(0, 4))
    //console.log(Math.ceil(26/5))
    return <Post title = {props.title} onPostDelete = {onPostDelete} onCommentDelete = {onCommentDelete} author = {props.author} liked = {props.liked} onClick = {onClick} id = {props.id} click = {click} setClick = {setClick}
    name = {props.name} key={props._id} value = {value} setValue = {setValue} setComment = {setComment}
     likes = {props.likes} description = {props.description}  comments = {props.comments}/>
}

let mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {setPostLike, deletePost, createComment, getPostComments, deleteComment})(PostContainer);