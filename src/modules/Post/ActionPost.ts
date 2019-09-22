import { AnyAction } from "redux";
import { Post } from "./TypesPost";

export const GET_POST_LIST_FETCH = 'GET_POST_LIST_FETCH';
export const POST_LIST_FETCH = 'POST_LIST_FETCH';
export const POST_LIST_LOADING = 'POST_LIST_LOADING';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';

export const postListFetch = (): AnyAction => ({
    type: POST_LIST_FETCH,
})
export const postListSuccess = (data: Post[]): AnyAction => ({
    type: POST_LIST_SUCCESS,
    payload: {
        data,
    },
})
export const postListLoading = (loading: boolean): AnyAction => ({
    type: POST_LIST_LOADING,
    payload: {
        isLoading: loading,
    },
})