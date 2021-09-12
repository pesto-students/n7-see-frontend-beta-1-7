import { call, takeEvery,put } from "@redux-saga/core/effects";
import {types} from '../types';
import axios from 'axios';
import { fetchDataSuccess } from "../actions";

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
export function* watchFetchDataSaga(){

    yield takeEvery(types.SEND_REQUEST,ayscFetchRequest)

}