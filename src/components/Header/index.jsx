import React from 'react'

import { LogoIcon } from '../../assets'
import { COLORS } from '../../styles';
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <LogoIcon color={COLORS.GREEN_500} width={32} />

          <S.LogoText>Github users</S.LogoText>
        </S.Logo>
        <nav>
          <S.NavLinks>
            <li>
              <S.Link to="/search">Search</S.Link>
            </li>
            <li>
              <S.Link to="/user">User</S.Link>
            </li>
          </S.NavLinks>
        </nav>
      </S.Content>
    </S.Container>
  )
}

export default Header