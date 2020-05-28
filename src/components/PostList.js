import React, {Component} from 'react';
import { connect } from 'react-redux';

import {postsFetch, postsAndUserFetch} from '../actions';
import Post from './Post';



class PostList extends Component {
    componentDidMount(){
        this.props.postsAndUserFetch();
    }
    render(){
        return <ul>
            {this.props.posts.map(post => <Post key={post.id} post={post} />)}
        </ul>
    }
}

const mapStateToProps = state => {
    return {posts: state.posts.posts, userId: state.posts.userIds}
}

export default connect(mapStateToProps, {postsAndUserFetch})(PostList);