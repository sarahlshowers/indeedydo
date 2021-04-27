import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import NavBar from './NavBar';

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

test('Nav has a lockup with current user profile info', () => {
  render(<NavBar />);

  const avatar = screen.getByRole('img');
  expect(avatar).toBeInTheDocument();

  const userName = screen.getByText('User Name');
  expect(userName).toBeInTheDocument();

  const userRole = screen.getByText('Job Title');
  expect(userRole).toBeInTheDocument();
});
