import React from 'react';
import ReactDOM from 'react-dom';
import { RatingComponent } from './RatingComponent';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatingComponent rating={3} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it should raise error when rating is more than 5', () => {
    expect(() => {
        renderer.create(<RatingComponent rating={6} />);
    }).toThrow(Error);
});

it('it should raise error when rating is less than 0', () => {
    expect(() => {
        renderer.create(<RatingComponent rating={-1} />);
    }).toThrow(Error);
});

it('it render stars correctly', () => {
    const element = renderer.create(<RatingComponent rating={4} />).toJSON();

    expect(element).toMatchSnapshot();
});

it('it render stars correctly', () => {
    const element = renderer.create(<RatingComponent rating={0} />).toJSON();

    expect(element).toMatchSnapshot();
});

it('it render stars correctly', () => {
    const element = renderer.create(<RatingComponent rating={5} />).toJSON();

    expect(element).toMatchSnapshot();
});
