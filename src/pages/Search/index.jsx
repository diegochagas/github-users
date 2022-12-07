import React, { useState } from 'react';

import { SearchIcon } from '../../assets'
import UsersList from '../../components/UsersList';
import { COLORS } from '../../styles';
import * as S from './styles';

const users = [
  { id: 1, name: 'diegochagas' },
  { id: 2, name: 'diegoeg3' },
  { id: 3, name: 'maykbrito' }
]

function Search() {
  const [searchField, setSearchField] = useState('')

  const handleSearchField = event => {
    setSearchField(event.target.value)
  }

  const searchFieldIsEmpty = () => {
    return searchField.length === 0
  }

  return (
    <S.Container>
      <S.Title>Search users</S.Title>

      <S.SearchField>
        <S.SearchInput
          type="text"
          placeholder="type username"
          value={searchField}
          onChange={handleSearchField}
        />
        
        <S.SearchButton>
          <SearchIcon width={25} color={COLORS.WHITE} disabled={searchFieldIsEmpty} />
        </S.SearchButton>
      </S.SearchField>

      <UsersList users={users} />
    </S.Container>
  );
}

export default Search;