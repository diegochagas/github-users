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
      </S.Content>
    </S.Container>
  )
}

export default Header