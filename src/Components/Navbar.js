import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false,
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <h3>Barer I Oslo</h3>
                        </Link>
                        <div
                            className='nav-btn'
                            type='button'
                            onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon'></FaAlignRight>
                        </div>
                    </div>
                    <ul
                        className={
                            this.state.isOpen
                                ? 'nav-links show-nav'
                                : 'nav-links'
                        }>
                        <li>
                            <Link to='/'>Hjem</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Barer</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
