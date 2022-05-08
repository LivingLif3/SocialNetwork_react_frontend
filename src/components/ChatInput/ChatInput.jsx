import React, {useState, useEffect} from "react";
import { SmileOutlined, SendOutlined, CameraOutlined, AudioOutlined } from "@ant-design/icons";
import styles from "./ChatInput.module.css";
import { connect } from "react-redux";
import { sendMessage, setMessages } from "../store-redux/messages-reducer";
import { setDialogs } from "../store-redux/dialogs-reducer";

const ChatInput = (props) => {

    const [value, setValue] = useState("")

    let onPressEnter = () => {
        props.sendMessage({
            text: value,
            dialog: props.dialog
        })
    }

    let clearInput = () => {
        setValue('')
    }
    
    // onKeyUp={} - при нажатии enter
    return(
        <div className={styles.chatInput}>
            <div className={styles.smileBtn}>
                <SmileOutlined style = {{fontSize: "20px"}}/>
            </div>
            <input type="text" onChange = { (e) =>setValue(e.target.value)}
            placeholder="Enter a message" value = {value}  onKeyPress={(e) => {
                if (e.key === 'Enter'){
                    onPressEnter();
                    setValue('');
                }
            }} />
            <div className={styles.chatActions}>
                <CameraOutlined style = {{fontSize: "20px"}} className={styles.iS} />
                { value ? <SendOutlined style = {{fontSize: "20px"}} onClick = {() => clearInput()}className={styles.iT} /> 
                : <AudioOutlined style = {{fontSize: "20px"}} className={styles.iF} />}
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {sendMessage, setMessages, setDialogs})(ChatInput);