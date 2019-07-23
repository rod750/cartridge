import React from 'react';
import ReactDOM from 'react-dom';
import { tagMock } from '../../mocks/tagMock';
import { TagComponent } from './TagComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TagComponent tag={tagMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
