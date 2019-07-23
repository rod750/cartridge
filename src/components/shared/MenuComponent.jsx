import React from 'react';
import { Navbar, NavbarMenu, NavbarStart, NavbarItem, Icon } from 'bloomer';

export class MenuComponent extends React.Component {
    render() {
        return (
            <Navbar className='is-danger is-fixed-top'>
                <NavbarMenu>
                    <NavbarStart>
                        <NavbarItem><Icon className='mdi mdi-gamepad-variant'/> <span>Games</span></NavbarItem>
                        <NavbarItem><Icon className='mdi mdi-disc-player'/> <span>Platforms</span></NavbarItem>
                        <NavbarItem><Icon className='mdi mdi-code-array'/> <span>Developers</span></NavbarItem>
                        <NavbarItem><Icon className='mdi mdi-tag'/> <span>Tags</span></NavbarItem>
                    </NavbarStart>
                </NavbarMenu>
            </Navbar>
        );
    }
}
