import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styles from './Login.module.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import { setAuth, getMe } from '../store-redux/login-reducer'

const Login = (props) => {

    const [auth, setAuth] = useState(false)
    
    const onSubmit = (formData) => {
        let postData = {
            email: formData.email,
            password: formData.password
        }
        axios.post('http://localhost:8000/user/login', postData).then(({data}) => {
            window.localStorage.setItem('token', data.token);
            props.getMe(data.token);
            setAuth(true);
        })
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {window.localStorage.getItem('token') && <Redirect to = '/main/posts' />}
                <div className={styles.pos}><h2 className={styles.login}>Login</h2></div>
                <div className={styles.pos}><LoginReduxForm onSubmit={onSubmit} /></div>
                <div className={styles.pos}><p className={styles.description}>Haven't account? <NavLink to='/registration'>Register</NavLink></p></div>
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" className={styles.input} name='email'
                 type='text' placeholder="Enter a email..." />
            </div>
            <div>
                <Field component="input" className={styles.input} name='password' type='password'
                 placeholder="Enter a password..." />
            </div>
            <button className={styles.button}>Sign in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let mapStateToProps = (state) => ({
    auth: state.login.isAuth
})

export default connect(mapStateToProps, { setAuth, getMe })(Login);
