import { render, screen, cleanup } from '@testing-library/react'
import Header from '.'

it('should render Header component', () => {
  render(<Header />)

  const headerElement = screen.getByTestId('header')
  
  expect(headerElement).toBeInTheDocument()
  
})

it('component should show text', () => {
  render(<Header />)
  
  const headerElement = screen.getByTestId('header')
  
  expect(headerElement).toHaveTextContent('Github')
})