/* eslint-disable camelcase */
import { useEffect, useState } from 'react'

interface IProfile {
  name: string,
  url: string,
  avatar_url: string
}
export interface IGithub {
  name: string,
  url: string,
  github_url: string
  id: number
}

export default function useGithub (): [IGithub[], IProfile] {
  const [profile, setProfile] = useState<IGithub[]>([{
    name: '',
    url: '',
    github_url: '',
    id: 0
  }])
  const [bio, setBio] = useState<IProfile>({
    name: '',
    url: '',
    avatar_url: ''
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

    const { name, url, avatar_url }: IProfile = databio

    setBio({ name, url, avatar_url })
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
          id: repos.id
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
