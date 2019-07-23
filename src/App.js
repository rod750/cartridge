import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { GamesComponent } from './components/games/GamesComponent';
import { Section } from 'bloomer';
import { MenuComponent } from './components/shared/MenuComponent';
import { PlatformsComponent } from './components/platforms/PlatformsComponent';
import { DevelopersComponent } from './components/developers/DevelopersComponent';
import { TagsComponent } from './components/tags/TagsComponent';
import { GameDetailComponent } from './components/games/GameDetailComponent';


function App() {
    return (
        <div className="app">
            <Router>
                <MenuComponent />
                <Section>
                    <Route path="/" exact>
                        <Redirect to="/games" />
                    </Route>
                    <Route path="/games" exact component={GamesComponent} />
                    <Route path="/games/:id" component={GameDetailComponent} />
                    <Route path="/platforms" component={PlatformsComponent} />
                    <Route path="/developers" component={DevelopersComponent} />
                    <Route path="/tags" component={TagsComponent} />
                </Section>
            </Router>
        </div>
    );
}

export default App;
