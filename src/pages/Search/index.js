import React, { useState } from 'react';

import { SearchIcon } from '../../components/Icons'
import UserResult from '../../components/UserResult';
import { COLORS } from '../../styles';
import api from '../../api'
import * as S from './styles';

function Search() {
  const [searchField, setSearchField] = useState('')
  const [userData, setUserData] = useState({})

  const handleSearchField = event => {
    setSearchField(event.target.value)
  }

  const searchFieldIsEmpty = () => {
    return searchField.length === 0
  }

  const handleSearchUser = async event => {
    event.preventDefault()
    
    const data = await api.get(`/${searchField}`)

    setUserData(data)
  }

  return (
    <S.Container>
      <S.Title>Search users</S.Title>

      <S.SearchField onSubmit={handleSearchUser}>
        <S.SearchInput
          type="text"
          placeholder="type username"
          value={searchField}
          onChange={handleSearchField}
        />
        
        <S.SearchButton title="Search username">
          <SearchIcon width={25} color={COLORS.WHITE} disabled={searchFieldIsEmpty} />
        </S.SearchButton>
      </S.SearchField>

      <UserResult user={userData} />
    </S.Container>
  );
}

export default Search;