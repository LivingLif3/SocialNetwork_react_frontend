import React, { createRef, useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from './Dialogs.module.css';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from "@ant-design/icons";
import ChatInput from "../ChatInput/ChatInput";
import MyMessage from "../Messages/MyMessage/MyMessage";
import NoMyMessage from "../Messages/NoMyMessage/NoMyMessage";
import DialogsItem from "./DialogsItem/DialogsItem";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";

const Dialogs = (props) => { 
    const messageRef = createRef();
    const [active, setActive] = useState(false);
    useEffect(()=>{
        messageRef.current.scrollTo(0, 999999)
    },[props.messages])
    return (
        <section className = {styles.home}>
            <div className={styles.header}>
                <Header />
            </div>
            <Modal active={active} setActive = {setActive} />
            <div className={styles.chat}>
                <div className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>
                        <div>
                            <TeamOutlined className={styles.i} />
                            <span>Список диалогов</span>
                        </div>
                        <FormOutlined className={styles.i} onClick = {() => setActive(true)} />
                    </div>
                    <div className = {styles.sidebarDialogs}>
                        {/*dialogs is here*/}
                        {props.dialogs && props.dialogs.map(dialog =><NavLink className='navLinks' to = {`/main/dialogs/${dialog._id}`}><DialogsItem key={dialog._id} text = {dialog.lastMessage.text} partner = {dialog.author._id == props.me ? dialog.partner : dialog.author}/></NavLink>)}
                    </div>
                </div>
                <div className={styles.dialog}>
                    <div className={styles.dialogHeader}>
                        <div className={styles.dialogHeaderCenter}>
                            <b className={styles.headerFullname}>{props.currentDialogName}</b>
                            <div className={styles.headerStatus}>
                               {props.currentDialogName && <span className={styles.statusCircle}></span>}
                               {props.currentDialogName && <div className={styles.status + styles.statusOnline}>онлайн</div>}
                            </div>
                        </div>
                        <EllipsisOutlined style = {{fontSize: "22px"}}/>
                    </div>
                    <div className = {styles.dialogMessages} ref = {messageRef}>
                        {props.messages.length ? props.messages.map((message) => message.user == window.localStorage.getItem('me') ? <MyMessage key={message._id} text={message.text} id = {message._id} /> : <NoMyMessage text={message.text} key={message._id} />) 
                        : 'nothing'}
                        {/* <NoMyMessage />
                        <MyMessage /> */}
                        {/* messages is here */}

                    </div>
                    <div className = {styles.dialogInput}>
                        <ChatInput messageRef = {messageRef} dialog={props.dialog} />
                        {/* ctrl + c + ctrl + v from universalChat chat input*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;