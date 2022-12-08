import { render, screen } from '@testing-library/react'

import Search from '.'

test('should render Search component', () => {
  render(<Search />)

  const searchElement = screen.getByTestId('search')

  expect(searchElement).toHaveTextContent('Search')
})