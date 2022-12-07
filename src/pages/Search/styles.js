import styled from 'styled-components'

import { COLORS } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
`

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

export const SearchInput = styled.input`
  width: 100%;
  background: ${COLORS.GRAY_900};
  border: 1px solid ${COLORS.GRAY_300};
  border-right: none;
  resize: none;
  height: 3rem;
  padding: 1rem;
  border-radius: 8px 0 0 8px;
  color: ${COLORS.GRAY_100};
`

export const SearchButton = styled.button`
  background: ${COLORS.GREEN_500};
  border: 1px solid ${COLORS.GRAY_300};
  border-left: none;
  border-radius: 0 8px 8px 0;
  font-weight: bold;
  height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`