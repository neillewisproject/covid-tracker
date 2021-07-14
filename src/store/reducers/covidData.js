import { createSlice } from "@reduxjs/toolkit";

const httpRequestStart = (state, action) => {
    return (
        state.loading = true
    )
}

const httpRequestSuccess = (state, action) => {
    return (
        state.loading = false,
        state.confirmed = action.payload.confirmed,
        state.recovered = action.payload.recovered,
        state.critical = action.payload.critical,
        state.deaths = action.payload.deaths,
        state.httpRequestStatus = true
    )
}

const loadingFalse = (state, action) => {
    return state.loading = false
}

const covidDataSlice = createSlice({
    name: 'covidData',
    initialState: {
        confirmed: '',
        recovered: '',
        critical: '',
        deaths: '',
        loading: false,
        httpRequestStatus: false
    },
    reducers: {
        HTTP_REQUEST_START: (state, action) => {
            httpRequestStart(state, action)
        },
        HTTP_REQUEST_SUCCESS: (state, action) => {
            httpRequestSuccess(state,action)
        },
        LOADING_FALSE: (state, action) => {
            loadingFalse(state, action)
        }
    }
})

export default covidDataSlice.reducer;

export const {
    HTTP_REQUEST_START,
    HTTP_REQUEST_SUCCESS,
    LOADING_FALSE
} = covidDataSlice.actions