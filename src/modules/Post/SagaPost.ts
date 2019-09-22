import { takeLatest, call, put } from "@redux-saga/core/effects";
import axios, { AxiosResponse } from 'axios';
import { POST_LIST_FETCH, postListSuccess, postListLoading } from "./ActionPost";
import { SagaIterator } from "redux-saga";
import { PostListResponse } from "./TypesPost";

function* workerGetPost(): SagaIterator {
    yield put(postListLoading(true))
    try {
        const response: AxiosResponse<PostListResponse> = yield call(axios.get, 'https://dummyapi.io/api/post')
        const { data: { data } } = response;
        yield put(postListSuccess(data))
        yield put(postListLoading(false))
    } catch (error) {
        yield put(postListLoading(false))
    }


}

export default [takeLatest(POST_LIST_FETCH, workerGetPost)] 