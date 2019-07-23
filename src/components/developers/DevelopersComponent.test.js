import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer'
import { DevelopersComponent } from './DevelopersComponent';
import { getDevelopersQueryMock } from '../../mocks/getDevelopersQueryMock';

const mocks = [
    getDevelopersQueryMock
];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false}><DevelopersComponent /></MockedProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
