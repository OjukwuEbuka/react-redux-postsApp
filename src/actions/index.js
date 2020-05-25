import jsonData from '../api';

import { FETCH_POSTS } from './types';

export const postsFetch = () => async dispatch => {
    const res = await jsonData.get('/posts');
    dispatch({
        type: FETCH_POSTS,
        payload: res.data
    })
}