# Desfio profile do github proposto pela Digital Inovation One

Utizando da Api Rest, foi realizado requisições com Api Fetch com o objetivo de:
  * coletar informações do profile, por meior da url: https://api.github.com/users/eletromaximus;
  * Coletar dados genéricos de cada projeto, por meio da url: https://api.github.com/users/eletromaximus/repos;

  Um Hook foi criado especificamente para este propósito:

~~~ javascript 
  /* eslint-disable camelcase */
import { useEffect, useState } from 'react'

interface IProfile {
  name: string,
  url: string
}
export interface IGithub {
  name: string,
  url: string,
  github_url: string
  id: number,
  avatar: string
}

export default function useGithub (): [IGithub[], IProfile] {
  const [profile, setProfile] = useState<IGithub[]>([{
    name: '',
    url: '',
    github_url: '',
    id: 0,
    avatar: ''
  }])
  const [bio, setBio] = useState<IProfile>({
    name: '',
    url: ''
  })

  async function Bio () {
    const databio = await fetch(
      'https://api.github.com/users/eletromaximus'
    )
      .then((message) => message.json()
      )
      .catch((erro) => {
        throw new Error(erro)
      })

    const { name, url }: IProfile = databio

    setBio({ name, url })
  }

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
      const repos: IGithub[] = await data.map((repos: any) => {
        return {
          name: repos.name,
          url: repos.html_url,
          github_url: repos.owner.url,
          id: repos.id,
          avatar: repos.owner.avatar_url
        }
      })
      setProfile(repos)
    }
  }

  useEffect(() => {
    Data()
    Bio()
  })

  return [profile, bio]
}

~~~

Com a estilização feita com styled-componentes, todo o código ficou contido em apenas 40 linha 
na página principal:

~~~ javascript 

/* eslint-disable camelcase */
import Card from './components/Cards'
import * as S from './ContainerStyler'
import useGithub, { IGithub } from './Hooks/useGithub'
/* */
function App () {
  const [profile, bio] = useGithub()

  return (
    <S.Container>
      <S.Bio>
        {profile && <S.Profile>
          <img
            src={profile[0].avatar}
            alt="image profile"
          />
          <div id="bio">
            <p>Nome: {bio.name} </p>
            <p> Github: {bio.url} </p>
          </div>
        </S.Profile>}
      </S.Bio>
      <S.Projetos>
        <ul>
          {
            profile.map((repo: IGithub) => {
              return (
                <li key={repo.id}>
                  <Card url={repo.url} name={repo.name} />
                </li>
              )
            })
          }
        </ul>
      </S.Projetos>
    </S.Container>
  )
}

export default App
~~~

O resultado será semelhante a este:

![desafio](https://github.com/Eletromaximus/challenge-dio-react/blob/main/desafio.png)
