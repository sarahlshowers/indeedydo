import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import PrimaryButton from './PrimaryButton';
import { shallow } from 'enzyme';

let container = null;

beforeEach(() => {
  container = document.createElement('button');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders the primary call to action button', () => {
  render(<PrimaryButton />);

  const buttonEl = screen.getByRole('button', { name: /Primary/i });
  expect(buttonEl).toBeInTheDocument();
});

test('click event fires `handleClick` function', () => {
  const mockCallBack = jest.fn();

  const button = shallow(
    <PrimaryButton onClick={mockCallBack}>Ok!</PrimaryButton>
  );
  button.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
