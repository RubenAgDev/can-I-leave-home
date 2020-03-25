import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders No.', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/No./i);
  expect(linkElement).toBeInTheDocument();
});
