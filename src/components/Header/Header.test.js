import { render, screen } from '@testing-library/react'

import Header from '.'

test('should render Header component', () => {
  render(<Header />)

  const headerElement = screen.getByTestId('header')

  expect(headerElement).toHaveTextContent('Github')
})