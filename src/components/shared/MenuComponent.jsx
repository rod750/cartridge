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
                        <NavbarItem><Icon className='mdi mdi-code-array'/> <span>Developers</span></NavbarItem>
                        <NavbarItem><Icon className='mdi mdi-tag'/> <span>Tags</span></NavbarItem>
                    </NavbarStart>
                </NavbarMenu>
            </Navbar>
        );
    }
}
