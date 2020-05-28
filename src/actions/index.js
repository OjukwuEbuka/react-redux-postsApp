import jsonData from '../api';

import { FETCH_POSTS, FETCH_USER } from './types';

export const postsFetch = () => async (dispatch, getState) => {
    const res = await jsonData.get('/posts');
    dispatch({
        type: FETCH_POSTS,
        payload: res.data
    })
}

export const postsAndUserFetch = () => async (dispatch, getState) => {
   
    await dispatch(postsFetch())
    // console.log(getState().posts.userIds)
    getState().posts.userIds.forEach(id => dispatch(userFetch(id)))
}

export const userFetch = (id) => async dispatch => {
        const res = await jsonData.get(`/users/${id}`);
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
}