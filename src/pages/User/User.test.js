import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'

import User from '.'

test('should render User component', () => {
  render(
    <HashRouter>
      <User />
    </HashRouter>
  )

  const userElement = screen.getByTestId('user-details')

  expect(userElement).toHaveTextContent('User details')
})