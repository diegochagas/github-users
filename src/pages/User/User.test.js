import { render, screen } from '@testing-library/react'

import User from '.'

test('should render User component', () => {
  render(<User />)

  const userElement = screen.getByTestId('user')

  expect(userElement).toHaveTextContent('Details')
})