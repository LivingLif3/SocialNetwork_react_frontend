import React from "react";
import PostContainer from "../Post/PostContainer";

const Posts = (props) => {
    return(
        <>
            {props.posts && props.posts.map(post => <PostContainer title = {post.title} id = {post._id} liked = {post.liked} comments = {post.comments}
            name = {post.author.fullName} author = {post.author._id} key={post._id} likes = {post.likes} description = {post.description}/>)}
        </>
    );
}

export default Posts;