import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MockedProvider } from 'react-apollo/test-utils';
import { getGamesQueryMock } from './mocks/getGamesQueryMock';
import { getPlatformsQueryMock } from './mocks/getPlatformsQueryMock';

const mocks = [
    getGamesQueryMock,
    getPlatformsQueryMock
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false}><App /></MockedProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
