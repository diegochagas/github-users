import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import UserResult from '.'

afterEach(() => {
  cleanup()
})

test('should render UserResult component', () => {
  const user = { login: 'testname', avatar_url: 'test.png' }

  render(
    <BrowserRouter>
      <UserResult user={user} />
    </BrowserRouter>
  )

  const userElement = screen.getByTestId('user-result')

  expect(userElement).toHaveTextContent('testname')
})

test('should show Not Found message', () => {
  const user = {}

  render(
    <BrowserRouter>
      <UserResult user={user} />
    </BrowserRouter>
  )

  const userElement = screen.getByTestId('user-result')

  expect(userElement).toHaveTextContent('No users found')
})