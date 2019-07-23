import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import { getGamesQueryMock } from '../../mocks/getGamesQueryMock';
import { GameDetailComponent } from './GameDetailComponent';
import wait from 'waait';

const mocks = [
    getGamesQueryMock
];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false}><GameDetailComponent /></MockedProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
