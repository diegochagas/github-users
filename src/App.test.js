import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App component', () => {
  render(<App />);

  const linkElement = screen.getByText(/Search/i);
  
  expect(linkElement).toBeInTheDocument();
});
