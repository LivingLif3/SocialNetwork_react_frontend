import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import styles from "./PostInfo.module.css";
import { useParams } from "react-router-dom";
import { getPost } from "../store-redux/post-reducer";
import { NavLink } from "react-router-dom";

const PostInfo = (props) => {

    let postId = useParams().id;

    useEffect(() => {
        props.getPost(postId)
    }, [])
    return (
        <div className={styles.postInfo}>
            <div className={styles.postInfo_header}>
                <Header />
            </div>
            <div className={styles.content}>
                <div className={styles.contentInfo}>
                    <div className={styles.header}>
                        <div className={styles.avatar}><img src="https://sun9-87.userapi.com/impg/NqGukhqDI95sE3I0MlUydo8VwoHQpn0FLhACuA/9noNsyd2XZs.jpg?size=1440x1920&quality=96&sign=6f3db6b937e82c62ab7a5062573e2ad3&type=album" /></div>
                        <div className={styles.centerBlock}>
                            <div className={styles.name}>{props.post && props.post[0].author.fullName}</div>
                            <div className={styles.title}>{props.post && props.post[0].title}</div>
                            <div className={styles.cost}>${props.post && props.post[0].cost}/month</div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.sendMessage}><NavLink to={'/main/dialogs'} style={{textDecoration:'none', color: '#fff'}}>Откликнуться</NavLink></div>
                            <div className={styles.report}>Жалоба</div>
                        </div>
                    </div>
                    <div className={styles.body}>
                        {props.post && props.post[0].description}
                    </div>
                    <div className={styles.footer}>
                        footer
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    post: state.posts.currentPostInfo
})

export default connect(mapStateToProps, {getPost})(PostInfo);