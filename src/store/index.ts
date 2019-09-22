import { createStore, applyMiddleware, combineReducers, Action, Reducer } from 'redux'
import createSagaMiddleware, { SagaIterator } from 'redux-saga'
import reducerPost, { PostState } from '../modules/Post/ReducerPost'
import { connectRouter, RouterState } from 'connected-react-router'
import { createBrowserHistory, History } from "history"
import { composeWithDevTools } from 'redux-devtools-extension';
import SagaPost from '../modules/Post/SagaPost'
import { all } from '@redux-saga/core/effects'


function* rootSaga(): SagaIterator{
    yield all([
        ...SagaPost,
      ])
}

export interface AppState {
    post: PostState;
    router: RouterState;
}

export const history = createBrowserHistory()
const rootReducer = (history: History): Reducer<AppState, Action> => combineReducers<AppState>({
    router: connectRouter(history),
    post: reducerPost,
})

export type AppReducers = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
    
sagaMiddleware.run(rootSaga)

