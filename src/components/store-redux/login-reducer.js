import axios from "axios";

const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_MY_DATA = 'SET_MY_DATA';
const SET_REG_DATA = 'SET_REG_DATA';

let initialState = {
    isAuth: false,
    me: [],
    regData: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_IS_AUTH:{
            return{
                ...state,
                isAuth: true
            }
        }
        case SET_MY_DATA:{
            return{
                ...state,
                me: action.data
            }
        }
        case SET_REG_DATA:{
            return {
                ...state,
                regData: action.regData
            }
        }
        default:{
            return {...state}
        }
    }
}

const setIsAuthAC = () => ({type: SET_IS_AUTH})
const getMeAC = (data) => ({type: SET_MY_DATA, data})
const setRegDataAC = (regData) => ({type: SET_REG_DATA, regData})

export const setAuth = () => dispatch => {
    dispatch(setIsAuthAC());
}

export const getMe = (token) => (dispatch) => {
    axios.get('http://localhost:8000/user/me', {headers:{token: token}}).then(({data}) => {
        dispatch(getMeAC(data));
        window.localStorage.setItem('me', data._id);
    })
}

export const registration = (email, fullName, password) => dispatch => {
    let user = {
        email,
        fullName,
        password
    }
    axios.post(`http://localhost:8000/user/registration`, user).then(({data}) => {
        dispatch(setRegDataAC(data))
    })
}