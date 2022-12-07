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
  text-align: end;
`

export const PagingationLabel = styled.span`
  padding: .5rem;
  
  &:hover {
    background-color: ${COLORS.GRAY_600};
  }
`

export const PaginationNumbers = styled.div`
  display: inline-block;
  margin: 0 .5rem;
`

export const PaginationNumber = styled.span`
  display: inline-block;
  padding: .5rem;
  cursor: pointer;

  &.active, &:hover {
    background-color: ${COLORS.GRAY_600};
  }
`
