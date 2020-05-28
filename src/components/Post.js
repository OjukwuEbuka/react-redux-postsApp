import React, { Component } from 'react';

import UserHeader from './UserHeader';

class Post extends Component{


    render(){
        return(
            <li className="collection-item avatar">
                <i className="material-icons circle">person</i>
                <h4>{ this.props.post.title}</h4>
                <p>{ this.props.post.body}</p>
                <UserHeader userId={this.props.post.userId} />
            </li>
        )
    }
}


export default Post;