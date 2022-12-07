import React from 'react';

import * as S from './styles';

function UsersList({ users }) {
  return (
    <S.Container>
      <S.Title>Users list</S.Title>
      
      {users.length <= 0 ? <p>No users found</p> : (
        <S.ListItems>
          {users.map(user => (
            <S.ListItem key={user.id}>
              <S.Link to="">
                <S.Avatar src="https://github.com/maykbrito.png" />

                <S.Name>{user.name}</S.Name>
              </S.Link>
            </S.ListItem>
          ))}
        </S.ListItems>
      )}
    </S.Container>
  )
}

export default UsersList;