import React, {Component} from 'react';

export default class Header extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">
                        POSTS APP
                    </a>
                    <ul className="right">
                        <li>
                            <a href="#">
                                Login with Google
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}