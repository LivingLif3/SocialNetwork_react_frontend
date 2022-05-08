import React, { useState } from "react";
import { HomeOutlined, CommentOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {

    const [click, setClick] = useState(true);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.block}>
                <div className={styles.home} onClick={() => setClick(true)} >
                    {click ? <NavLink style = {{color: '#65676b'}} to = {'/main/posts'}><HomeOutlined style={{ fontSize: '28px', color: "#dc335a" }} /></NavLink>
                        : <NavLink style = {{color: '#65676b'}} to = {'/main/posts'}><HomeOutlined style={{ fontSize: '28px' }} /></NavLink>}
                </div>
                <div className={styles.messages} onClick={() => setClick(false)}>
                    {!click ? <NavLink style = {{color: '#65676b'}} to = {'/main/dialogs'}><CommentOutlined style={{ fontSize: '28px', color: "#dc335a" }}/></NavLink>
                    : <NavLink style = {{color: '#65676b'}} to = {'/main/dialogs'}><CommentOutlined style={{ fontSize: '28px' }}/></NavLink>}
                </div>
                <div className={styles.profile}><NavLink to = {`/main/profile/${window.localStorage.getItem('me')}`}><UserOutlined style={{ fontSize: '28px', color: '#65676b'}} /></NavLink></div>
            </div>
            <div className={styles.options}>OPTIONS</div>
        </div>
    )
}

export default Header;