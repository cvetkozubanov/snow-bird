import { render, screen as reactScreen } from '@testing-library/react';

import { App } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = reactScreen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
