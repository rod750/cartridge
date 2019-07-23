import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { GamesComponent } from './components/games/GamesComponent';
import { Section } from 'bloomer';
import { MenuComponent } from './components/shared/MenuComponent';
import { PlatformsComponent } from './components/platforms/PlatformsComponent';


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
                </Section>
            </Router>
        </div>
    );
}

export default App;
