import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';

const authReducer =  (state, action) =>{
    switch (action.type) {
        case 'add_err':
            return {...state, errMssg: action.payload}
        case 'signup':
            return {errMssg:'', token: action.payload}
        case 'signin':
            return {errMssg:'', token: action.payload}
        case 'clear_err_mssg':
            return {...state, errMssg:''}
        case 'signout':
            return{token:null, errMssg: ''}
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token'); 
    console.log('token',  token)
    if(token){
        dispatch({type:'signin', payload: token})
        navigate('TrackList')
    } else{
        navigate('Signup')
    }
}

const clearErrMssg = dispatch => () =>{
    dispatch ({type: 'clear_err_mssg'})
}


const signup = (dispatch) => {
    // make api request to signup with email and password
    // when signup mdife the state and say that we are authenticated
    // if sign up failed, show err message

    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signup', {email,password}, );
            console.log(response.data.token)
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type:'signin', payload:response.data.token});
            navigate('TrackList');
        }catch(err){
            dispatch({type: 'add_err', payload: "Something went wrong with sign up"})
            console.log(err)
        }
    }
}
const signin = (dispatch) => {
    // try to sign in
    // handdle success and update state
    // handdle failure, show err mssg

    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signin', {email,password}, );
            console.log(response.data)
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type:'signin', payload:response.data.token});
            navigate('TrackList');
        }catch(err){
            dispatch({type: 'add_err', payload: "Something went wrong with sign up"})
            console.log(err)
        }
    }
}
const signout = (dispatch) => async () => {
    //somehow sign out!!!
    await AsyncStorage.removeItem('token');
    dispatch({ type:'signout',});
    navigate('loginFlow');
}


export const {Provider, Context } = createDataContext(
    authReducer,
    {signup,signin,signout, clearErrMssg, tryLocalSignin},
    { token: null, errMssg:'' }
)