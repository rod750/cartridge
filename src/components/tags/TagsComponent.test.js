import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer'
import { getTagsQueryMock } from '../../mocks/getTagsQueryMock';
import { TagsComponent } from './TagsComponent';

const mocks = [
    getTagsQueryMock
];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false}><TagsComponent /></MockedProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
