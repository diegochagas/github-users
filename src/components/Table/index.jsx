import React, { useEffect, useState } from 'react';
import { COLORS } from '../../styles';
import { ArrowBackIcon, ArrowFowardIcon } from '../Icons';

import * as S from './styles';

function Table({ columns, rows, totalRows, actualPage, setActualPage }) {
  const [pagesList, setPagesList] = useState([1])
  const totalPages = Math.ceil(totalRows / 10)

  useEffect(() => {
    if (totalRows > 1) {
      const numbers = []
      
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i)
      }
      
      setPagesList(numbers)
    }
  }, [totalPages, totalRows])

  const handlerPagination = page => setActualPage(page)
  
  const handlePreviousPagination = () => setActualPage(prevState => prevState - 1)

  const handleNextPagination = () => setActualPage(prevState => prevState + 1)

  const isFirstPage = () => actualPage === 1

  const isLastPage = () => actualPage === totalPages

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
            <S.PagingationButton
              title="Move pagination back"
              onClick={handlePreviousPagination}
              disabled={isFirstPage()}
            >
              <ArrowBackIcon width={10} color={COLORS.GRAY_300} />
            </S.PagingationButton>
            
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

            <S.PagingationButton
              title="Move pagination foward"
              onClick={handleNextPagination}
              disabled={isLastPage()}
            >
              <ArrowFowardIcon width={10} color={COLORS.GRAY_300} />
            </S.PagingationButton>
          </S.TableCellRight>
        </tr>
      </tfoot>
    </S.Container>
  );
}

export default Table;