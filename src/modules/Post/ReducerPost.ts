import { POST_LIST_LOADING, POST_LIST_SUCCESS } from "./ActionPost";
import { Post } from './TypesPost';
import { AnyAction } from "redux";

export interface PostState {
    isLoading: boolean;
    data: Post[];
}

const initialState: PostState = {
    isLoading: false,
    data: [],
}

export default (state: PostState = initialState, action: AnyAction): PostState => {

    switch (action.type) {
        case POST_LIST_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            } as PostState;
        case POST_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
            } as PostState;
        default:
            return state;
    }
}