/**
 * Created by chhaichivon on 8/27/17.
 */

import {  FETCH_DATA ,FETCH_DATA_SUCCESS , FETCH_DATA_FAILURE } from  './../commons/constants';

export function getData() {
    return {
        type: FETCH_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCH_DATA_FAILURE
    }
}

export function fetchData() {}