import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { GamesComponent } from './components/games/GamesComponent';
import { Section } from 'bloomer';
import { MenuComponent } from './components/shared/MenuComponent';


function App() {
    return (
        <div class="app">
            <MenuComponent />
            <Section>
                <Router>
                    <Route path="/" exact>
                        <Redirect to="/games" />
                    </Route>
                    <Route path="/games" component={GamesComponent} />
                </Router>
            </Section>
        </div>
    );
}

export default App;
