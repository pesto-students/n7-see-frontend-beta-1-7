import {types} from './types';


export function fetchData(){
    return{
        type:types.SEND_REQUEST,
    }
}

export const fetchDataSuccess=(user)=>{
    return{ 
        type:types.SEND_REQUEST_SUCCESS,
        payload:user
    }
}

export const fetchDataFailure=(error)=>{
    return{
        type:types.SEND_REQUEST_FAILURE,
        payload:{},
        error:error
    }
}

export function fetchHomeData(){
    return{
        type:types.SEND_HOMEPAGE_REQUEST,
    }
}

export const fetchHomeDataSuccess=(data)=>{
    return{ 
        type:types.SEND_HOMEPAGE_REQUEST_SUCCESS,
        payload:data
    }
}

export const fetchHomeDataFailure=(error)=>{
    return{
        type:types.SEND_HOMEPAGE_REQUEST_FAILURE,
        payload:{},
        error:error
    }
}