import React from 'react';
import {connect} from 'react-redux';


class UserHeader extends React.Component{

    render(){
        const user = this.props.user;
        if(!user) return null;
        return (
        <p>By: {user.name}</p>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.filter(({id})=> id === ownProps.userId)[0]}
}

export default connect(mapStateToProps)(UserHeader);