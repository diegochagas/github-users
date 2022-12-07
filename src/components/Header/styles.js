import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import { COLORS } from '../../styles';

export const Container = styled.header`
  background: ${COLORS.GRAY_800};
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
  max-width: 48rem;
  margin: 0 auto;
`

export const Logo = styled.h1`
  margin-left: 1.5rem;
  font-size: 1.5rem;
  color: ${COLORS.GREEN_500};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const LogoImage = styled.img`
  background-color: ${COLORS.GREEN_500};
  border-radius: 50%;
`

export const LogoText = styled.span`
  display: block;
`

export const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100%;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: ${COLORS.WHITE};
  padding: 1.5rem;

  &:hover, &:focus {
    background-color: ${COLORS.GRAY_600};
  }
`