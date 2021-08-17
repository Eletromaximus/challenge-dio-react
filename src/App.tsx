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
        {bio && <S.Profile>
          <img
            src={bio.avatar_url}
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
