import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import PrimaryButton from './PrimaryButton';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const defaultProps = {
  handleClick: jest.fn(),
  text: 'Submit',
};

test('renders the primary call to action button', () => {
  render(<PrimaryButton />);

  const buttonEl = screen.getByTestId('primaryButton');
  expect(buttonEl).toBeInTheDocument();
});

test('button renders with correct text', () => {
  render(<PrimaryButton {...defaultProps} />);

  const userRole = screen.getByText('Submit');
  expect(userRole).toBeInTheDocument();

  const buttonEl = screen.getByTestId('primaryButton');
  expect(buttonEl).toHaveTextContent('Submit');
});

test('button call handleClick function onClick', () => {
  render(<PrimaryButton {...defaultProps} />);

  fireEvent.click(screen.getByTestId);
  expect(defaultProps.handleClick).toHaveBeenCalledTimes(1);
});
