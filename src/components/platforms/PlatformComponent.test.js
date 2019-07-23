import React from 'react';
import ReactDOM from 'react-dom';
import { PlatformComponent } from './PlatformComponent';
import { platformMock } from '../../mocks/platformMock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlatformComponent platform={platformMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
