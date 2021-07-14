import { put } from "@redux-saga/core/effects";
import axios from "axios";

import * as actions from '../actions/index';

export function* httpRequestSaga(action) {
    yield put(actions.httpRequestStart())

    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: { name: action.country },
        headers: {
            'x-rapidapi-key': '628edbaf5bmsh1952ed8f0ec5c19p1ebdc4jsndf83f39173e5',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    try{
        const response = yield axios.request(options)

        console.log(response.data);

        if (response.data.length === 0) {
            alert(`please enter a valid country`)
            yield put(actions.loadingFalse())
        } else {
            yield put(actions.httpRequestSuccess(response.data))
        }
    } catch (error) {
        console.error(error);
        alert(error.message)
    }

}