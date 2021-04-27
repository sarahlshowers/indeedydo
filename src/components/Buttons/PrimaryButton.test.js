import { render, screen } from '@testing-library/react';
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

test('renders the primary call to action button', () => {
  render(<PrimaryButton />);

  const buttonEl = screen.getByRole('button', { name: /Primary/i });
  expect(buttonEl).toBeInTheDocument();
});
