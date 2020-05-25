import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component{


    render(){
        return(
            <li className="collection-item avatar">
                <i className="material-icons circle">person</i>
                <h4>{ this.props.post.title}</h4>
                <p>{ this.props.post.body}</p>
            </li>
        )
    }
}

export default Post;