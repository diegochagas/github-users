import React from 'react'

import { LogoIcon } from '../Icons'
import { COLORS } from '../../styles';
import * as S from './styles';

function Header() {
  return (
    <S.Container data-testid="header">
      <S.Content>
        <S.Logo>
          <LogoIcon color={COLORS.GREEN_500} width={32} />

          <S.LogoText>Github users</S.LogoText>
        </S.Logo>
      </S.Content>
    </S.Container>
  )
}

export default Header