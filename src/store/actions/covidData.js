import * as actionTypes from './actionTypes';
import {
    HTTP_REQUEST_START,
    HTTP_REQUEST_SUCCESS,
    LOADING_FALSE
} from '../reducers/covidData';

export const httpRequestInitial = (country) => {
    return {
        type: actionTypes.HTTP_REQUEST_INITIAL,
        country: country
    }
}

export const httpRequestStart = () => {
    return HTTP_REQUEST_START()
}

export const httpRequestSuccess = (httpResponseData) => {
    return HTTP_REQUEST_SUCCESS({
        confirmed: httpResponseData[0].confirmed,
        recovered: httpResponseData[0].recovered,
        critical: httpResponseData[0].critical,
        deaths: httpResponseData[0].deaths,
    })
}

export const loadingFalse = () => {
    return LOADING_FALSE()
}