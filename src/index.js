import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import '@mdi/font/css/materialdesignicons.css';
import 'bulma-modal-fx/dist/css/modal-fx.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { configStore } from './store/configStore';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache
});

const initialState = {
    games: []
};

const store = configStore(initialState);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
