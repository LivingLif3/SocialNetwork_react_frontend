import { LikeOutlined, MessageOutlined, LikeFilled, DeleteOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Comment from "../Comment/Comment";
import { SendOutlined } from "@ant-design/icons";
import "./Post.css";

const Post = (props) => {
    let index = props.liked.indexOf(window.localStorage.getItem('me'));
    if(index == 0){
        index +=1;
    }
    let i = 3;
    let [firstComments, setFirstComments] = useState([])
    useEffect(()=>{
        setFirstComments(props.comments.slice(0, 3))
    }, [])
    useEffect(() => {
        setFirstComments(props.comments.slice(0, i))
        console.log("here");
    }, [props.commentsRefresh])
    let show=()=>{
        i = i + 3
        setFirstComments(props.comments.slice(0, i))
    }
    return (
        <div className="post">
            <div className="header">
                <div className="person">
                    <div className="avatar"><img src="https://sun9-87.userapi.com/impg/NqGukhqDI95sE3I0MlUydo8VwoHQpn0FLhACuA/9noNsyd2XZs.jpg?size=1440x1920&quality=96&sign=6f3db6b937e82c62ab7a5062573e2ad3&type=album" alt="" /></div>
                    <div className="group">
                        <div className="name"><NavLink to={`/main/profile/${props.author}`}>{props.name}</NavLink></div>
                        <div className="title"><NavLink className="navLink" to={`/main/postInfo/${props.id}`}>{props.title}</NavLink></div>
                    </div>
                </div>
                {props.author == window.localStorage.getItem('me') && <div className = "delete" onClick = {() => props.onPostDelete()}><DeleteOutlined style = {{color: "#65676b"}} /> </div>}
            </div>
            <div className="body">
                <div className="description">{props.description}</div>
                <div className="like">{props.likes} likes</div>
            </div>
            
            <div className="footer">
                {index > 0 ? <div className="likes" onClick={() => {
                    props.setClick(false);
                    props.onClick()
                }}><LikeFilled style={{ fontSize: '20px', color: '#dc335a' }} /><span className={`span ${props.click && `active`}`}>like</span></div>
                    : <div className="likes" onClick={() => {
                        props.setClick(true);
                        props.onClick()
                    }}><LikeOutlined style={{ fontSize: '20px', color: '#65676b' }} /><span className={`span ${props.click && `active`}`}>like</span></div>}
                {/*<div className="likes" onClick = {() => setClick(true)}>{click ? <LikeFilled style= {{fontSize: '20px', color: '#dc335a'}} /> 
                : <LikeOutlined onClick = {() => setClick(true)} style= {{fontSize: '20px', color: '#65676b'}}/>}<span className={`span ${click && `active`}`}>like</span></div>*/}
                <div className="comments"><MessageOutlined style={{ fontSize: '20px', color: '#65676b' }} /><span className="span">comment</span></div>
            </div>
            <hr />
            {firstComments && firstComments.map((comment) => <Comment onCommentDelete = {props.onCommentDelete} key = {comment._id} comment = {comment} />)}
            <div>{props.comments.length > 3 && firstComments.length != props.comments.length && <span onClick={show}>Показать ещё</span>}</div>
            <div className="input">
                <input type="text" placeholder="Введите комментарий" value={props.value} onChange = { (e) => props.setValue(e.target.value) }/>
                <div className="sendIcon">
                    <SendOutlined style = {{fontSize: '24px', color: '#65676b'}} onClick = { () => props.setComment(props.value) }/>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    commentsRefresh: state.posts.posts
})

export default connect(mapStateToProps, {})(Post);