import { call, takeEvery,put } from "@redux-saga/core/effects";
import {types} from '../types';
import axios from 'axios';
import { fetchDataSuccess,fetchHomeDataSuccess,fetchHomeDataFailure } from "../actions";

function* ayscFetchRequest(action){
    try{
     
        const url= "https://jsonplaceholder.typicode.com/users"
        // const url= `https://regres.in/api/users/${action.payload}`
        const response = yield call(()=>axios.get(url))
        console.log(response)
        yield put(fetchDataSuccess(response.data))
    }
    catch(error){
        console.log(error); 
    }
}

function* asyncFetchHomeRequest(action){
    try{
     
        const url= "https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43"
        // const url= `https://regres.in/api/users/${action.payload}`
        const response = yield call(()=>axios.get(url))
        console.log(response)
        yield put(fetchHomeDataSuccess(response.data))
    }
    catch(error){
        console.log(error); 
    }
}

export function* watchFetchDataSaga(){

    yield takeEvery(types.SEND_REQUEST,ayscFetchRequest)
    yield takeEvery(types.SEND_HOMEPAGE_REQUEST,asyncFetchHomeRequest)

}