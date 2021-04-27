import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import SecondaryButton from './SecondaryButton';

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

test('renders the secondary call to action button', () => {
  render(<SecondaryButton />);

  const buttonEl = screen.getByRole('button', { name: /Secondary/i });
  expect(buttonEl).toBeInTheDocument();
});
