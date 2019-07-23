import React from 'react';
import ReactDOM from 'react-dom';
import { PlatformsComponent } from './PlatformsComponent';
import { getPlatformsQueryMock } from '../../mocks/getPlatformsQueryMock';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer'
import { getPlatformsEmptyQueryMock } from '../../mocks/getPlatformsEmptyQueryMock';
import { getPlatformsErrorQueryMock } from '../../mocks/getPlatformsErrorQueryMock';
const wait = require('waait');

const mocks = [
    getPlatformsQueryMock
];

const emptyMocks = [
    getPlatformsEmptyQueryMock
];

const errorMocks = [
    getPlatformsErrorQueryMock
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false}><PlatformsComponent /></MockedProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows empty message', async () => {
    const element = renderer
        .create(<MockedProvider mocks={emptyMocks} addTypename={false}><PlatformsComponent /></MockedProvider>);
    await wait(1);
    expect(element.toJSON()).toMatchSnapshot();
});

it('shows error message', async () => {
    const element = renderer
        .create(<MockedProvider mocks={errorMocks} addTypename={false}><PlatformsComponent /></MockedProvider>);

    await wait(1);
    expect(element.toJSON()).toMatchSnapshot();
});
