import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Navbar, NavbarMenu, NavbarItem, NavbarStart, Icon, NavbarBrand, Section } from 'bloomer';
import { GamesComponent } from 'components';
import "bulma/bulma.sass";
import "@mdi/font/scss/materialdesignicons.scss"

const App: React.FC = () => {
  return (
    <Router>
        <Navbar className="is-danger is-fixed-up">
            <NavbarBrand>
                <NavbarItem>
                    <Icon className="mdi mdi-gamepad-round-right" /> Cartridge
                </NavbarItem>
            </NavbarBrand>
            <NavbarMenu>
                <NavbarStart>
                    <NavbarItem href="#/games"><Icon className="mdi mdi-google-controller"></Icon> Games</NavbarItem>
                    <NavbarItem href="#/platforms"><Icon className="mdi mdi-developer-board"></Icon> Platforms</NavbarItem>
                    <NavbarItem href="#/developers"><Icon className="mdi mdi-ghost"></Icon> Developers</NavbarItem>
                    <NavbarItem href="#/tags"><Icon className="mdi mdi-tag"></Icon> Tags</NavbarItem>
                </NavbarStart>
            </NavbarMenu>
        </Navbar>
        <Section>
            <Route exact path="/">
                <Redirect to="/games" />
            </Route>
            <Route path="/games" component={GamesComponent} />
        </Section>
    </Router>
  );
}

export default App;
