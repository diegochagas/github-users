import { cleanup, render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Search from '.'

configure({ adapter: new Adapter() });


afterEach(() => {
  cleanup()
})

test('should render Search component', () => {
  render(
    <HashRouter>
      <Search />
    </HashRouter>
  )

  const searchElement = screen.getByTestId('search')

  expect(searchElement).toHaveTextContent('Search')
})

/*
test('should render Search component if serch field is called', () => {
  const searchElement = shallow(<Search />)

  searchElement.searchField({ searchField: 'diegochagas' })

  expect(searchElement.setSearchField).toBeCalled()
})
*/