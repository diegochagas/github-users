import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../api';
import Table from '../../components/Table';
import * as S from './styles';

function User() {
  const [user, setUser] = useState({})
  const [repositories, setRepositories] = useState([])
  const [tablePage, setTablePage] = useState(1)
  const { login } = useParams()
  const columns = ['name', 'description']

  useEffect(() => {
    async function getUser() {
      const data = await api.get(`/${login}`)

      setUser(data)
    }

    getUser()
  }, [login])

  useEffect(() => {
    async function getRepositories() {

      const data = await api.get(`/${user.login}/repos?page=${tablePage}&per_page=10`)

      setRepositories(data)
    }

    if (user.login) getRepositories()
  }, [tablePage, user.login])

  const changeTextToSingleOrPlural = (startingText, amount) => {
    return `${startingText}${amount === 1 ? 'y' : 'ies'}`
  }

  return (
    <S.Container data-testid="user-details">
      <S.Title>User details</S.Title>

      <S.Profile>
        <S.ProfilePicture src={user.avatar_url} />

        <S.Name>{user.name}</S.Name>

        <S.Total>
          {user.public_repos} {changeTextToSingleOrPlural('repositor', user.public_repos)}
        </S.Total>
      </S.Profile>

      {repositories.length > 0 && (
        <Table
          columns={columns}
          rows={repositories}
          totalRows={user.public_repos}
          actualPage={tablePage}
          setActualPage={setTablePage}
        />
      )}
      
      <footer>
        <S.BackButton to="/search">Search another user</S.BackButton>
      </footer>
    </S.Container>
  );
}

export default User;