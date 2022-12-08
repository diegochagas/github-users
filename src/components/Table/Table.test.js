import React from 'react'
import { render, screen } from '@testing-library/react'

import Table from '.'

const columns = ['name', 'description']

test('should render Table component', () => {
  const rows = [
    { id: '1', name: 'test 1', description: 'making test 1' },
    { id: '2', name: 'test 2', description: 'making test 2' }
  ]
  
  let actualPage = 1
  const setaActualPage = page => actualPage = page

  render( <Table
    columns={columns}
    rows={rows}
    totalRows={rows.length}
    actualPage={actualPage}
    setActualPage={setaActualPage}
  />)

  const headerElement = screen.getByTestId('table')

  expect(headerElement).toHaveTextContent('test 1')
})

test('should render Table component with empty fields message', () => {
  const rows = [
    { id: '1', name: 'test 1', description: 'making test 1' },
    { id: '2', name: '', description: '' }
  ]

  let actualPage = 1
  const setaActualPage = page => actualPage = page

  render( <Table
    columns={columns}
    rows={rows}
    totalRows={rows.length}
    actualPage={actualPage}
    setActualPage={setaActualPage}
  />)

  const tableElement = screen.getByTestId('table')

  expect(tableElement).toHaveTextContent('No value found')
})