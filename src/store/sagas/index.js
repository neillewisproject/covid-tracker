import {takeEvery, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
    httpRequestSaga
} from './httpRequest';

export function* watchHttpRequest() {
    yield all([
        takeEvery(actionTypes.HTTP_REQUEST_INITIAL, httpRequestSaga)
    ])
}