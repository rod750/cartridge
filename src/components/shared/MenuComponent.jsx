import React from 'react';
import { Navbar, NavbarMenu, NavbarStart, NavbarItem, Icon } from 'bloomer';
import { Link } from 'react-router-dom';

export class MenuComponent extends React.Component {
    render() {
        return (
            <Navbar className='is-danger is-fixed-top'>
                <NavbarMenu>
                    <NavbarStart>
                        <Link className="navbar-item" to="/games"><Icon className='mdi mdi-gamepad-variant'/> <span>Games</span></Link>
                        <Link className="navbar-item" to="/platforms"><Icon className='mdi mdi-disc-player'/> <span>Platforms</span></Link>
                        <Link className="navbar-item" to="/developers"><Icon className='mdi mdi-code-array'/> <span>Developers</span></Link>
                        <Link className="navbar-item" to="/tags"><Icon className='mdi mdi-tag'/> <span>Tags</span></Link>
                    </NavbarStart>
                </NavbarMenu>
            </Navbar>
        );
    }
}
