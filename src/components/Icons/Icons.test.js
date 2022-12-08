import { render, screen, cleanup } from '@testing-library/react'
import { LogoIcon, SearchIcon, ArrowBackIcon, ArrowFowardIcon } from '.'

afterEach(() => {
  cleanup()
})

test('should render Icons component with LogoIcon', () => {
  render(<LogoIcon />)

  const logoElement = screen.getByTestId('logo-icon')

  expect(logoElement).toBeInTheDocument()
})

test('should render Icons component with SearchIcon', () => {
  render(<SearchIcon />)

  const searchElement = screen.getByTestId('search-icon')

  expect(searchElement).toBeInTheDocument()
})

test('should render Icons component with ArrowBackIcon', () => {
  render(<ArrowBackIcon />)

  const arrowElement = screen.getByTestId('arrow-back-icon')

  expect(arrowElement).toBeInTheDocument()
})

test('should render Icons component with ArrowFowardIcon', () => {
  render(<ArrowFowardIcon />)

  const arrowElement = screen.getByTestId('arrow-foward-icon')

  expect(arrowElement).toBeInTheDocument()
})
