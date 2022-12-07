import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '../../styles';

export const Container = styled.div`
  background: ${COLORS.GRAY_800};
  border-radius: 8px;
  padding: 2.5rem;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`

export const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`

export const ProfilePicture = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${COLORS.GRAY_800};
  outline: 2px solid ${COLORS.GREEN_500};
`

export const Name = styled.p``

export const Total = styled.h3``

export const Table = styled.table`
`

export const TableCellHeader = styled.th`
border-top: 1px solid ${COLORS.GRAY_600};
padding: 1rem;
`

export const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid ${COLORS.GRAY_600};
`

export const Pagination = styled.td`
  text-align: end;
  border-top: 1px solid ${COLORS.GRAY_600};
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

  &.active {
    background-color: ${COLORS.GRAY_600};
  }
`

export const BackButton = styled(NavLink)`
  background: ${COLORS.GREEN_500};
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${COLORS.WHITE};
  margin: 1rem 0;
`