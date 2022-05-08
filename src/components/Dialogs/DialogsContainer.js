import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setDialogs } from "../store-redux/dialogs-reducer";
import { setMessages } from "../store-redux/messages-reducer";
import Dialogs from "./Dialogs";
import { useParams } from "react-router-dom";
import socket from "../socket/socket";

const DialogsContainer = (props) => {
    let dialogId = useParams().id;
    useEffect(() => {
        props.setDialogs();
        socket.on('SERVER:SEND_MESSAGE', () => {
            props.setMessages(dialogId)
        })
        socket.on('SERVER:DIALOG_CREATED', () => {
            props.setDialogs()
        })
        socket.on("SERVER:MESSAGE_DELETED", () => {
            props.setMessages(dialogId)
        })
    }, [])
    useEffect(() => {
        props.setMessages(dialogId)
    }, [dialogId])
    return <>
        {props.dialogs ? <Dialogs messages = {props.messages} me = {window.localStorage.getItem('me')} 
        dialogs = {props.dialogs} dialog = {dialogId}/> : "Loading..."}
        </>
}

let mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs,
    me: state.login.me, 
    messages: state.messages.messages
})

export default connect(mapStateToProps, {setDialogs, setMessages})(DialogsContainer);