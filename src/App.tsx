/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import * as S from './ContainerStyler'

interface IGithub {
  name: string;
  html_url: string;
  id: number | string;
}

function App () {
  const [profile, setProfile] = useState<IGithub[]>()

  async function Data () {
    const data = await fetch(
      'https://api.github.com/users/eletromaximus/repos'
    )
      .then((message) => message.json()
      )
      .catch((erro) => {
        throw new Error(erro)
      })

    if (data.length >= 2) {
      const info: IGithub[] = await data.map((repos: any) => {
        return {
          name: repos.name,
          html_url: repos.html_url,
          id: repos.id
        }
      })
      return setProfile(info)
    } else {
      return [{
        id: 0,
        name: '',
        html_url: ''
      }]
    }
  }

  useEffect(() => {
    Data()
  })

  return (
    <S.Container>
      <S.Bio>
        <div id="profile">
          <ul>
            { profile && profile.map((reposistory: IGithub) => {
              return (
                <li key={reposistory.id}>
                  {reposistory.name}
                </li>
              )
            })}
          </ul>
        </div>
      </S.Bio>
      <S.Projetos>
        aqui vai os projetos
      </S.Projetos>
    </S.Container>
  )
}

export default App
