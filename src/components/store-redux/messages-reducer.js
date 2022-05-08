import axios from "axios";

const SET_MESSAGES = 'SET_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';

const TOKEN = {headers:{token: window.localStorage.getItem('token')}}

let initialState = {
    messages: [],
    message: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case SEND_MESSAGE:
            return {
                ...state,
                message: action.meessage
            }
        default: 
            return {
                ...state
            }
    }
}

const setMessagesAC = (messages) => ({type: SET_MESSAGES, messages});
const setMessageAC = (message) => ({type: SEND_MESSAGE, message});

export const setMessages = (dialogId) => (dispatch) => {
    axios.get(`http://localhost:8000/message/${dialogId}`).then(({data}) => {
        if (data.meessage) return;
        dispatch(setMessagesAC(data));
    })
}

export const sendMessage = (message) => (dispatch) => {
    axios.post(`http://localhost:8000/message`, message, TOKEN).then(({data}) => {
        dispatch(setMessageAC(data))
    })
}

export const deleteMessage = (messageId) => dispatch => {
    axios.delete(`http://localhost:8000/message/${messageId}`, TOKEN).then(({data}) => {
        dispatch(setMessageAC(data));
    })
}