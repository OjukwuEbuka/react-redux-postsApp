import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import PostList from './PostList';
// const Dashboard = () => <h2>Dashboardd</h2>;
// const SurveyNew = () => <h2>SurveyNew</h2>;
// const Landing = () => <h2>Landing</h2>;

class App extends Component {

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div className="container">
                        <PostList />
                        {/* <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} /> */}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);