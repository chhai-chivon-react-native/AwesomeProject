/**
 * Created by chhaichivon on 8/27/17.
 */

import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './../commons/constants';

const initialState = {
    status : "",
    data : [],
    message :"'"
}

export default function fetchUser(state = initialState , action) {
    switch (action.type){
        case FETCH_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}