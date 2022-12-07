import React, { useEffect, useState } from 'react';

import * as S from './styles';

function Table({ columns, rows, totalRows, actualPage, setActualPage }) {
  const [pagesList, setPagesList] = useState([1])

  useEffect(() => {
    if (totalRows > 1) {
      const totalPages = Math.ceil(totalRows / 10)
      
      const numbers = []
      
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i)
      }
      
      setPagesList(numbers)
    }
  }, [totalRows])

  const handlerPagination = page => setActualPage(page)

  return (
    <S.Container>
      <thead>
        <tr>
          {columns.map(column => <S.TableCellHeader key={column}>{column}</S.TableCellHeader>)}
        </tr>
      </thead>

      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            {columns.map(key => (
              <S.TableCell key={`${key}${row.id}`}>
                {row[key] || <i><small>No value found</small></i>}
              </S.TableCell>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <S.TableCellRight colSpan={2}>
            <S.PagingationLabel>Previous</S.PagingationLabel>
            
            <S.PaginationNumbers>
              {pagesList.map(page => (
                <S.PaginationNumber
                  key={page}
                  className={page === actualPage && 'active'}
                  onClick={() => handlerPagination(page)}
                >
                  {page}
                </S.PaginationNumber>
              ))}
            </S.PaginationNumbers>

            <S.PagingationLabel>Next</S.PagingationLabel>
          </S.TableCellRight>
        </tr>
      </tfoot>
    </S.Container>
  );
}

export default Table;