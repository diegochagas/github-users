import React, { useState } from 'react';

import * as S from './styles';

const repositories = [
  { name: 'graphql-react-event-booking', description: 'Build a Project with GraphQL, Node, MongoDB and React.js' },
  { name: 'blog', description: 'Web app that shows a list of posts.' },
  { name: 'weather-api', description: 'Test with React and Redux using the Weather Api to show a list of city and its climes.' }
]


function User() {
  const [pagination, setPagination] = useState(1)

  const handlerPagination = page => setPagination(page)

  return (
    <S.Container>
      <S.Title>User details</S.Title>

      <S.Profile>
        <S.ProfilePicture src="https://github.com/diegochagas.png" />

        <S.Name>Diego Chagas</S.Name>

        <S.Total>43 repositories</S.Total>
      </S.Profile>

      <S.Table>
        <thead>
          <tr>
            <S.TableCellHeader>Name</S.TableCellHeader>

            <S.TableCellHeader>Description</S.TableCellHeader>
          </tr>
        </thead>

        <tbody>
          {repositories.map(repo => (
            <tr>
              <S.TableCell>{repo.name}</S.TableCell>

              <S.TableCell>{repo.description}</S.TableCell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <S.Pagination colSpan={2}>
              <S.PagingationLabel>Previous</S.PagingationLabel>
              
              <S.PaginationNumbers>
                {[1, 2, 3].map(page => (
                  <S.PaginationNumber className={page === pagination && 'active'} onClick={() => handlerPagination(page)}>
                    {page}
                  </S.PaginationNumber>
                ))}
              </S.PaginationNumbers>

              <S.PagingationLabel>Next</S.PagingationLabel>
            </S.Pagination>
          </tr>
        </tfoot>
      </S.Table>
      
      <footer>
        <S.BackButton to="/search">Search another user</S.BackButton>
      </footer>
    </S.Container>
  );
}

export default User;