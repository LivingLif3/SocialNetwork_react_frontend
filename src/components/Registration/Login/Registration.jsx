import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory  } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styles from './Registration.module.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { registration } from '../../store-redux/login-reducer'

const Registration = (props) => {

    let history = useHistory();
    
    const onSubmit = (formData) => {
        props.registration(formData.email, formData.fullname, formData.password);
        history.push("/");
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.pos}><h2 className={styles.Registration}>Registration</h2></div>
                <div className={styles.pos}><RegistrationReduxForm onSubmit={onSubmit} /></div>
                <div className={styles.pos}><p className={styles.description}>Haven't account? <NavLink to='/'>Log in</NavLink></p></div>
            </div>
        </div>
    )
}

const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" className={styles.input} name='email'
                 type='text' placeholder="Enter a email..." />
            </div>
            <div>
                <Field component="input" className={styles.input} name='fullname' type='text'
                 placeholder="Enter a fullname..." />
            </div>
            <div>
                <Field component="input" className={styles.input} name='password' type='password'
                 placeholder="Enter a password..." />
            </div>
            <button className={styles.button}>Register</button>
        </form>
    )
}

const RegistrationReduxForm = reduxForm({ form: 'registration' })(RegistrationForm)

let mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, { registration })(Registration);
