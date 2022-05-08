import axios from "axios";

const SET_DIALOGS = 'SET_DIALOGS';
const CREATE_DIALOG = 'CREATE_DIALOG';

const TOKEN = {headers:{token: window.localStorage.getItem('token')}}

let initialState = {
    dialogs: [],
    dialog: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }
        case CREATE_DIALOG:
            return {
                ...state,
                dialog: action.dialog
            }
        default:
            return {...state}
    }
}

const setDialogsAC = (dialogs) => ({ type: SET_DIALOGS, dialogs });
const createDialogsAC = (dialog) => ({ type: CREATE_DIALOG, dialog });

export const setDialogs = () => (dispatch) => {
    axios.get('http://localhost:8000/dialogs', TOKEN).then(({data}) => {
        dispatch(setDialogsAC(data));
    })
}

export const createDialog = (value, text) => dispatch => {
    let user = {
        value
    }
    axios.post('http://localhost:8000/user/find', user, TOKEN).then(({data}) => {
        let dialogData = {
            partner: data[0]._id,
            text
        }
        axios.post('http://localhost:8000/dialogs', dialogData, TOKEN).then(({data}) => {
            dispatch(createDialogsAC(data))
        })
    })
}