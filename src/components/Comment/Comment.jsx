import React from "react";
import styles from "./Comment.module.css";
import { CloseOutlined } from "@ant-design/icons";

const Comment = (props) => {
    return(
        <div className={styles.main}>
            <div className={styles.comment}>
                <div className={styles.avatar}><img src="https://sun9-87.userapi.com/impg/NqGukhqDI95sE3I0MlUydo8VwoHQpn0FLhACuA/9noNsyd2XZs.jpg?size=1440x1920&quality=96&sign=6f3db6b937e82c62ab7a5062573e2ad3&type=album" alt="" /></div>
                <div className={styles.secondBlock}>
                    <div className={styles.nameAndDelete}>
                        <div className={styles.name}>{props.comment.user.fullName}</div>
                        <div className={styles.delete}><CloseOutlined className = {styles.close} onClick = {() => { props.onCommentDelete(props.comment._id) }} style={{fontSize: "10px", color: "#65676b"}} /></div>
                    </div>
                    <div className={styles.text}>{props.comment.text}</div>
                </div>
                <div className={styles.delete}></div>
            </div>
        </div>
    );
}

export default Comment;