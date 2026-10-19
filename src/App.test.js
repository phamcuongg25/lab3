import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message and navigation', () => {
  render(<App />);
  const brandElement = screen.getByText(/ProductStore/i);
  expect(brandElement).toBeInTheDocument();
  const welcomeElement = screen.getByText(/Welcome to ProductStore/i);
  expect(welcomeElement).toBeInTheDocument();
  const viewProductsButton = screen.getByText(/View products/i);
  expect(viewProductsButton).toBeInTheDocument();
});
