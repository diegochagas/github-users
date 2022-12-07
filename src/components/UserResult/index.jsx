import React from 'react';

import * as S from './styles';

function UserResult({ user }) {
  return (
    <S.Container>
      <S.Title>Users list</S.Title>
      
      {!user.login ? <S.EmptyUsers>No users found</S.EmptyUsers> : (
        <S.ListItems>
            <S.ListItem>
              <S.Link to={`/user/${user.login}`}>
                <S.Avatar src={user.avatar_url} />

                <S.Name>{user.login}</S.Name>
              </S.Link>
            </S.ListItem>
        </S.ListItems>
      )}
    </S.Container>
  )
}

export default UserResult;