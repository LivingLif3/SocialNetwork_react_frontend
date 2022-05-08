import React from "react";
import styles from "./NoMyMessage.module.css";

const NoMyMessage = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.description}>
                <div className={styles.avatar}><img src="https://sun9-87.userapi.com/impg/NqGukhqDI95sE3I0MlUydo8VwoHQpn0FLhACuA/9noNsyd2XZs.jpg?size=1440x1920&quality=96&sign=6f3db6b937e82c62ab7a5062573e2ad3&type=album"/></div>
                <div className={styles.buble}>{props.text}</div>
            </div>
        </div>
    );
}

export default NoMyMessage;