import styled from 'styled-components'
import { COLORS } from '../../styles';

export const Container = styled.header`
  background: ${COLORS.GRAY_800};
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
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