import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import LockUp from './LockUp';

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

test("renders the user's profile information", () => {
  render(<LockUp />);

  const avatar = screen.getByRole('img');
  expect(avatar).toBeInTheDocument();

  const userName = screen.getByText('User Name');
  expect(userName).toBeInTheDocument();

  const userRole = screen.getByText('Job Title');
  expect(userRole).toBeInTheDocument();
});
