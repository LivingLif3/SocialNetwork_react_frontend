import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import loginReducer from "./login-reducer";
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
    form: formReducer,
    login: loginReducer,
    posts: postReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;