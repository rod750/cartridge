import React from 'react';
import ReactDOM from 'react-dom';
import { developerMock } from '../../mocks/developerMock';
import { DeveloperComponent } from './DeveloperComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeveloperComponent developer={developerMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
