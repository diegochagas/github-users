import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { COLORS } from '../../styles';

export const Container = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
`

export const ListItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListItem = styled.li`
  margin: .5rem 0;
  width: 18.75rem;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  padding: .5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${COLORS.GRAY_600};
  border-radius: 8px;
  width: 100%;
  max-width: 768px;

  &:hover, &:focus {
    background-color: ${COLORS.GRAY_600};
  }
`

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: 4px solid ${COLORS.GRAY_800};
`

export const Name = styled.span`
  color: ${COLORS.GRAY_100};
`