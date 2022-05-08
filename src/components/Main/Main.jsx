import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import { getDialogs } from "../store-redux/post-reducer";
import styles from "./Main.module.css";
import socket from "../socket/socket";
import { PlusOutlined } from "@ant-design/icons";
import PostModal from "../Modal/PostModal";

const Main = (props) => {

    let [active, setActive] = useState(false)

    useEffect(() => {
        props.getDialogs()
        socket.on("SERVER:POST_LIKED", () => {
            props.getDialogs()
        })
        socket.on("SERVER:POST_CREATED", () => {
            props.getDialogs();
        })
        socket.on("SERVER:POST_DELETED", () => {
            props.getDialogs();
        })
        socket.on("SERVER:COMMENT_DELETED", () => {
            props.getDialogs();
        })
        socket.on("SERVER:COMMENT_CREATED", () => {
            props.getDialogs();
        })
    }, [])
    
    return (
        <div>
            <PostModal active={active} setActive = {setActive} />
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.posts}>
                    <Posts posts = {props.posts} />
                </div>
            </div>
            <div className={styles.addPost} onClick = {() => {setActive(true)}}>
                <div className={styles.button}>
                    <PlusOutlined style = {{fontSize: '25px', color: "#dc335a"}} />
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, { getDialogs })(Main);