import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducers.js';
import { userDeleteReducer, userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateReducer } from './reducers/userReducer.js';

const initialState = {
    //store the userInfo in the local storage, when refresh the page, the userInfo still exist
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null
    },
};

const reducer = combineReducers({
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;