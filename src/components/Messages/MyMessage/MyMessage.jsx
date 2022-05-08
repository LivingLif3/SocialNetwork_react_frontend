import React from "react";
import styles from './MyMessage.module.css';
import { DeleteOutlined } from "@ant-design/icons";
import { deleteMessage } from "../../store-redux/messages-reducer";
import { connect } from "react-redux";

const MyMessage = (props) => {

    let onDelete = () => {
        props.deleteMessage(props.id)
    }
    return(
        <div className={styles.message}>
           <div className={styles.description}>
               <div className={styles.buble}>
                   {props.text}
               </div>
               <DeleteOutlined className = {styles.delete} onClick = {onDelete}/>
           </div>
        </div>
    )
}

export default connect(null, {deleteMessage})(MyMessage);