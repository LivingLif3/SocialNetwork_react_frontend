import './App.css';
import React from 'react';
import {Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Login/Registration';
import { connect } from 'react-redux';
import Main from './components/Main/Main';
import PostInfo from './components/PostInfo/PostInfo';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import Comment from './components/Comment/Comment';

const App = (props) => {
  return(
    <Switch>
      <Route exact path = "/" component = { () => <Login/>} />
      <Route exact path = "/registration" component = { () => <Registration/>} />
      <Route exact path = "/main/posts" component = { () => <Main/>} />
      <Route exact path = "/main/postInfo/:id" component = { () => <PostInfo/>} />
      <Route exact path = "/main/dialogs" component = { () => <DialogsContainer/>} />
      <Route exact path = "/main/dialogs/:id" component = { () => <DialogsContainer/>} />
      <Route exact path = "/main/profile/:id" component={ () => <Profile />} />
      <Route exact path = "/commentTest" component={ () => <Comment />} />
      {/* {<Route exact path = "/main/messages" component = { () => <Main/>} />} */}
    </Switch>
  );
}

let mapStateToProps = (state) => ({
  auth: state.login.isAuth
})

export default connect(mapStateToProps, {} )(App);
