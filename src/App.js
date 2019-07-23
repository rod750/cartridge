import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { GamesComponent } from './components/games/GamesComponent';
import { Section } from 'bloomer';
import { MenuComponent } from './components/shared/MenuComponent';
import { PlatformsComponent } from './components/platforms/PlatformsComponent';
import { DevelopersComponent } from './components/developers/DevelopersComponent';


function App() {
    return (
        <div className="app">
            <Router>
                <MenuComponent />
                <Section>
                    <Route path="/" exact>
                        <Redirect to="/games" />
                    </Route>
                    <Route path="/games" component={GamesComponent} />
                    <Route path="/platforms" component={PlatformsComponent} />
                    <Route path="/developers" component={DevelopersComponent} />
                </Section>
            </Router>
        </div>
    );
}

export default App;
