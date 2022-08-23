import React from "react";

const initState = {
    loading: false,
    Auth_data: [],
    error: ''
}

export default function Auth_reducer(state=initState, action) {
    console.log(state,action.type,action.payload);
    switch (action.type) {
        case 'LOADING_DATA':
            return {
                ...state,
                loading: true,
                error: ''
            }

        case 'ERROR_DATA':
            return {
                ...state,
                loading: false,
                Auth_data: [],
                error: action.payload
            }

        case 'GET_AUTH_DATA' : 
            return {
                ...state,
                loading: false,
                Auth_data : action.payload,
                error : ''
            }   
            
        case 'ADD_AUTH_DATA' : 
            return {
                ...state,
                loading :false,
                Auth_data : state.Auth_data.concat(action.payload),
                error : ''
            }    

        default:
            return state;
    }
}
