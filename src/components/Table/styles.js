import styled from 'styled-components';

import { COLORS } from '../../styles';

export const Container = styled.table`
  font-size: .875rem;
`

export const TableCellHeader = styled.th`
  border-top: 1px solid ${COLORS.GRAY_600};
  padding: 1rem;
  text-transform: capitalize;
  text-align: inherit;
`

export const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid ${COLORS.GRAY_600};
`

export const TableCellRight = styled(TableCell)`
  text-align: right;
`

export const PagingationButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  background: transparent;
  border: 1px solid ${COLORS.GRAY_600};
  border-radius: 5px;
  color: ${COLORS.GRAY_300};
  
  &:not(:disabled):hover {
    background-color: ${COLORS.GRAY_600};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const PaginationNumbers = styled.div`
  display: inline-flex;
  margin: 0 .5rem;
`

export const PaginationNumber = styled.span`
  display: inline-block;
  padding: .5rem;
  cursor: pointer;
  border: 1px solid ${COLORS.GRAY_600};
  margin: 0 .1rem;
  border-radius: 5px;

  &.active, &:hover {
    background-color: ${COLORS.GRAY_600};
  }
`
