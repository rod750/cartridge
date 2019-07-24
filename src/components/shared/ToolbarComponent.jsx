import React from 'react';
import { Navbar, NavbarMenu, Icon, NavbarEnd, NavbarItem, Field, Control, Button, NavbarStart } from 'bloomer';

export class ToolbarComponent extends React.Component {
    render() {
        return (
            <Navbar isTransparent={true}>
                <NavbarMenu>
                    <NavbarEnd>
                        <NavbarItem className="is-paddingless">
                            <Field isGrouped={true}>
                                <Control>
                                    <Button isColor="danger" onClick={this.props.onAddNew}><Icon className='mdi mdi-plus'/> <span>Add new</span></Button>
                                </Control>
                            </Field>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        );
    }
}
