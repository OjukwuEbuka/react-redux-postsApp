import React, {Component} from 'react';
import { connect } from 'react-redux';

import {postsFetch} from '../actions';
import Post from './Post';



class PostList extends Component {
    componentDidMount(){
        this.props.postsFetch();
    }
    render(){        
        return <ul>
            {this.props.posts.map(post => <Post key={post.id} post={post} />)}
        </ul>
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {postsFetch})(PostList);