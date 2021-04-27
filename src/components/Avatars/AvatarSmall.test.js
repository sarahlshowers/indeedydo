import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import AvatarSmall from './AvatarSmall';

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

test("renders the user's profile image", () => {
  render(<AvatarSmall />);

  const avatar = screen.getByRole('img');
  expect(avatar).toBeInTheDocument();
});
