import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import PostContainer from "../Post/PostContainer";
import styles from "./Profile.module.css";

const Profile = (props) => {
    let user = useParams().id;
    let userPosts = props.posts.filter((post) => post.author._id === user);
    let name = userPosts[0].author.fullName;
    return (
        <div className={styles.profile}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.img}>
                            <div>
                                <div className={styles.avatar}><img src="https://sun9-87.userapi.com/impg/NqGukhqDI95sE3I0MlUydo8VwoHQpn0FLhACuA/9noNsyd2XZs.jpg?size=1440x1920&quality=96&sign=6f3db6b937e82c62ab7a5062573e2ad3&type=album" alt="" /></div>
                                <div className={styles.name}>{name}</div>
                            </div>

                        </div>
                        <div className={styles.profileInfo}>
                            <ul>
                                <li>Work :</li>
                                <li>Projects :</li>
                                <li>Age :</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.posts}>
                <div className={styles.postsContainer}>
                    {userPosts.map(post => <PostContainer title={post.title} id={post._id} liked={post.liked} comments = {post.comments}
                        name={post.author.fullName} author={post.author._id} key={post._id} likes={post.likes} description={post.description} />)}
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {})(Profile);