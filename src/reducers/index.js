import { combineReducers } from 'redux';

import {FETCH_POSTS, FETCH_USER} from '../actions/types';

const postsReducer = (state={posts: [], userIds:[]}, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            const userIds = [...action.payload].reduce((acc, val) => {
                if (acc.length == 0){
                    return [...acc, val.userId]
                } else if (!acc.includes(val.userId)){
                    return [...acc, val.userId];
                } else {
                    return acc;
                }
            }, [])
            // const userIds = [...action.payload].map(({userId})=>userId)
            return {posts: [...action.payload], userIds };
        default:
            return state;
    }
}

const userReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    posts: postsReducer,
    users: userReducer,
});