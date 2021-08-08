// import { useEffect, useState } from 'react'
import * as S from './ContainerStyler'

// interface IGithub {
//   name: string;
//   // eslint-disable-next-line camelcase
//   html_url: string;
//   id: number | string;
// }

// async function getData () {
//   const data = await fetch(
//     'https://api.github.com/users/eletromaximus/repos'
//   )
//     .then((message) => message.json()
//     )
//     .catch((erro) => {
//       throw new Error(erro)
//     })

//   if (data.length >= 2) {
//     const info = data.map((repos: any) => {
//       return {
//         name: repos.name,
//         html_url: repos.html_url,
//         id: repos.id
//       }
//     })
//     return info
//   }
// }

function App () {
  // const [profile, setProfile] = useState<any[]>()

  // useEffect(() => {
  //   const data = getData()

  //   if (data !== undefined) {
  //     setProfile(data)
  //   }
  // })
  return (
    <S.Container>
      <S.Bio>
        <div id="profile">
          <ul>
            {/* { profile && profile.map((reposistory: IGithub) => {
              return (
                <li key={reposistory.id}>
                  {reposistory.name}
                </li>
              )
            })} */}
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
